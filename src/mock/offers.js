import { getArrayFromRandomElements } from '../utils.js';

const mockOffers = [
  {
    type: 'flight',
    offers: [
      {
        title: 'Add luggage',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
      },
      {
        title: 'Switch to comfort class',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
      },
      {
        title: 'Add meal',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa33',
      },
      {
        title: 'Choose seats',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa36',
      },
      {
        title: 'Travel by train',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa38',
      },
      {
        title: 'Book tickets',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa40',
      },
    ],
  },
  {
    type: 'taxi',
    offers: [
      {
        title: 'Switch to comfort class',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
      },
      {
        title: 'Order Uber',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa37',
      },
    ],
  },
  {
    type: 'bus',
    offers: [
      {
        title: 'Switch to comfort class',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
      },
      {
        title: 'Choose seats',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa36',
      },
      {
        title: 'Book tickets',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa40',
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        title: 'Switch to comfort class',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
      },
      {
        title: 'Choose seats',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa36',
      },
      {
        title: 'Book tickets',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa40',
      },
      {
        title: 'Add meal',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa33',
      },
      {
        title: 'Add luggage',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
      },
    ],
  },
  {
    type: 'ship',
    offers: [
      {
        title: 'Switch to comfort class',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa32',
      },
      {
        title: 'Choose seats',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa36',
      },
      {
        title: 'Book tickets',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa40',
      },
      {
        title: 'Add luggage',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
      },
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        title: 'Rent a car',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa39',
      },
    ],
  },
  {
    type: 'check-in',
    offers: [
      {
        title: 'Add breakfast',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa34',
      }
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        title: 'Rent a car',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa39',
      },
      {
        title: 'Lunch in city',
        price: getRandomInteger(10, 1000),
        id: 'b4c3e4e6-9053-42ce-b747-e281314baa35',
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [],
  },
];

export {mockOffers};
