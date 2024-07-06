import { getRandomInteger, getArrayFromRandomElements, getRandomArrayElement } from '../utils/utils.js';
import { DESCRIPTIONS, DESTINATIONS } from '../const.js';

const mockDestinations = [
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: 'Amsterdam',
    pictures: [
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: 'Chamonix',
    pictures: [],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: 'Geneva',
    pictures: [
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: 'Sydney',
    pictures: [
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      }
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: 'Phuket',
    pictures: [
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e06',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: 'Fiji',
    pictures: [
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e07',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: 'Paris',
    pictures: [
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },{
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
  {
    id: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e08',
    description: getArrayFromRandomElements(DESCRIPTIONS),
    name: 'Venice',
    pictures: [
      {
        src: `http://picsum.photos/300/200?random=${getRandomInteger(1,15)}.jpg`,
        description: getRandomArrayElement(DESCRIPTIONS),
      },
    ],
  },
];

export {mockDestinations};
