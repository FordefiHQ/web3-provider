const base64ToBytes = (base64: string) => Buffer.from(base64, 'base64');

export const base64ToString = (base64: string) => base64ToBytes(base64).toString();

export const base64ToBinary = (base64: string) => base64ToBytes(base64).toString('binary');

export const isValidBase64 = (maybeBase64: string) => {
  try {
    return base64ToBytes(maybeBase64).toString('base64') === maybeBase64;
  } catch {
    return false;
  }
};
