import { getRandomInteger, getArrayFromRandomElements, getRandomArrayElement } from '../utils.js';
import { DESCRIPTIONS, DESTINATIONS } from '../const.js';

const mockDestinations = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      }
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e07',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },{
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e08',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: getRandomArrayElement(DESTINATIONS),
    pictures: [
      {
        src: `https:loremflicker.com/248/152?random=${getRandomInteger(1,15)}`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
];

export {mockDestinations};
