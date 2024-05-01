import { base64ToString } from './base64';

export const extractUserIdFromJwt = (apiUserToken: string): string => {
  try {
    const [_header, payload, _signature] = apiUserToken.split('.');
    const { sub } = JSON.parse(base64ToString(payload));
    return sub.split('@')[0];
  } catch (error) {
    throw new Error('Invalid `apiUserToken` passed to Fordefi provider');
  }
};
