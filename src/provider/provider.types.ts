import { EIP1193Provider, EIP1474Methods, Hex, TypedDataDefinition } from 'viem';
import { Address } from 'abitype';
import { OmitFromArray, PickFromArray } from '../utils/types';
import { SignerType, UserType } from '../openapi';

type SignTypedDataV4 = {
  Method: 'eth_signTypedData_v4';
  Parameters: [address: Address, message: TypedDataDefinition];
  ReturnType: Hex;
};

type SignTypedDataV3 = Omit<SignTypedDataV4, 'Method'> & {
  Method: 'eth_signTypedData_v3';
};

type SignTypedData = Omit<SignTypedDataV4, 'Method'> & {
  Method: 'eth_signTypedData';
};

export type Methods = [
  ...OmitFromArray<EIP1474Methods, { Method: 'eth_signTypedData_v4' }>,
  SignTypedData,
  SignTypedDataV3,
  SignTypedDataV4,
];
export type Method = Methods[number]['Method'];

export type RequestArgs<M extends Method | undefined = Method | undefined> = M extends Method
  ? {
      method: M;
    } & (Extract<Methods[number], { Method: M }>['Parameters'] extends never | undefined
      ? { params?: unknown | undefined }
      : {
          params: Extract<Methods[number], { Method: M }>['Parameters'];
        })
  : {
      method: string;
      params?: unknown | undefined;
    };

export type MethodParams<M extends Method> = RequestArgs<M>['params'];

export type MethodReturnType<M extends Method | undefined = Method | undefined> = M extends Method
  ? PickFromArray<Methods, { Method: M }>[number]['ReturnType']
  : unknown;

export type FordefiEIP1193Provider = Omit<EIP1193Provider, 'request'> & {
  request<M extends Method>(args: RequestArgs<M>): Promise<MethodReturnType<M>>;
};

export interface UserInfo {
  id: string;
  userType: UserType;
  signerType: SignerType;
}
