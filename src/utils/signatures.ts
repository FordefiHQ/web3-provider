import { bytesToHex } from 'viem';
import { base64ToBinary } from './base64';

export const base64SignatureToHex = (base64: string) => {
  const binaryString = base64ToBinary(base64);

  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytesToHex(bytes);
};
