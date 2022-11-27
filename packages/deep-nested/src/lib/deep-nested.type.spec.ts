/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { User } from '@merry-solutions/shared';
import { DeepNested } from './deep-nested.type';

it('Should provide proper intellisense', () => {
  // Arrange
  const geo: DeepNested<User, 2, 'address.geo'> = {
    lat: '12',
    lng: '123',
  };

  const lat: DeepNested<User, 3, 'address.geo.lat'> = 'here be latitude';

  // Assert
  expect([geo, lat]).toBeTruthy();
});
