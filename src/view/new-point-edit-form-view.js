import EventFormView from '../view/event-form-view.js';

export default class NewEventFormView extends EventFormView {
  #handleNewEventFormSubmit = null;
  #handleCancelClick = null;
  #handleFormEditClick = null;

  constructor({event, dataOffers, dataDestinations, resetButton, onFormEditClick, onFormSubmit, onCancelClick}) {
    super({event, dataOffers, dataDestinations, resetButton});

    this.#handleFormEditClick = onFormEditClick;
    this.#handleNewEventFormSubmit = onFormSubmit;
    this.#handleCancelClick = onCancelClick;

    this._setState(NewEventFormView.parseEventToState({event}));

    this.element.querySelector('form')
      .addEventListener('submit', this.#onFormSubmitHandler);
    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#formCancelClickHandler);
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  #onFormSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleNewEventFormSubmit(NewEventFormView.parseStateToEvent(this._state));
  };

  #formCancelClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCancelClick(NewEventFormView.parseStateToEvent(this._state));
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormEditClick();
  };

  reset = (event) => this.updateElement(NewEventFormView.parseEventToState(event));
}
