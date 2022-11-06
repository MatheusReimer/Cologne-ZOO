import { describe, expect, test } from 'vitest';

import { faker } from '@faker-js/faker';
import { calculateAgeInYears, calculateFood } from './helpers';
import { Animal } from '../types';

describe('The calculateAgeInYears helper', () => {
  test('handles over 100 years correctly', () => {
    const date = faker.date.between(
      '1800-01-01T00:00:00.000Z',
      '1900-01-01T00:00:00.000Z'
    );
    expect(calculateAgeInYears(date)).toBeGreaterThanOrEqual(100);
  });

  // For the zookeepers its easier to conservatively assume that an animal is older rather than younger
  test('always rounds up', () => {
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    expect(calculateAgeInYears(yesterday)).toBe(1);
  });
});

describe('The foodCalculator helper', () => {
  test('handles an animal and calculate its food correctly', () => {
    const animalExemp: Animal = {
      id: '1',
      name: 'dolly',
      weight: 2,
      height: 10,
      favouriteFruit: 'cherry',
      species: 'sheep',
      birthdate: new Date(),
      gender: 'female',
    };
    expect(calculateFood(animalExemp)).toEqual(28.096);
  });
  test('checks for the food amount', () => {
    const animalFish: Animal = {
      id: '2',
      name: 'nemo',
      weight: 2,
      height: 1,
      favouriteFruit: 'cherry',
      species: 'fish',
      birthdate: new Date(),
      gender: 'male',
    };
    expect(calculateFood(animalFish)).toBe(0);
  });
});
