import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { DESTINATIONS, TYPES } from '../const.js';
import { humanizeDate, capitalizeWords, dateFormat } from '../utils/utils.js';

export function createDestinationNameTemplate(name) {
  console.log(name);
  return (`<option value=${name}></option>`);
}

export function createTypeTemplate(type) {
  return (
    `<div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${type}>
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeWords(type)}</label>
    </div>`
  );
}

function createOfferTemplate(offer, checkedOffers) {
  const { id, title, price } = offer;
  const isChecked = checkedOffers.map((item) => item.id).includes(id) ? 'checked' : '';

  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id=${id} type="checkbox" name=${id} ${isChecked}>
      <label class="event__offer-label" for=${id}>
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>`
  );
}

function createOfferContainerTemplate({offers}, checkedOffers) {
  if (offers.length !== 0) {
    return (
      `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${offers.map((offer) => createOfferTemplate(offer, checkedOffers)).join('')}
        </div>
      </section>`
    );
  }
  return '';
}

function createPictureTemplate(picture) {
  const { src, description } = picture;

  return (`<img class="event__photo" src=${src} alt=${description}>`);
}

function createPicturesTemplate(pictures) {
  if (pictures.length > 0) {
    return (
      `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${pictures.map((item) => createPictureTemplate(item)).join('')}
        </div>
      </div>`
    );
  }
  return '';
}

function createDestinationTemplate(destination) {
  const { description, pictures } = destination;

  if (destination > 0 || pictures.length > 0) {
    return (
      `<section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>

        ${createPicturesTemplate(pictures)}
      </section>`
    );
  }
  return '';
}

function createEditPointTemplate(event) {
  const { id, type, dateFrom, dateTo, basePrice } = event.event;
  const { name } = event.destination;

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              ${TYPES.map((item) => createTypeTemplate(item)).join('')}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${capitalizeWords(type)}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${name} list="destination-list-1">
          <datalist id="destination-list-1">
            ${DESTINATIONS.map((item) => createDestinationNameTemplate(item)).join('')}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-${id}">From</label>
          <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value=${humanizeDate(dateFrom, dateFormat.DATE)}>
          &mdash;
          <label class="visually-hidden" for="event-end-time-${id}">To</label>
          <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value=${humanizeDate(dateTo, dateFormat.DATE)}>
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-${id}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-${id}" type="text" name="event-price" value=${basePrice}>
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        ${createOfferContainerTemplate(event.offers, event.checkedOffers)}
        ${createDestinationTemplate(event.destination)}
      </section>
    </form>
  </li>`
  );
}

export default class FormEditView extends AbstractStatefulView {
  #offers = null;
  #checkedOffers = null;
  #destination = null;

  #handleFormEditClick = null;
  #handleFormSubmit = null;

  constructor({event, offers, checkedOffers, destination, onFormEditClick, onFormSubmit}) {
    super();
    this.#offers = offers;
    this.#checkedOffers = checkedOffers;
    this.#destination = destination;

    this.#handleFormEditClick = onFormEditClick;
    this.#handleFormSubmit = onFormSubmit;

    this._setState(FormEditView.parseEventToState({event: event}));

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__available-offers')
      .addEventListener('change', this.#offersChangeHandler);
    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#priceChangeHandler);
  }

  get template() {
    return createEditPointTemplate({
      offers: this.#offers,
      checkedOffers: this.#checkedOffers,
      destination: this.#destination,
      event: this._state.event,
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(FormEditView.parseStateToEvent(this._state));
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormEditClick();
  };

  #typeChangeHandler = (evt) => {
    this.updateElement({
      event: {...this._state.event,
        type: evt.target.value,
        offers: [],
      }
    })
  };

  #destinationChangeHandler = (evt) => {
    const selectedDestination = DESTINATIONS.find((destination) => destination);
    console.log(selectedDestination);
    const selectedDestinationId = (selectedDestination) ? selectedDestination.id : null;
    this.updateElement({
      event: {...this._state.event,
        description: selectedDestinationId,
      }
    })
  };

  #offersChangeHandler = (evt) => {
    const checkedBoxes = Arrey.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));
    this._setState({
      event: {...this._state.event,
        checkedOffers: checkedBoxes,
      }
    })
  };

  #priceChangeHandler= (evt) => {
    this._setState({
      event: {...this._state.event,
        // basePrice: ...this._state.event.basePrice + evt.target.valueAsNumber,
        basePrice: evt.target.valueAsNumber,
      }
    })
  };

  static parseEventToState = ({event}) => ({event});

  static parseStateToEvent = (state) => state.event;
}
