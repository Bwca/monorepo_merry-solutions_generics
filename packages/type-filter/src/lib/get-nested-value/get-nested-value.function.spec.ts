// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from '@merry-solutions/shared';
import { getNestedValue } from './get-nested-value.function';

describe('Tests for getNestedValue', () => {
  const USER: User = {
    address: {
      geo: {
        lat: '11',
        lng: '22',
      },
    },
    name: 'Bob',
  };

  it('Should extract value from level 1 depth', () => {
    expect(getNestedValue<User, 1>(USER, 'name')).toEqual('Bob');
  });

  it('Should extract value from deep nested property', () => {
    expect(getNestedValue<User, 3>(USER, 'address.geo.lat')).toEqual('11');
  });
});
