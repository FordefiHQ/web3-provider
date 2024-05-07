import {
  InternalRpcError,
  InvalidParamsRpcError,
  LimitExceededRpcError,
  ResourceNotFoundRpcError,
  UnauthorizedProviderError,
} from 'viem';
import { BlockchainsApi, Configuration, ResponseContext, TransactionsApi, VaultsApi } from '../openapi';

import { FordefiProviderConfig } from '../types';
import { FORDEFI_API_BASE_URL_PROD } from '../constants';
import { HttpStatus } from '../utils';
import { getStaticHeaders } from './headers';

const httpStatusToErrorClass = {
  [HttpStatus.BadRequest]: InvalidParamsRpcError,
  [HttpStatus.Unauthorized]: UnauthorizedProviderError,
  [HttpStatus.Forbidden]: UnauthorizedProviderError,
  [HttpStatus.NotFound]: ResourceNotFoundRpcError,
  [HttpStatus.ServiceUnavailable]: InternalRpcError,
  [HttpStatus.TooManyRequests]: LimitExceededRpcError,
  [HttpStatus.InternalServerError]: InternalRpcError,
} as const;

export class ApiClient {
  vaults: VaultsApi;
  blockchains: BlockchainsApi;
  transactions: TransactionsApi;

  constructor(providerConfig: FordefiProviderConfig) {
    const { apiBaseUrl, apiUserToken } = providerConfig;

    const config = new Configuration({
      basePath: apiBaseUrl ?? FORDEFI_API_BASE_URL_PROD,
      accessToken: apiUserToken,
      headers: getStaticHeaders(),
      middleware: [
        {
          post: async (context: ResponseContext): Promise<Response | void> => {
            if (context.response?.status < 400) {
              return;
            }

            const payload = await context.response
              ?.clone()
              .json()
              .catch(() => 'Failed to parse error response body')
              .then(JSON.stringify);
            const status = context.response?.status;
            const error = new Error(payload);

            // translate http status codes to rpc errors defined in EIP-1193 (https://eips.ethereum.org/EIPS/eip-1193)
            const ErrorClass = httpStatusToErrorClass[status as number & HttpStatus] ?? InternalRpcError;

            throw new ErrorClass(error);
          },
        },
      ],
    });

    this.vaults = new VaultsApi(config);
    this.blockchains = new BlockchainsApi(config);
    this.transactions = new TransactionsApi(config);
  }
}
