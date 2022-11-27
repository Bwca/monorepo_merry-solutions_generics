import { PropertyPath } from '@merry-solutions/property-path';

export function getNestedValue<T, D extends number>(
  a: T,
  p: PropertyPath<T, D>
): unknown {
  return (<string>p)
    .split('.')
    .reduce<unknown>(
      (c: Record<string, unknown> | unknown, p: string) =>
        (<Record<string, unknown>>c)[p],
      a
    );
}
