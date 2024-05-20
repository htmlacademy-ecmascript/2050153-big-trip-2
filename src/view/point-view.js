import { createElement } from '../render.js';
import { dateFormat, humanizePageDate, differenceInTime } from '../utils.js';

function createEventItemTemplate(event) {
  const { type, dateFrom, dateTo, description, isFavorite, price, offers } = event;
  const { name } = destination;

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${humanizePageDate(dateFrom, dateFormat.DATE_POINT)}">${humanizePageDate(dateFrom, dateFormat.MONTH_DAY)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${description.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${humanizePageDate(dateFrom, dateFormat.DATE_AND_TIME)}">${humanizePageDate(dateFrom, dateFormat.HOURS)}</time>
            &mdash;
            <time class="event__end-time" datetime="${humanizePageDate(dateTo, dateFormat.DATE_AND_TIME)}">${humanizePageDate(dateTo, dateFormat.HOURS)}</time>
          </p>
          <p class="event__duration">${differenceInTime(dateFrom, dateTo)}M</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">${offers.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offers.price}</span>
          </li>
        </ul>
        <button class="event__favorite-btn event__favorite-btn--active" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
}

export default class EventItemView {
  getTemplate() {
    return createEventItemTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
