import { getRandomArrayElement } from '../utils';
import { mockEvents } from '../mock/event-points.js';
import { mockDestinations } from '../mock/destinations.js';

const EVENT_COUNT = 3;

const getRandomArrey = (arrey) => {
  return Array.from({length: EVENT_COUNT},
    () => getRandomArrayElement(arrey).join(', ');
};

export default class EventsModel {
  events = getRandomArrey(mockEvents);
  destinations = getRandomArrey(mockDestinations);

  getEvents() {
    return this.events;
  }

  getDestinations() {
    return this.destinations;
  }
}
