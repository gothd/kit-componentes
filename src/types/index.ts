// pega apenas as keys de T cujo valor seja boolean
// aceita tanto boolean quanto boolean | undefined
export type BooleanKeys<T> = {
  [K in keyof T]: [T[K]] extends [boolean | undefined] ? K : never;
}[keyof T];

// pega apenas as keys de T cujo valor seja number
export type NumericKeys<T> = {
  [K in keyof T]: [T[K]] extends [number | undefined] ? K : never;
}[keyof T];
