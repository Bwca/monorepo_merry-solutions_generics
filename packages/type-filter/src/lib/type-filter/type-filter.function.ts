import { DeepNested } from '@merry-solutions/deep-nested';
import { DeepSubstituted } from '@merry-solutions/deep-substituted';
import { PropertyPath } from '@merry-solutions/property-path';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { DEFAULT_DEPTH_LEVEL } from '@merry-solutions/shared';

import { getNestedValue } from '../get-nested-value/get-nested-value.function';

export function typeFilter<
  TYPE,
  PATH extends PropertyPath<TYPE, DEPTH>,
  SUBSTITUTION extends DeepNested<TYPE, DEPTH, PATH>,
  DEPTH extends number = DEFAULT_DEPTH_LEVEL
>(
  arr: TYPE[],
  field: PATH,
  compareWith: SUBSTITUTION
): Array<DeepSubstituted<TYPE, DEPTH, PATH, SUBSTITUTION>> {
  return arr.filter(
    (a: TYPE) => getNestedValue<TYPE, DEPTH>(a, field) === compareWith
  ) as Array<DeepSubstituted<TYPE, DEPTH, PATH, SUBSTITUTION>>;
}
