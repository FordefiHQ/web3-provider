import { RpcSchema } from 'viem';

export type OmitFromArray<T extends RpcSchema, Condition extends T[number]['Method']> = {
  [K in keyof T]: T[K] extends { Method: Condition }
    ? never
    : { Method: T[K]['Method']; Parameters: T[K]['Parameters']; ReturnType: T[K]['ReturnType'] };
} extends infer R
  ? { [K in keyof R]: R[K] }
  : never;

export const assertUnreachable = (x: never): never => {
  throw new Error('Unreachable');
};
