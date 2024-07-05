import { getRandomInteger, getRandomArrayElement } from '../utils/utils.js';
import { nanoid } from 'nanoid';

const mockEvents = [
  {
    basePrice: getRandomInteger(10, 100000),
    type: 'flight',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    dateFrom: new Date ('2019-03-19 22:55:56.845Z'),
    dateTo: new Date ('2019-03-22 11:22:13.375Z'),
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa40',
      'b4c3e4e6-9053-42ce-b747-e281314baa36',
      'b4c3e4e6-9053-42ce-b747-e281314baa33',
    ],
  },
  {
    basePrice: getRandomInteger(10, 100000),
    type: 'taxi',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    dateFrom: new Date ('2019-07-10 22:55:56.845Z'),
    dateTo: new Date ('2019-07-11 11:22:13.375Z'),
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa37'
    ],
  },
  {
    basePrice: getRandomInteger(10, 100000),
    type: 'flight',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    dateFrom: new Date ('2019-10-21 22:55:56.845Z'),
    dateTo: new Date ('2019-11-21 10:35:56.845Z'),
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa32'
    ],
  },
  {
    basePrice: getRandomInteger(10, 100000),
    type: 'drive',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    dateFrom: new Date ('2019-12-10 22:55:56.845Z'),
    dateTo: new Date ('2020-01-01 12:05:56.845Z'),
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa39',
    ],
  },
  {
    basePrice: getRandomInteger(10, 100000),
    type: 'check-in',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    dateFrom: new Date ('2019-12-10 22:55:56.845Z'),
    dateTo: new Date ('2020-01-01 12:05:56.845Z'),
    isFavorite: false,
    offers: [],
  },
];

function getRandomEvent() {
  return {
    id: nanoid(),
    ...getRandomArrayElement(mockEvents)
  };
}

export { getRandomEvent };
