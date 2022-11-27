// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DEFAULT_DEPTH_LEVEL } from '@merry-solutions/shared';

type Primitive = string | number | bigint | boolean | undefined | symbol;

export type PropertyPath<
  TYPE,
  DEPTH extends number = DEFAULT_DEPTH_LEVEL,
  LEVEL extends number[] = [],
  PREFIX = ''
> = {
  [KEY in keyof TYPE]: LEVEL['length'] extends DEPTH
    ? never
    : KEY extends 'valueOf' | 'toString'
    ? never
    : TYPE[KEY] extends Primitive | Array<unknown>
    ? `${string & PREFIX}${string & KEY}`
    :
        | `${string & PREFIX}${string & KEY}`
        | PropertyPath<
            TYPE[KEY],
            DEPTH,
            [1, ...LEVEL],
            `${string & PREFIX}${string & KEY}.`
          >;
}[keyof TYPE];
