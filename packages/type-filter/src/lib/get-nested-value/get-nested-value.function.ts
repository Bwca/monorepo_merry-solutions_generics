import { PropertyPath } from '@merry-solutions/property-path';

export function getNestedValue<TYPE, DEPTH extends number>(
  a: TYPE,
  p: PropertyPath<TYPE, DEPTH>
): unknown {
  return (<string>p)
    .split('.')
    .reduce<unknown>(
      (c: Record<string, unknown> | unknown, p: string) =>
        (<Record<string, unknown>>c)[p],
      a
    );
}
