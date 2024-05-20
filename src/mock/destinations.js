import { getRandomInteger, getArrayFromRandomElements, getRandomArrayElement } from '../utils.js';
import { DESCRIPTION, DESTINATION } from '../const.js';

const mockDestinations = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    description: getArrayFromRandomElements(DESCRIPTION),
    name: getRandomArrayElement(DESTINATION),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    description: getArrayFromRandomElements(DESCRIPTION),
    name: getRandomArrayElement(DESTINATION),
    pictures: [],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    description: getArrayFromRandomElements(DESCRIPTION),
    name: getRandomArrayElement(DESTINATION),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    description: getArrayFromRandomElements(DESCRIPTION),
    name: getRandomArrayElement(DESTINATION),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      }
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    description: getArrayFromRandomElements(DESCRIPTION),
    name: getRandomArrayElement(DESTINATION),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    description: getArrayFromRandomElements(DESCRIPTION),
    name: getRandomArrayElement(DESTINATION),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e07',
    description: getArrayFromRandomElements(DESCRIPTION),
    name: getRandomArrayElement(DESTINATION),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },{
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e08',
    description: getArrayFromRandomElements(DESCRIPTION),
    name: getRandomArrayElement(DESTINATION),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTION),
      },
    ],
  },
];

export {mockDestinations};
