import { getRandomArrayElement } from '../utils/utils.js';
import { getRandomEvent } from '../mock/event-points.js';
import { mockDestinations } from '../mock/destinations.js';
import { mockOffers } from '../mock/offers.js';

const EVENT_COUNT = 3;

export default class EventsModel {
  #events = Array.from({length: EVENT_COUNT},() => getRandomEvent());
  #offers = mockOffers;
  #destinations = mockDestinations;

  get events() {
    return this.#events;
  }

  get offers() {
    return this.#offers;
  }

  getOffersByType(type) {
    const allOffers = this.offers;
    return allOffers.find((offer) => offer.type === type);
  }

  getOfferById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }

  get destination() {
    return this.#destinations;
  }

  getDestinationById(id) {
    const allDestinations = this.destination;
    return allDestinations.find((item) => item.id === id);
  }
}
