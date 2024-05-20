import { getRandomArrayElement } from '../utils';
import { mockEvents } from '../mock/event-points.js';
import { mockDestinations } from '../mock/destinations.js';
import { mockOffers } from '../mock/offers.js';

const EVENT_COUNT = 3;

const getRandomArrey = (arrey) => Array.from(
  {length: EVENT_COUNT},
  () => getRandomArrayElement(arrey),
).join(', ');

export default class EventsModel {
  events = getRandomArrey(mockEvents);
  offers = mockOffers;
  destination = mockDestinations;

  getEvents() {
    return this.events;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    const allOffers = this.getOffer();
    return allOffers.find((offer) => offer.type === type);
  }

  getOfferById(type, itemsId) {
    const offersType = this.getOfferByType(type);
    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }

  getDestination() {
    return this.destination;
  }

  getDestinationById(id) {
    const allDestinations = this.getDestination();
    return allDestinations.find((item) => item.id === id);
  }
}
