/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Book, User } from '@merry-solutions/shared';

import { PropertyStringPath } from './property-string-path.type';

it('Should provide proper intellisense', () => {
  // Arrange
  const userPropPath: PropertyStringPath<User> = 'address.geo.lng';
  const bookPath: PropertyStringPath<Book> = 'details.author.name';

  // Assert
  expect([userPropPath, bookPath]).toBeTruthy();
});
