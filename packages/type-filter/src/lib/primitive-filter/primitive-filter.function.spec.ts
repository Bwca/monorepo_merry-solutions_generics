import { primitiveTypeFilter } from '../../../dist';

describe('Tests for primitiveTypeFilter', () => {
  const nums: number[] = [1, 2, 3, 4, 5];

  it('should exist', () => {
    expect(primitiveTypeFilter).toBeTruthy();
  });

  it('Should be able to perform filtering on 1st level', () => {
    // Arrange

    // Act
    const results = primitiveTypeFilter<number, 2>(nums, 2);

    // Assert
    expect(results.length && results.every((i) => i === 2)).toBeTruthy();
  });
});
