import { PropertyPath } from '@merry-solutions/property-path';

export type DeepSubstituted<
  T,
  D extends number,
  K extends PropertyPath<T, D>,
  S,
  L extends number[] = []
> = {
  [P in keyof T]: L['length'] extends D
    ? never
    : K extends `${string & P}.${infer R}`
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      DeepSubstituted<T[P], R, S, [1, ...L]>
    : P extends K
    ? S
    : T[P];
};
