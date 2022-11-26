// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from '../../../shared/src';

import { deepFilter } from './deep-filter';

describe('Tests for deepFilter', () => {
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
      name: 'Merry',
    },
  ];

  it('should exist', () => {
    expect(deepFilter).toBeTruthy();
  });

  it('Should be able to perform filtering on 1st level', () => {
    expect(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      deepFilter<User, 'name', 'Bob'>(USERS, 'name', 'Bob').every(
        (i) => i.name === 'Bob'
      )
    ).toBeTruthy();
  });
});
