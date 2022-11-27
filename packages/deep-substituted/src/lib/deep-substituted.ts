import { PropertyPath } from '@merry-solutions/property-path';

export type DeepSubstituted<
  TYPE,
  DEPTH extends number,
  PATH extends PropertyPath<TYPE, DEPTH>,
  SUBSTITUTION,
  LEVEL extends number[] = []
> = {
  [KEY in keyof TYPE]: LEVEL['length'] extends DEPTH
    ? never
    : PATH extends `${string & KEY}.${infer REMAINING_PATH}`
    ? DeepSubstituted<
        TYPE[KEY],
        DEPTH,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        REMAINING_PATH,
        SUBSTITUTION,
        [1, ...LEVEL]
      >
    : KEY extends PATH
    ? SUBSTITUTION
    : TYPE[KEY];
};
