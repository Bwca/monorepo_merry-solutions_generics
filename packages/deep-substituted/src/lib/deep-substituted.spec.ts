/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { User } from '@merry-solutions/shared';
import { DeepSubstituted } from './deep-substituted';

it('Should provide proper intellisense', () => {
  // Arrange
  const deepSubstituted: DeepSubstituted<User, 3, 'address.geo.lng', 'BOB'> = {
    name: 'name',
    address: {
      geo: {
        lat: '',
        lng: 'BOB',
      },
    },
  };
  // Assert
  expect(deepSubstituted).toBeTruthy();
});
