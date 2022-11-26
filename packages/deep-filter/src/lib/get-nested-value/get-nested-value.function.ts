import { PropertyPath } from '@merry-solutions/property-path';

export function getNestedValue<T>(a: T, p: PropertyPath<T>): unknown {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (<string>p)
    .split('.')
    .reduce<unknown>(
      (c: Record<string, unknown> | unknown, p: string) =>
        (<Record<string, unknown>>c)[p],
      a
    );
}
