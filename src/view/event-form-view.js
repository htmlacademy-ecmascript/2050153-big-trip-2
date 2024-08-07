import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { DESTINATIONS, TYPES, BLANK_POINT } from '../const.js';
import { humanizeDate, capitalizeWords, dateFormat, getOffersByType, getPointTypeOffer, getDestinationById, getDestinationByTargetName } from '../utils/event.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import dayjs from 'dayjs';
import he from 'he';

const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

export function createDestinationNameTemplate(name) {
  return (`<option value=${name}></option>`);
}

function createTypeTemplate(type, id) {
  return (
    `<div class="event__type-item">
      <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${type}>
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-${id}">${capitalizeWords(type)}</label>
    </div>`
  );
}

function createOfferTemplate(offer, offers) {
  const { id, title, price } = offer;
  const isChecked = offers.map((item) => item).includes(offer.id) ? 'checked' : '';

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

export function createOfferContainerTemplate(dataOffers, event) {
  const { offers } = event;
  const eventOffers = getPointTypeOffer(dataOffers, event);
  
  if (eventOffers.length !== 0) {
    return (
      `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${eventOffers.offers.map((offer) => createOfferTemplate(offer, offers)).join('')}
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

export function createDestinationTemplate(destination) {
  if (destination !== undefined) {
    const { description, pictures } = destination;
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

function createPriceTemplate(id, basePrice, isNewForm) {
  if (isNewForm) {
    return (
      `<div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-${id}">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-${id}" type="number" name="event-price" value=${basePrice} required>
      </div>`
    );
  }
  return (
    `<div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${id}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${id}" type="number" name="event-price" value=${basePrice}>
    </div>`
  );
}

function createDurationTemplate(id, dateFrom, dateTo, isNewForm) {
  if (isNewForm) {
    return (
      `<div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-${id}">From</label>
        <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value=${humanizeDate(dateFrom, dateFormat.DATE)} required>
        &mdash;
        <label class="visually-hidden" for="event-end-time-${id}">To</label>
        <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value=${humanizeDate(dateTo, dateFormat.DATE)} required>
      </div>`
    );
  }
  return (
    `<div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${id}">From</label>
      <input class="event__input  event__input--time" id="event-start-time-${id}" type="text" name="event-start-time" value=${humanizeDate(dateFrom, dateFormat.DATE)}>
      &mdash;
      <label class="visually-hidden" for="event-end-time-${id}">To</label>
      <input class="event__input  event__input--time" id="event-end-time-${id}" type="text" name="event-end-time" value=${humanizeDate(dateTo, dateFormat.DATE)}>
    </div>`
  );
}

function createEventTypeTemplate(id, type) {
  return (
    `<div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>

          ${TYPES.map((item) => createTypeTemplate(item, id)).join('')}
        </fieldset>
      </div>
    </div>`
  );
}

function createHeaderTypeDestinationTemplate(type, destination, id, isNewForm) {
  if (destination !== undefined) {
    return (
      `<div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${id}">
          ${capitalizeWords(type)}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value=${destination ? he.encode(destination.name) : ''} list="destination-list-${id}">
        <datalist id="destination-list-${id}">
          ${DESTINATIONS.map((item) => createDestinationNameTemplate(item)).join('')}
        </datalist>
      </div>`
    );
  } else if (isNewForm) {
    return (
      `<div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${id}">
          ${capitalizeWords(type)}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value='' list="destination-list-${id}" required>
        <datalist id="destination-list-${id}">
          ${DESTINATIONS.map((item) => createDestinationNameTemplate(item)).join('')}
        </datalist>
      </div>`
    );
  }
}

export function createEventFormTemplate({dataOffers, dataDestinations, resetButton, isNewForm, state}) {
  const { id, type, dateFrom, dateTo, basePrice } = state;
  const destination = getDestinationById(dataDestinations, state);

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          ${createEventTypeTemplate(id, type)}
          ${createHeaderTypeDestinationTemplate(type, destination, id, isNewForm)}
          ${createDurationTemplate(id, dateFrom, dateTo, isNewForm)}
          ${createPriceTemplate(id, basePrice, isNewForm)}
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">${resetButton}</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          ${createOfferContainerTemplate(dataOffers, state)}
          ${createDestinationTemplate(destination)}
        </section>
      </form>
    </li>`
  );
}

export default class EventFormView extends AbstractStatefulView {
  #dataOffers = null;
  #dataDestinations = null;
  #resetButton = null;
  #isNewForm = null;

  _handleFormEditClick = null;
  _handleEventFormSubmit = null;
  _handleResetClick = null;

  #datepickerFrom = null;
  #datepickerTo = null;

  constructor({event = BLANK_POINT, dataOffers, dataDestinations, resetButton, isNewForm, onFormSubmit, onFormEditClick, onResetClick}) {
    super();
    this.#dataOffers = dataOffers;
    this.#dataDestinations = dataDestinations;
    this.#resetButton = resetButton;
    this.#isNewForm = isNewForm;
    this._handleFormEditClick = onFormEditClick;
    this._handleEventFormSubmit = onFormSubmit;
    this._handleResetClick = onResetClick;

    this._setState(EventFormView.parseEventToState({event}));
    this._restoreHandlers();
  }

  get template() {
    return createEventFormTemplate({
      dataDestinations: this.#dataDestinations,
      dataOffers: this.#dataOffers,
      resetButton: this.#resetButton,
      isNewForm: this.#isNewForm,
      state: this._state,
    });
  }

  // Перегружаем метод родителя removeElement,
  // чтобы при удалении удалялся более не нужная точка назначения
  removeElement() {
    super.removeElement();

    if (this.#datepickerFrom) {
      this.#datepickerFrom.destroy();
      this.#datepickerFrom = null;
    }

    if (this.#datepickerTo) {
      this.#datepickerTo.destroy();
      this.#datepickerTo = null;
    }
  }

  _restoreHandlers = () => {
    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelector('.event__available-offers')
      .addEventListener('change', this.#offersChangeHandler);
    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#priceChangeHandler);
    this.element.querySelector('form')
      .addEventListener('submit', this._formSubmitHandler);
    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this._formResetClickHandler);
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this._editClickHandler);

    this.#setDatepickers();
  };

  #typeChangeHandler = (evt) => {
    evt.preventDefault();

    this.updateElement({
      type: evt.target.value,
      offers: [],
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();

    const selectedDestination = this.#dataDestinations.find((eventDestination) => eventDestination.name === evt.target.value);
    const selectedDestinationId = (selectedDestination) ? selectedDestination.id : null;
    this.updateElement({
      destination: selectedDestinationId,
    });
  };

  #offersChangeHandler = (evt) => {
    evt.preventDefault();

    const checkedBoxes = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));
    this._setState({
      offers: checkedBoxes.map((item) => (item.id)),
    });
  };

  #priceChangeHandler = (evt) => {
    evt.preventDefault();
    evt.target.value = evt.target.value.replace(/\D+/g, "");
    this._setState({
      basePrice: evt.target.value,
    });
  };

  #dateToChangeHandler = ([userDate]) => {
    this._setState({
      dateTo: dayjs(userDate).toISOString(),
    });
    this.#datepickerTo.set('minDate', this._state.dateFrom);
  };

  #dateFromChangeHandler = ([userDate]) => {
    this._setState({
      dateFrom: dayjs(userDate).toISOString(),
    });
    this.#datepickerFrom.set('maxDate', this._state.dateTo);
  };

  #setDatepickers() {
    const [dateFromElement, dateToElement] = this.element.querySelectorAll('.event__input--time');
    const commonConfig = {
      deteFormat: 'd/m/y H:i',
      altInput: true,
      altFormat: 'd/m/y H:i',
      enableTime: true,
      "time_24hr": true,
    }

    this.#datepickerFrom = flatpickr(
      dateFromElement,
      {
        ...commonConfig,
        defaultDate: this._state.dateFrom,
        onClose: this.#dateFromChangeHandler,
        maxDate: this._state.dateTo
      },
    );

    this.#datepickerTo = flatpickr(
      dateToElement,
      {
        ...commonConfig,
        defaultDate: this._state.dateTo,
        onClose: this.#dateToChangeHandler,
        minDate: this._state.dateFrom
      },
    );
  }

  _formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._handleEventFormSubmit(EventFormView.parseStateToEvent(this._state));
  };

  _formResetClickHandler = (evt) => {
    evt.preventDefault();
    this._handleResetClick(EventFormView.parseStateToEvent(this._state));
  };

  _editClickHandler = (evt) => {
    evt.preventDefault();
    this._handleFormEditClick();
  };

  static parseEventToState = ({event}) => ({...event});

  static parseStateToEvent = (state) => ({...state});
}
