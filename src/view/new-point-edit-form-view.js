import EventFormView from '../view/event-form-view.js';

export default class NewEventFormView extends EventFormView {
  // _handleNewEventFormSubmit = null;
  // _handleCancelClick = null;
  // _handleFormEditClick = null;

  constructor({event, dataOffers, dataDestinations, resetButton, isNewForm, onFormEditClick, onFormSubmit, onResetClick}) {
    super({event, dataOffers, dataDestinations, resetButton, isNewForm, onFormSubmit, onFormEditClick, onResetClick });

    // this.#handleFormEditClick = onFormEditClick;
    // this.#handleNewEventFormSubmit = onFormSubmit;
    // this.#handleCancelClick = onResetClick;

    this._setState(NewEventFormView.parseEventToState({event}));

    // this.element.querySelector('form')
    //   .addEventListener('submit', this._formSubmitHandler);
    // this.element.querySelector('.event__reset-btn')
    //   .addEventListener('click', this._formCancelClickHandler);
    // this.element.querySelector('.event__rollup-btn')
    //   .addEventListener('click', this._editClickHandler);
  }

  // _formSubmitHandler = (evt) => {
  //   evt.preventDefault();
  //   this.#handleNewEventFormSubmit(NewEventFormView.parseStateToEvent(this._state));
  // };

  // _formResetClickHandler = (evt) => {
  //   evt.preventDefault();
  //   this.#handleCancelClick(NewEventFormView.parseStateToEvent(this._state));
  // };

  // _editClickHandler = (evt) => {
  //   evt.preventDefault();
  //   this.#handleFormEditClick();
  // };

  reset = (event) => this.updateElement(NewEventFormView.parseEventToState(event));
}
