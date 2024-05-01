import * as fs from 'fs';
import * as path from 'path';
import * as requestBodySign from '../src/api/request-body-sign';
import { Headers, signatureToHeaders } from '../src/api';
import { env } from './env';

const epochTimestamp = 1712758705296;

describe('Request body signing', () => {
  test('API request payload signature - given base64 pem string without the header and footer', async () => {
    const signedPayloadParams = await requestBodySign.signApiRequestBody(
      { a: 1 },
      env.API_PAYLOAD_SIGNING_KEY,
      new Date(epochTimestamp),
    );
    const headers = signatureToHeaders(signedPayloadParams);

    expect(headers[Headers.Signature]).toHaveLength(96);
    expect(headers[Headers.Timestamp]).toBe(epochTimestamp.toString());
  });

  test('API request payload signature - given content of the pem file', async () => {
    const signedPayloadParams = await requestBodySign.signApiRequestBody(
      { a: 1 },
      // the pem file was generated solely for the test, for it to receive a valid pem, the key is not being used anywhere else
      fs.readFileSync(path.join(__dirname, 'fixtures/private.pem')).toString(),
      new Date(epochTimestamp),
    );
    const headers = signatureToHeaders(signedPayloadParams);

    expect(headers[Headers.Signature]).toHaveLength(96);
    expect(headers[Headers.Timestamp]).toBe(epochTimestamp.toString());
  });

  test('should throw if pem is invalid', async () => {
    const spy = jest.spyOn(requestBodySign, 'signApiRequestBody');

    expect(() =>
      requestBodySign.signApiRequestBody(
        { a: 1 },
        // the pem file was generated solely for the test, for it to receive a valid pem, the key is not being used anywhere else
        '~',
        new Date(epochTimestamp),
      ),
    ).toThrow();

    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});
