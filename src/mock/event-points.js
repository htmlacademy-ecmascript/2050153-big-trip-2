import { getRandomArrayElement, getRandomInteger, getArrayFromRandomElements } from '../utils.js';
import { TYPES, DESTINATION } from '../const.js';
import { getOffers } from '../mock/offers.js';

const mockEvents = [
  {
    id: '',
    type: getRandomArrayElement(TYPES),
    typePicture: `img/icons/${type}.png`,
    destination: getRandomArrayElement(DESTINATION),
    startTime: new Date ('25/12/19 16:00'),
    endTime: new Date ('26/12/19 16:00'),
    price: getRandomInteger(10, 100000),
    isFavorite: true,
    offers: getOffers(type),
  },
  {
    id: '',
    type: getRandomArrayElement(TYPES),
    typePicture: `img/icons/${type}.png`,
    destination: getRandomArrayElement(DESTINATION),
    startTime: new Date ('25/12/19 16:00'),
    endTime: new Date ('26/12/19 16:00'),
    price: getRandomInteger(10, 100000),
    isFavorite: false,
    offers: getOffers(type),
  },
  {
    id: '',
    type: getRandomArrayElement(TYPES),
    typePicture: `img/icons/${type}.png`,
    destination: getRandomArrayElement(DESTINATION),
    startTime: new Date ('25/12/19 16:00'),
    endTime: new Date ('26/12/19 16:00'),
    price: getRandomInteger(10, 100000),
    isFavorite: false,
    offers: getOffers(type),
  }
];

const getRandomEventPoint = () => {
  return getRandomArrayElement(mockEvents);
};

export { getRandomEventPoint };
