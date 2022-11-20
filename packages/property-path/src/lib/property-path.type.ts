type Primitive = string | number | bigint | boolean | undefined | symbol;

export type PropertyPath<T, Prefix = ''> = {
  [K in keyof T]: K extends 'valueOf' | 'toString'
    ? never
    : T[K] extends Primitive | Array<unknown>
    ? `${string & Prefix}${string & K}`
    :
        | `${string & Prefix}${string & K}`
        | PropertyPath<T[K], `${string & Prefix}${string & K}.`>;
}[keyof T];
