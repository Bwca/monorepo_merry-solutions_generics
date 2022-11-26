// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from '../../../../shared/src';
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
    expect(getNestedValue<User>(USER, 'name')).toEqual('Bob');
  });

  it('Should extract value from deep nested property', () => {
    expect(getNestedValue<User>(USER, 'address.geo.lat')).toEqual('11');
  });
});
