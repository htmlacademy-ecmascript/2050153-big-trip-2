import { getRandomInteger, getArrayFromRandomElements, getRandomArrayElement } from '../utils.js';
import { DESCRIPTION } from '../const.js';

const mockDestinations = [
  {
    id: '',
    description: getArrayFromRandomElements(DESCRIPTION);
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,10)}`,
        description: getRandomArrayElement(DESCRIPTION);
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,10)}`,
        description: getRandomArrayElement(DESCRIPTION);
      },
    ],
  },
  {
    id: '',
    description: getArrayFromRandomElements(DESCRIPTION);
    pictures: [],
  },
  {
    id: '',
    description: getArrayFromRandomElements(DESCRIPTION);
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,10)}`,
        description: getRandomArrayElement(DESCRIPTION);
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,10)}`,
        description: getRandomArrayElement(DESCRIPTION);
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,10)}`,
        description: getRandomArrayElement(DESCRIPTION);
      },
    ],
  },
];

export {mockDestinations};
