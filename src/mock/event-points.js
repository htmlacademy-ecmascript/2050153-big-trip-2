import { getRandomArrayElement, getRandomInteger } from '../utils.js';

const mockEvents = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808a',
    basePrice: getRandomInteger(10, 100000),
    type: 'flight',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e01',
    dateFrom: new Date ('2019-03-19T22:55:56.845Z'),
    dateTo: new Date ('2019-03-19T11:22:13.375Z'),
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa40',
      'b4c3e4e6-9053-42ce-b747-e281314baa36',
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281314baa33',
      'b4c3e4e6-9053-42ce-b747-e281314baa38'
    ],
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808b',
    basePrice: getRandomInteger(10, 100000),
    type: 'taxi',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e02',
    dateFrom: new Date ('2019-07-10T22:55:56.845Z'),
    dateTo: new Date ('2019-07-11T11:22:13.375Z'),
    isFavorite: true,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa32',
      'b4c3e4e6-9053-42ce-b747-e281314baa37'
    ],
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: getRandomInteger(10, 100000),
    type: 'flight',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e03',
    dateFrom: new Date ('2019-10-21T22:55:56.845Z'),
    dateTo: new Date ('2019-11-21T10:35:56.845Z'),
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b747-e281314baa32'
    ],
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808d',
    basePrice: getRandomInteger(10, 100000),
    type: 'drive',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    dateFrom: new Date ('2019-12-10T22:55:56.845Z'),
    dateTo: new Date ('2020-01-01T12:05:56.845Z'),
    isFavorite: false,
    offers: [
      'b4c3e4e6-9053-42ce-b747-e281314baa39',
    ],
  },
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808e',
    basePrice: getRandomInteger(10, 100000),
    type: 'check-in',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e05',
    dateFrom: new Date ('2019-12-10T22:55:56.845Z'),
    dateTo: new Date ('2020-01-01T12:05:56.845Z'),
    isFavorite: false,
    offers: [],
  },
];

export { mockEvents };
