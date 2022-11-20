type Primitive = string | number | bigint | boolean | undefined | symbol;

export type PropertyStringPath<T, Prefix = ''> = {
  [K in keyof T]: K extends 'valueOf' | 'toString'
    ? never
    : T[K] extends Primitive | Array<unknown>
    ? `${string & Prefix}${string & K}`
    :
        | `${string & Prefix}${string & K}`
        | PropertyStringPath<T[K], `${string & Prefix}${string & K}.`>;
}[keyof T];
