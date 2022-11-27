/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Book, User } from '@merry-solutions/shared';

import { PropertyPath } from './property-path.type';

it('Should provide proper intellisense', () => {
  // Arrange
  const userPropPath: PropertyPath<User, 3> = 'address.geo.lng';
  const bookPath: PropertyPath<Book, 3> = 'details.author.name';

  // Assert
  expect([userPropPath, bookPath]).toBeTruthy();
});
