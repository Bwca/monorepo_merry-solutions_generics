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
      deepFilter<User, 'name', 'Bob'>(USERS, 'name', 'Bob').every(
        (i) => i.name === 'Bob'
      )
    ).toBeTruthy();
  });

  it('Should be able to perform filtering on nth level', () => {
    expect(
      deepFilter<User, 'address.geo.lng', 'Bob'>(
        USERS,
        'address.geo.lng',
        'Bob'
      ).every((i) => i.address.geo.lng === 'Bob')
    ).toBeTruthy();
  });
});
