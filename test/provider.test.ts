import {
  Address,
  ByteArray,
  Hex,
  hexToBytes,
  InvalidParamsRpcError,
  isHash,
  isHex,
  ProviderDisconnectedError,
  recoverMessageAddress,
  recoverTypedDataAddress,
  RpcError,
  RpcTransactionRequest,
  stringToBytes,
  stringToHex,
  TypedDataDefinition,
} from 'viem';
import { waitFor } from '../src/utils';
import { RequestArgs } from '../src';
import { MethodParams } from '../src/provider/provider.types';
import { createTestProvider, minedTransactionFixture, TEST_PROVIDER_CONFIG, testFixtures } from './provider.test.utils';
import msgParams from './fixtures/eth-sign-typed-data-v4-message.json';

const typedData = msgParams as TypedDataDefinition;

describe('Web3 Provider', () => {
  describe('EIP-1193 events', () => {
    test('on() should execute callback ', (done) => {
      const provider = createTestProvider();
      provider.on('connect', () => {
        done();
      });
    });

    test('removeListener() should remove the listener ', async () => {
      const provider = createTestProvider();

      const listener = jest.fn();

      provider.on('connect', listener);
      provider.removeListener('connect', listener);

      await waitFor(2_000);
      expect(listener).not.toHaveBeenCalled();
    });

    test("should emit 'connect' right after constructing a new provider", async () => {
      const provider = createTestProvider();

      await provider.waitForEmittedEvent('connect');
      expect(provider.getStatus()).toBe('connected');
    });

    test("should emit 'disconnect' with an rpc error payload", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const waitingForDisconnect = provider.waitForEmittedEvent('disconnect');
      provider.disconnect();
      const emitResult = await waitingForDisconnect;

      expect(emitResult.code).toBe(ProviderDisconnectedError.code);
      expect(provider.getStatus()).toBe('disconnected');
    });

    test("should NOT emit 'chainChanged' after provider is initialized and connected", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const waitingForEvent = provider.waitForEmittedEvent('chainChanged');
      const response = await provider.request({
        method: 'eth_chainId',
      });

      // the event is NOT emitted, the provider initializes the chain once on creation
      await expect(waitingForEvent).rejects.toBe("Timeout waiting for event 'chainChanged'");
      expect(response).toEqual(testFixtures.chainIdSepoliaHex);
    });

    test.each(['eth_accounts', 'eth_requestAccounts'] as const)(
      "should NOT emit 'accountsChanged' on '%s' after provider is initialized and connected",
      async (accountsMethod) => {
        const provider = createTestProvider();
        await provider.waitForEmittedEvent('connect');

        const waitingForEvent = provider.waitForEmittedEvent('accountsChanged');
        await provider.request({
          method: accountsMethod,
        });

        // the event is NOT emitted since the provider sets an account once on creation
        await expect(waitingForEvent).rejects.toBe("Timeout waiting for event 'accountsChanged'");
      },
    );
  });

  describe('request() methods implemented by Fordefi', () => {
    test("'eth_chainId' should return the chain id used to initialize the provider", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const response = await provider.request<'eth_chainId'>({
        method: 'eth_chainId',
      });

      expect(response).toEqual(testFixtures.chainIdSepoliaHex);
    });

    test.each(['eth_accounts', 'eth_requestAccounts'] as const)(
      "'%s' should return the address used to initialize the provider",
      async (accountsMethod) => {
        const provider = createTestProvider();
        await provider.waitForEmittedEvent('connect');

        const response = await provider.request({
          method: accountsMethod,
        });

        expect(response).toStrictEqual([TEST_PROVIDER_CONFIG.address]);
      },
    );

    const typedDataTestCases = [
      {
        method: 'eth_signTypedData',
        // test params passed in opposite order
        params: [typedData, TEST_PROVIDER_CONFIG.address] as unknown as MethodParams<'eth_signTypedData'>,
      } satisfies RequestArgs<'eth_signTypedData'>,
      {
        method: 'eth_signTypedData_v3',
        params: [TEST_PROVIDER_CONFIG.address, typedData],
      } satisfies RequestArgs<'eth_signTypedData_v3'>,
      {
        method: 'eth_signTypedData_v4',
        params: [TEST_PROVIDER_CONFIG.address, typedData],
      } satisfies RequestArgs<'eth_signTypedData_v4'>,
    ];

    test.each(typedDataTestCases)("'$method' should return signed data", async (args) => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const signature = await provider.request(args);

      const recoveredSignerAddress = await recoverTypedDataAddress({
        ...typedData,
        signature: hexToBytes(signature),
      });
      expect(recoveredSignerAddress).toBe(TEST_PROVIDER_CONFIG.address);
    });

    test("'personal_sign' should return a signature - given a hex encoded string", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const message = 'please sign this message';
      const signature = await provider.request({
        method: 'personal_sign',
        params: [stringToHex(message), TEST_PROVIDER_CONFIG.address],
      });

      await assertMessageSignature(message, signature);
    });

    test("'personal_sign' should return a signature - given a string", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const message = 'please sign this message';
      const signature = await provider.request({
        method: 'personal_sign',
        params: [message as Hex, TEST_PROVIDER_CONFIG.address],
      });

      await assertMessageSignature(message, signature);
    });

    test("'eth_signTransaction' should return a signed transaction", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const transaction = {
        from: TEST_PROVIDER_CONFIG.address,
        to: testFixtures.toAddress,
        value: testFixtures.value,
      } satisfies Partial<RpcTransactionRequest>;

      const signedTransaction = await provider.request({
        method: 'eth_signTransaction',
        params: [transaction],
      });

      console.debug(`signed transaction is '${signedTransaction}'`);
      expect(isHex(signedTransaction)).toBeTruthy();
    });

    test("'eth_sendTransaction' should return a mined transaction hash", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const transaction = {
        from: TEST_PROVIDER_CONFIG.address,
        to: testFixtures.toAddress,
        value: testFixtures.value,
        maxFeePerGas: '0x59fe8878',
        maxPriorityFeePerGas: '0x364baafb',
        gas: '0x56ce',
      } satisfies Partial<RpcTransactionRequest>;

      const transactionHash = await provider.request({
        method: 'eth_sendTransaction',
        params: [transaction],
      });

      console.debug(`Transaction hash: '${transactionHash}'`);
      expect(isHash(transactionHash)).toBeTruthy();
    });

    test('should throw invalid params error', async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const invalidTransaction = {
        from: TEST_PROVIDER_CONFIG.address,
        to: 'invalid-address' as Address,
        value: testFixtures.value,
      } satisfies Partial<RpcTransactionRequest>;

      let error: RpcError | undefined = undefined;
      try {
        await provider.request({
          method: 'eth_signTransaction',
          params: [invalidTransaction],
        });
      } catch (e) {
        error = e as RpcError;
      }

      expect(error).toMatchObject({
        code: InvalidParamsRpcError.code,
        details: 'Transaction "to" is either missing or invalid',
      });
    });
  });

  describe('fallback provider methods', () => {
    test("'eth_sendRawTransaction' sends a signed transaction returned from 'eth_signTransaction'", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const transaction = {
        from: TEST_PROVIDER_CONFIG.address,
        to: testFixtures.toAddress,
        value: testFixtures.value,
      } satisfies Partial<RpcTransactionRequest>;

      const signedRawTransaction = await provider.request({
        method: 'eth_signTransaction',
        params: [transaction],
      });

      const transactionHash = await provider.request({
        method: 'eth_sendRawTransaction',
        params: [signedRawTransaction],
      });

      expect(transactionHash).toBeTruthy();
    });

    test("forwarded request 'eth_getTransactionByHash' handled by fallback provider", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const transaction = await provider.request({
        method: 'eth_getTransactionByHash',
        params: [minedTransactionFixture.hash],
      });

      expect(transaction!.value).toBe(minedTransactionFixture.value);
    });

    test('should throw if fallback provider throws', async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      let error: RpcError | undefined;
      try {
        await provider.request({
          method: 'eth_getTransactionByHash',
          params: ['invalid-param' as Hex],
        });
      } catch (e) {
        error = e as RpcError;
      }

      expect(error).toMatchObject({
        code: InvalidParamsRpcError.code,
        details: 'data types must start with 0x', // this applies specifically infura's provider
      });
    });
  });
});

async function assertMessageSignature(message: string | Hex, signature: Hex | ByteArray) {
  expect(
    await recoverMessageAddress({
      message,
      signature,
    }),
  ).toBe(TEST_PROVIDER_CONFIG.address);

  expect(
    await recoverMessageAddress({
      message: { raw: stringToBytes(message) },
      signature,
    }),
  ).toBe(TEST_PROVIDER_CONFIG.address);

  expect(
    await recoverMessageAddress({
      message: { raw: stringToHex(message) },
      signature,
    }),
  ).toBe(TEST_PROVIDER_CONFIG.address);

  expect(
    await recoverMessageAddress({
      message: { raw: message as Hex },
      signature,
    }),
  ).toBe(TEST_PROVIDER_CONFIG.address);
}
