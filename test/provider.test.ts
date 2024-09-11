import {
  Address,
  ByteArray,
  Hex,
  hexToBytes,
  InternalRpcError,
  InvalidParamsRpcError,
  isHash,
  isHex,
  numberToHex,
  ProviderDisconnectedError,
  recoverMessageAddress,
  recoverTypedDataAddress,
  RpcError,
  stringToBytes,
  stringToHex,
  TypedDataDefinition,
} from 'viem';
import { waitFor } from '../src/utils';
import {
  FordefiRpcSchema,
  FordefiWeb3TransactionRequest,
  NonFordefiRpcSchema,
  RequestArgs,
} from '../src/provider/provider.types';
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

  describe('Methods Implemented by Fordefi', () => {
    test("'eth_chainId' should return the chain id used to initialize the provider", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const response = await provider.request({
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
        params: [typedData, TEST_PROVIDER_CONFIG.address],
      } as unknown as RequestArgs<FordefiRpcSchema, 'eth_signTypedData'>,
      {
        method: 'eth_signTypedData_v3',
        params: [TEST_PROVIDER_CONFIG.address, typedData],
      } satisfies RequestArgs<FordefiRpcSchema, 'eth_signTypedData_v3'>,
      {
        method: 'eth_signTypedData_v4',
        params: [TEST_PROVIDER_CONFIG.address, typedData],
      } satisfies RequestArgs<FordefiRpcSchema, 'eth_signTypedData_v4'>,
    ] as const;

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
      } satisfies Partial<FordefiWeb3TransactionRequest>;

      const signedTransaction = await provider.request({
        method: 'eth_signTransaction',
        params: [transaction],
      });

      console.debug(`signed transaction is '${signedTransaction}'`);
      expect(isHex(signedTransaction)).toBeTruthy();
    });

    describe('eth_sendTransaction', () => {
      test("'eth_sendTransaction' given quantities as bigint should return a mined transaction hash", async () => {
        const provider = createTestProvider();
        await provider.waitForEmittedEvent('connect');

        const transaction = {
          from: TEST_PROVIDER_CONFIG.address,
          to: testFixtures.toAddress,
          value: testFixtures.value,
          maxFeePerGas: 150004177629n,
          maxPriorityFeePerGas: 1000528647n,
          gas: 22222n,
        } satisfies Partial<FordefiWeb3TransactionRequest>;

        const transactionHash = await provider.request({
          method: 'eth_sendTransaction',
          params: [transaction],
        });

        console.debug(`Transaction hash: '${transactionHash}'`);
        expect(isHash(transactionHash)).toBeTruthy();
      });

      test("'eth_sendTransaction' given quantities as hex strings should return a mined transaction hash", async () => {
        const provider = createTestProvider();
        await provider.waitForEmittedEvent('connect');

        const transaction = {
          from: TEST_PROVIDER_CONFIG.address,
          to: testFixtures.toAddress,
          value: numberToHex(testFixtures.value),
          maxFeePerGas: numberToHex(150004177629n),
          maxPriorityFeePerGas: numberToHex(1000528647n),
          gas: numberToHex(22222n),
        } satisfies Partial<FordefiWeb3TransactionRequest>;

        const transactionHash = await provider.request({
          method: 'eth_sendTransaction',
          params: [transaction],
        });

        console.debug(`Transaction hash: '${transactionHash}'`);
        expect(isHash(transactionHash)).toBeTruthy();
      });

      test("'eth_sendTransaction' given no 'value' or 'gas' values should return a mined transaction hash", async () => {
        const provider = createTestProvider();
        await provider.waitForEmittedEvent('connect');

        const transaction = {
          from: TEST_PROVIDER_CONFIG.address,
          to: testFixtures.toAddress,
        } satisfies Partial<FordefiWeb3TransactionRequest>;

        const transactionHash = await provider.request({
          method: 'eth_sendTransaction',
          params: [transaction],
        });

        console.debug(`Transaction hash: '${transactionHash}'`);
        expect(isHash(transactionHash)).toBeTruthy();
      });
    });

    // TODO: add test for contract creation omitting the "to" field in create transaction request

    test('should throw invalid params error', async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const invalidTransaction = {
        from: TEST_PROVIDER_CONFIG.address,
        to: 'invalid-address' as Address,
        value: testFixtures.value,
      } satisfies Partial<FordefiWeb3TransactionRequest>;

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

  describe('Fallback Provider Methods', () => {
    test("'eth_sendRawTransaction' sends a signed transaction returned from 'eth_signTransaction'", async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const transaction = {
        from: TEST_PROVIDER_CONFIG.address,
        to: testFixtures.toAddress,
        value: testFixtures.value,
      } satisfies Partial<FordefiWeb3TransactionRequest>;

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

      const transaction = await provider.request<NonFordefiRpcSchema, 'eth_getTransactionByHash'>({
        method: 'eth_getTransactionByHash',
        params: [minedTransactionFixture.hash],
      });

      expect(transaction?.value).toBe(minedTransactionFixture.value);
    });

    test('should throw if fallback provider throws', async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      let error: RpcError | undefined;
      try {
        await provider.request<NonFordefiRpcSchema, 'eth_getTransactionByHash'>({
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

  describe('Fordefi API Errors', () => {
    test('should throw an rpc error with the error payload', async () => {
      const provider = createTestProvider();
      await provider.waitForEmittedEvent('connect');

      const transaction = {
        from: TEST_PROVIDER_CONFIG.address,
        to: testFixtures.toAddress,
        value: testFixtures.value,
        // invalid fees
        maxPriorityFeePerGas: -1n,
        maxFeePerGas: -2n,
      } satisfies Partial<FordefiWeb3TransactionRequest>;

      let error: RpcError | undefined = undefined;
      try {
        await provider.request({
          method: 'eth_sendTransaction',
          params: [transaction],
        });
        throw new Error('Expected an error due to invalid fees');
      } catch (e) {
        error = e as RpcError;
      }

      expect(error.code).toBe(InternalRpcError.code);

      const errorDetails = JSON.parse(error.details);
      expect(errorDetails['title']).toBe('Cannot process data due to validation error');
      expect(errorDetails['request_id']).toBeTruthy();
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
