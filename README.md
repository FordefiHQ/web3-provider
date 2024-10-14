<p align="center">
  <img src="logo.svg" style="width: 200px" alt="Fordefi Logo"/>
  <h1 align="center">Fordefi Web3 Provider</h1>
</p>

<img src="https://img.shields.io/npm/v/%40fordefi%2Fweb3-provider" alt="NPM Version"/>


<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
    * [Create a provider](#create-a-provider)
    * [Connect](#connect)
    * [Submit JSON RPC Requests](#submit-json-rpc-requests)
- [API Reference](#api-reference)
    * [Configuration](#configuration)
    * [Events](#events)
- [Examples](#examples)
- [About Fordefi](#about-fordefi)

<!-- TOC end -->


## Overview
This provider class implements [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) powered by the [Fordefi API](https://docs.fordefi.com).

It provides a [request()](https://eips.ethereum.org/EIPS/eip-1193#request) function to execute JSON RPC methods and emits the relevant [events](https://eips.ethereum.org/EIPS/eip-1193#events-1).


## Installation

Using yarn:
```bash
yarn add @fordefi/web3-provider
```
Using npm:
```bash
npm add --save @fordefi/web3-provider
```


## Usage

### Create a provider

Each instance manages a single address (vault) on a specific chain.

Follow the [API Reference](#api-reference) below for the available configuration options.

```ts
import { FordefiWeb3Provider, FordefiProviderConfig } from "@fordefi/web3-provider";

const config: FordefiProviderConfig = {
  chainId: 11155111,
  address: "0x1234567890123456789012345678901234567890",
  apiUserToken: process.env.FORDEFI_API_USER_TOKEN,
  apiPayloadSignKey: process.env.FORDEFI_API_PAYLOAD_SIGNING_KEY,
};

const provider = new FordefiWeb3Provider(config)
```

### Connect
The spec requires a provider to be [connected](https://eips.ethereum.org/EIPS/eip-1193#connectivity) to submit requests.

This provider automatically connects to Fordefi when a new instance is constructed,
and emits a `connect` event once communication with the Fordefi platform has been established.

To subscribe to the event:
```ts
// callback to act upon a `connect` event
const onConnect = ({ chainId }: ProviderConnectInfo) => {
  console.log(`Connected to chain ${chainId}`);
}

// option 1: subscribe using a callback
provider.on('connect', onConnect);

// option 2: wait for a promise to be resolved
const result = await provider.waitForEmittedEvent('connect');
onConnect(result);
// or
provider
  .waitForEmittedEvent('connect')
  .then(onConnect);
```

For more details, see [Events](#events). 

### Submit JSON RPC Requests
The `request({ method, params })` method sends JSON RPC requests to the provider.
It returns a promise that resolves to the result of the request.

All methods related to creating and/or signing transactions will resolve once the transaction has been successfully signed by an [API Signer](https://docs.fordefi.com/reference/program-overview).

This sample code shows you how to send a transaction:

```ts
const txHash = await provider.request({
  method: 'eth_sendTransaction',
  params: [{
    from: '0x1234567890123456789012345678901234567890',
    to: '0x1234567890123456789012345678901234567890',
    value: 1_500_000_000_000n,
  }],
});

console.log(`Transaction hash: ${txHash}`);
```


## API Reference

The full API reference is available on the [Fordefi Web3 Provider docs site](https://web3provider-docs.fordefi.com).

### Configuration

For details, see the [FordefiProviderConfig](./src/types/config.ts) interface.

```ts
interface FordefiProviderConfig {
  /**
   * Chain ID as a number or a named chain.
   *
   * For example, assuming Ethereum Sepolia chain:
   * - Numeric value: `EvmChainId.NUMBER_11155111` or `11155111`
   * - Named chain: `EvmChainUniqueId.ethereumSepolia` or 'evm_ethereum_sepolia'.
   */
  chainId: EvmChainId | EvmChainUniqueId;

  /**
   * EVM address.
   *
   * For example: '0x1234567890123456789012345678901234567890'.
   */
  address: Address;

  /**
   * Fordefi API user token (base64 encoded) issued via the Fordefi Web Console.
   * See: https://app.fordefi.com/user-management
   *
   * For example: 'eyJWthEAdEr.eyJwTPaYLoad.SiGNAtUrEBase64=='
   */
  apiUserToken: string;

  /**
   * Private key in PEM format used to sign the body of requests sent to the Fordefi API.
   * This is the content the private `.pem` file.
   * See: https://docs.fordefi.com/reference/pair-an-api-client-with-the-api-signer
   *
   * Example of a private ECDSA `.pem` file:
   * -----BEGIN EC PRIVATE KEY-----
   * PrivateKeyBase64==
   * -----END EC PRIVATE KEY-----
   */
  apiPayloadSignKey: string;
  
  /**
   * Fallback JSON-RPC HTTP node url.
   * Methods not implemented by this provider will pass through and be handled by this node.
   *
   * For example: 'https://rpc.sepolia.org'.
   */
  rpcUrl?: string;
  
  /**
   * Fordefi API base url (used for development), defaults to production API url.
   *
   * For example: 'https://api.fordefi.com'.
   */
  apiBaseUrl?: string;
}
```

### Events

Subscribe to events using the `on(eventName, callback)` method:

```ts
// emitted once during the connection process with the `address` you provided.
provider.on('accountsChanged', (accounts: Address[]) => { /* handle event here */ });

// emitted once during connection process with the `chainId` you provided
provider.on('chainChanged', (chainId: string) => { /* handle event here */ });

// provider becomes connected
provider.on('connect', (connectInfo: ProviderConnectInfo) => { /* handle event here */ });

// provider becomes connected
provider.on('disconnect', (error: ProviderRpcError) => { /* handle event here */ });
```

Usubscribe from events using the `removeListener(eventName, callback)` method, and provide the event name and the callback function
previously used to subscribe to the event. For example:

```ts
provider.removeListener('connect', onConnect);
```

The promisified `waitForEmittedEvent(eventName)` helper method returns a promise, that resolves once (following a single emitted event), with the event payload. For example:
```ts
provider
  .waitForEmittedEvent('connect')
  .then((connectInfo: ProviderConnectInfo) => {
    console.log(`Connected to chain ${connectInfo.chainId}`)
  });
```


## Examples

Checkout usage examples in the [e2e test](./test/provider.test.ts).


## About Fordefi
[Fordefi](https://fordefi.com) is a blockchain security company that provides an **institutional-grade MPC (Multi-Party Computation) non-custodial wallet** specifically built for decentralized finance (DeFi).

Fordefi focuses on enhancing the security and efficiency of transactions in the DeFi space through the innovative use of MPC technology for key management and transaction signing,
and by providing a secure and user-friendly interface through various clients:
1. [Fordefi Browser Extension](https://chromewebstore.google.com/detail/fordefi/hcmehenccjdmfbojapcbcofkgdpbnlle) for interaction with dApps.
2. [Fordefi Web Console](https://app.fordefi.com) for securely performing administrative operations such as setting up transaction policy rules and user management, which require approvals by a quorum of administrators.
3. [Fordefi API](https://docs.fordefi.com/reference/api-overview) for developers to interact with the Fordefi infrastructure.

Read more about Fordefi on the [site](https://fordefi.com) and [docs](https://docs.fordefi.com).
