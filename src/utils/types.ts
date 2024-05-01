export type OmitFromArray<T extends any[], Condition> = {
  [K in keyof T]: T[K] extends Condition ? never : T[K];
} extends infer R
  ? { [K in keyof R]: R[K] }
  : never;

export type PickFromArray<T extends any[], Condition> = {
  [K in keyof T]: T[K] extends Condition ? T[K] : never;
} extends infer R
  ? { [K in keyof R]: R[K] }
  : never;
