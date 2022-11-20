import { PropertyPath } from '@merry-solutions/property-path';

export type DeepSubstituted<T, K extends PropertyPath<T>, S> = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  [P in keyof T]: K extends `${string & P}.${infer R}`
    ? DeepSubstituted<T[P], R, S>
    : P extends K
    ? S
    : T[P];
};
