type Primitive = string | number | bigint | boolean | undefined | symbol;

export type PropertyPath<
  T,
  D extends number,
  L extends number[] = [],
  Prefix = ''
> = {
  [K in keyof T]: L['length'] extends D
    ? never
    : K extends 'valueOf' | 'toString'
    ? never
    : T[K] extends Primitive | Array<unknown>
    ? `${string & Prefix}${string & K}`
    :
        | `${string & Prefix}${string & K}`
        | PropertyPath<T[K], D, [1, ...L], `${string & Prefix}${string & K}.`>;
}[keyof T];
