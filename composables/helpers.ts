import { Animal } from '../types';
import { Fruit } from '../types';

export const calculateAgeInYears = (birthdate: Date): Number => {
  const today = new Date();
  const differenceInMilliseconds = today.getTime() - birthdate.getTime();

  return Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365));
};

export const calculateFood = (animal: Animal): Number => {
  const defaultValue = Number((animal.height + animal.weight) / 250);
  const animalAge = calculateAgeInYears(new Date(animal.birthdate.toString()));
  let finalValue = defaultValue;
  if (animalAge > 20) {
    finalValue /= 2;
  }
  if (animalAge < 2) {
    finalValue *= 2;
  }
  if (animal.favouriteFruit === 'cherry') {
    finalValue += 28;
  }
  if (animal.gender === 'male') {
    finalValue *= 1.2;
  }
  if (animal.species === 'fish') {
    finalValue = 0;
  }
  return finalValue;
};

/*
for testing/////
const animalExemp : Animal = {
    id : "1",
    name : "dolly",
    weight : 2,
    height : 10,
    favouriteFruit : "cherry",
    species : "sheep",
    birthdate : new Date(),
    gender : 'female'

}

console.log(calculateFood(animalExemp))
*/
