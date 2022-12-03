import { Primitive } from '@merry-solutions/property-path';

export function primitiveTypeFilter<
  TYPE extends Primitive,
  SUBSTITUTION extends TYPE
>(arr: TYPE[], compareWith: SUBSTITUTION): SUBSTITUTION[] {
  return arr.filter((a) => a === compareWith) as SUBSTITUTION[];
}
