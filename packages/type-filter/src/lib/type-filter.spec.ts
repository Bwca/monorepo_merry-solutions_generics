// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from '../../../shared/src';
import { typeFilter } from '../../dist';

describe('Tests for typeFilter', () => {
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
    expect(typeFilter).toBeTruthy();
  });

  it('Should be able to perform filtering on 1st level', () => {
    // Arrange
    const filterName = 'Bob';

    // Act
    const results = typeFilter<User, 'name', typeof filterName>(
      USERS,
      'name',
      filterName
    );

    // Assert
    expect(
      results.length && results.every((i) => i.name === filterName)
    ).toBeTruthy();
  });

  it('Should be able to perform filtering on nth level', () => {
    // Arrange
    const filterLang = '33';

    // Act
    const results = typeFilter<User, 'address.geo.lng', typeof filterLang>(
      USERS,
      'address.geo.lng',
      filterLang
    );

    // Assert
    expect(
      results.length && results.every((i) => i.address.geo.lng === filterLang)
    ).toBeTruthy();
  });
});
