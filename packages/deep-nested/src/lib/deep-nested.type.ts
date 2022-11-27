import { PropertyPath } from '@merry-solutions/property-path';

export type DeepNested<
  T,
  D extends number,
  K extends PropertyPath<T, D>,
  L extends number[] = []
> = {
  [P in keyof T]: L['length'] extends D
    ? never
    : K extends `${string & P}.${infer R}`
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      DeepNested<T[P], D, R, [1, ...L]>
    : P extends K
    ? T[P]
    : never;
}[keyof T];
