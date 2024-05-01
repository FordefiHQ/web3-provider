import { HTTPRequestInit, RequestOpts } from '../openapi';
import { signApiRequestBody, SignedPayloadParams } from './request-body-sign';

export enum Headers {
  Timestamp = 'X-Timestamp',
  Signature = 'X-Signature',
  UserAgent = 'User-Agent',
}

export const middlewareAddRequestSigningHeaders =
  (apiPayloadSignKeyBase64: string) =>
  async (context: { init: HTTPRequestInit; context: RequestOpts }): Promise<RequestInit> => {
    const signedBodyParams = await signApiRequestBody(context.init.body, apiPayloadSignKeyBase64);

    return {
      headers: {
        ...context.init.headers,
        ...signatureToHeaders(signedBodyParams),
      },
    };
  };

export const signatureToHeaders = ({ timestamp, signature }: SignedPayloadParams) => ({
  [Headers.Timestamp]: timestamp,
  [Headers.Signature]: signature,
});

export const getStaticHeaders = () => ({
  [Headers.UserAgent]: 'Fordefi Web3 Provider',
});
