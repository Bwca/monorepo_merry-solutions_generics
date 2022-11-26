/* eslint-disable @typescript-eslint/ban-ts-comment */

import { DeepNested } from '@merry-solutions/deep-nested';
import { DeepSubstituted } from '@merry-solutions/deep-substituted';
import { PropertyPath } from '@merry-solutions/property-path';

import { getNestedValue } from './get-nested-value/get-nested-value.function';

// @ts-ignore
export function deepFilter<
  T,
  P extends PropertyPath<T>,
  S extends DeepNested<T, P>
>(arr: T[], field: P, compareWith: S): Array<DeepSubstituted<T, P, S>> {
  // @ts-ignore
  return arr.filter(
    (a: T) => getNestedValue(a, field) === compareWith
  ) as Array<DeepSubstituted<T, P, S>>;
}
