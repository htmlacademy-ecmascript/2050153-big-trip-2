import EventItemView from '../view/event-view.js';
import FormEditView from '../view/form-edit-view.js';
import { render, replace, remove } from '../framework/render.js';
import { isEscapeKey } from '../utils.js';
import { Mode } from '../const.js';

export default class EventPresenter {
  #eventListContainer = null;

  #handleDataChange = null;
  #handleModeChange = null;

  #eventComponent = null;
  #formEditComponent = null;

  #eventsModel = null;

  #event = null;
  #mode = Mode.DEFAULT;

  constructor({eventListContainer, eventsModel, onDataChange, onModeChange}) {
    this.#eventListContainer = eventListContainer;
    this.#eventsModel = eventsModel;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(event) {
    this.#event = event;

    const prevEventComponent = this.#eventComponent;
    const prevFormEditComponent = this.#formEditComponent;

    this.#eventComponent = new EventItemView({
      event: this.#event,
      offers: [...this.#eventsModel.getOfferById(event.type, event.offers)],
      destination: this.#eventsModel.getDestinationById(event.destination),
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#formEditComponent =  new FormEditView({
      event: this.#event,
      checkedOffers: [...this.#eventsModel.getOfferById(event.type, event.offers)],
      offers: this.#eventsModel.getOffersByType(event.type),
      destination: this.#eventsModel.getDestinationById(event.destination),
      onFormEditClick: this.#handleFormEditClick,
      onFormSubmit: this.#handleFormSubmit,
    });

    if (prevEventComponent === null || prevFormEditComponent === null) {
      render(this.#eventComponent, this.#eventListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#formEditComponent, prevFormEditComponent);
    }

    remove(prevEventComponent);
    remove(prevFormEditComponent);
  }

  destroy() {
    remove(this.#eventComponent);
    remove(this.#formEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToEvent();
    }
  }

  #replaceEventToForm() {
    replace(this.#formEditComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
    console.log(this.#mode);
  }

  #replaceFormToEvent() {
    replace(this.#eventComponent, this.#formEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
    console.log(this.#mode);
  }

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replaceFormToEvent();
    }
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#event, isFavorite: !this.#event.isFavorite});
  };

  #handleEditClick = () => {
    this.#replaceEventToForm();
  };

  #handleFormEditClick = () => {
    this.#replaceFormToEvent();
  };

  #handleFormSubmit = (event) => {
    this.#handleDataChange(event);
    this.#replaceFormToEvent();
  };
}
