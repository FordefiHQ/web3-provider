# Changelog

## 0.2.1-dev.6350432 (2024-05-13)
- Changed `EvmVault` type to have stricter `address: Hex`.
- Fixed README snippet to use a `bigint` for transaction `value`.
- Fixed address comparisons.

## 0.2.0 (2024-05-07)
- Added README & JSDoc comments.
- Added `typedoc` to generate docs from JSDoc comments and Typescript types in markdown & html.
- Changed RPC methods schema - split to `FordefiRpcSchema` and `NonFordefiRpcSchema`.
- Changed `target` in `tsconfig.json` to `ES2020`.
- Removed user info functionality.
- Fixed `lint-staged` glob pattern.
- Fixed broken error handling of Fordefi API errors.

## 0.1.0 (2024-05-01)
- Added `FordefiWeb3Provider` - an HTTP JSON RPC Web3 Provider compatible with [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193).
