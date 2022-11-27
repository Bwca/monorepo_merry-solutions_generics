import { PropertyPath } from '@merry-solutions/property-path';

export type DeepNested<
  TYPE,
  DEPTH extends number,
  PATH extends PropertyPath<TYPE, DEPTH>,
  LEVEL extends number[] = []
> = {
  [KEY in keyof TYPE]: LEVEL['length'] extends DEPTH
    ? never
    : PATH extends `${string & KEY}.${infer REMAINING_PATH}`
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      DeepNested<TYPE[KEY], DEPTH, REMAINING_PATH, [1, ...LEVEL]>
    : KEY extends PATH
    ? TYPE[KEY]
    : never;
}[keyof TYPE];
