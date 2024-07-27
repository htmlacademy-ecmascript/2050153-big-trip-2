import EventFormView from '../view/event-form-view.js';

export default class FormEditView extends EventFormView {
  #handleFormEditClick = null;
  #handleFormSubmit = null;
  #handleDeleteClick = null;

  constructor({event, dataOffers, dataDestinations, resetButton, onFormEditClick, onFormSubmit, onDeleteClick}) {
    super({event, dataOffers, dataDestinations, resetButton});

    this.#handleFormEditClick = onFormEditClick;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleDeleteClick = onDeleteClick;

    this._setState(FormEditView.parseEventToState({event}));
    this._restoreHandlers();
  }

  reset = (event) => this.updateElement(FormEditView.parseEventToState(event));

  _restoreHandlers = () => {
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#formDeleteClickHandler);
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(FormEditView.parseStateToEvent(this._state));
  };

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormEditClick();
  };

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(FormEditView.parseStateToEvent(this._state));
  };
}
