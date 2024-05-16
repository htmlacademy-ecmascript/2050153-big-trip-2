import { getArrayFromRandomElements } from '../utils.js';

const OfferByType = {
  LUGGAGE: 'luggage',
  COMFORT: 'comfort',
  MEAL: 'meal',
  BREAKFAST: 'breakfast',
  LUNCH: 'lunch',
  SEATS: 'seats',
  UBER: 'uber',
  TREIN: 'train',
  CAR: 'drive',
  TICKETS: 'tickets',
};

const OFFER = {
  [OfferByType.LUGGAGE]: {
    offerTitle: 'Add luggage',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.COMFORT]: {
    offerTitle: 'Switch to comfort class',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.MEAL]: {
    offerTitle: 'Add meal',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.BREAKFAST]: {
    offerTitle: 'Add breakfast',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.LUNCH]: {
    offerTitle: 'Lunch in city',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.SEATS]: {
    offerTitle: 'Choose seats',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.UBER]: {
    offerTitle: 'Order Uber',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.TREIN]: {
    offerTitle: 'Travel by train',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.CAR]: {
    offerTitle: 'Rent a car',
    offerPrice: getRandomInteger(10, 1000),
  },
  [OfferByType.TICKETS]: {
    offerTitle: 'Book tickets',
    offerPrice: getRandomInteger(10, 1000),
  },
};

const OffersByTypeEvent = {
  'Taxi': ['comfort', 'uber'],
  'Bus': ['tickets', 'seats', 'comfort'],
  'Train': ['tickets', 'seats', 'comfort', 'meal', 'luggage'],
  'Ship': ['tickets', 'comfort', 'meal', 'luggage', 'breakfast', 'lunch'],
  'Drive': ['drive', 'comfort'],
  'Flight': ['tickets', 'seats', 'comfort', 'meal', 'luggage'],
  'Check-in': ['tickets', 'seats', 'train'],
  'Sightseeing': ['drive', 'train', 'breakfast', 'lunch', 'uber'],
  'Restaurant': ['meal', 'breakfast', 'lunch', 'uber']
};

const getOffersByOfferTypes = (typesArrey) => {
  let offersArrey = [];

  for (let type of typesArrey) {
    if (OFFER.hasOwnProperty(type)) {
      offersArrey.push(OFFER[type]);
    }
  }
  return offersArrey;
};

const getOffers = (type) => {
  const offers = getOffersByOfferTypes(getArrayFromRandomElements(OffersByTypeEvent.type));
  return offers
};

export {getOffers};
