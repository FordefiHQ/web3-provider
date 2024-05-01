import * as crypto from 'crypto';
import { isValidBase64 } from '../utils';

export interface SignedPayloadParams {
  timestamp: string;
  signature: string;
}

const dashes = '-----';
const pemBeginClause = `${dashes}BEGIN EC PRIVATE KEY${dashes}`;
const pemEndClause = `${dashes}END EC PRIVATE KEY${dashes}`;

const endpointRequiresSignature = '/api/v1/transactions';

/**
 * Signs the request payload with the private key using ECDSA and SHA-256.
 *
 * Example of a pem private key file content:
 *
 * ```bash
 * -----BEGIN EC PRIVATE KEY-----
 * aaaaa
 * bbb/ccccc/ddd+ee+ff
 * gg/hh+ii==
 * -----END EC PRIVATE KEY-----
 * ```
 */
export const signApiRequestBody = async (
  body: object,
  pem: string,
  date = new Date(),
): Promise<SignedPayloadParams> => {
  const timestamp = date.getTime().toString();

  // for example: /api/v1/transactions|1714485238000|{"from":"0x1234","to":"0x5678","value":"1000000000000000000"}
  const payloadToSign = [endpointRequiresSignature, timestamp, JSON.stringify(body)].join('|');

  const privateKey = crypto.createPrivateKey(toValidPem(pem));
  const sign = crypto.createSign('SHA256').update(payloadToSign, 'utf8').end();
  const signature = sign.sign(privateKey, 'base64');

  return {
    timestamp,
    signature,
  };
};

const toValidPem = (pem: string) => {
  const base64 = pem.replace(pemBeginClause, '').replace(pemEndClause, '').replace(/\s/g, '');

  if (base64.includes(dashes)) {
    throw new Error(
      `Invalid PEM format: the header and footer indicate the key was not generated properly. Expected header to be ${pemBeginClause} and footer to be ${pemEndClause}.`,
    );
  }

  if (!base64 || !isValidBase64(base64)) {
    throw new Error('Invalid PEM format: expected base64 encoded string.');
  }

  return [pemBeginClause, base64, pemEndClause].join('\n');
};
