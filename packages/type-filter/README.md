# @merry-solutions/type-filter

## Well, what is it?

Type filter is a package, the purpose of which is to provide proper typing to filtered results.
For example, given an array of numbers:

```typescript
const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter((n) => n === 2);
```

The type of `filtered` variable is still `Array<number>`, while in reality after the filter has been applied, it sould be `Array<2>`. And this is exactly what this package does: provides propert typing to the filtered array items.

## Installation

```
npm i @merry-solutions/type-filter
```

## Usage

Supposed you have a user interface and an array of users:

```typescript
interface User {
  name: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const USERS: User[] = [
  {
    address: {
      geo: {
        lat: '11',
        lng: '22',
      },
    },
    name: 'Bob',
  },
  {
    address: {
      geo: {
        lat: '33',
        lng: '33',
      },
    },
    name: 'Mary',
  },
];
```

To filter out users and get an array in which every user has specific name, i.e. `Bob`, we pass the interface, along with property path and the filtering value:

```typescript
import { typeFilter } from '@merry-solutions/type-filter';

const results = typeFilter<User, 'name', 'Bob'>(USERS, 'name', 'Bob');

results[0].name;
// name is no longer of 'string' type, it is 'Bob' now
```

Nested paths are also supported, the nested level is the 4th parameter in the generics list, by default the max level is 99, so filtering by `lng` would look the following way:

```typescript
import { typeFilter } from '@merry-solutions/type-filter';

const results = typeFilter<User, 'address.geo.lng', '33'>(
  USERS,
  'address.geo.lng',
  '33'
);
// results[0].address.geo.lng is now of type '33' instead of 'string'
```

For filtering of primitives there is `primitiveTypeFilter` which is even more simple:

```typescript
import { primitiveTypeFilter } from '@merry-solutions/type-filter';

const arrayOf2s = primitiveTypeFilter<number, 2>([1, 2, 3, 4, 5], 2);
// arrayOf2s type is Array<2>
```
