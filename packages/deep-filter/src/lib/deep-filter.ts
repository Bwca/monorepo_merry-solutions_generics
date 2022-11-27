import { DeepNested } from '@merry-solutions/deep-nested';
import { DeepSubstituted } from '@merry-solutions/deep-substituted';
import { PropertyPath } from '@merry-solutions/property-path';

import { getNestedValue } from './get-nested-value/get-nested-value.function';

export function deepFilter<
  T,
  D extends number,
  P extends PropertyPath<T, D>,
  S extends DeepNested<T, D, P>
>(arr: T[], field: P, compareWith: S): Array<DeepSubstituted<T, D, P, S>> {
  return arr.filter(
    (a: T) => getNestedValue<T, D>(a, field) === compareWith
  ) as Array<DeepSubstituted<T, D, P, S>>;
}
