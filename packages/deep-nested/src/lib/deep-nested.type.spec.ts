/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { User } from '../../../shared/src';
import { DeepNested } from './deep-nested.type';

it('Should provide proper intellisense', () => {
  // Arrange
  const geo: DeepNested<User, 'address.geo'> = {
    lat: '12',
    lng: '123',
  };

  const lat: DeepNested<User, 'address.geo.lat'> = 'here be latitude';

  // Assert
  expect([geo, lat]).toBeTruthy();
});
