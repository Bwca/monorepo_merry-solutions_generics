import { PropertyPath } from '@merry-solutions/property-path';

export type DeepNested<T, K extends PropertyPath<T>> = {
  [P in keyof T]: K extends `${string & P}.${infer R}`
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      DeepNested<T[P], R>
    : P extends K
    ? T[P]
    : never;
}[keyof T];
