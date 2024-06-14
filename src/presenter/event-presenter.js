import EventItemView from '../view/event-view.js';
import FormEditView from '../view/form-edit-view.js';
import { render, replace, remove } from '../framework/render.js';
import { isEscapeKey } from '../utils.js';

export default class EventPresenter {
  #eventListContainer = null;
  #handleDataChange = null;
  #eventComponent = null;
  #formEditComponent = null;
  #eventsModel = null;
  #event = null;

  constructor({eventListContainer, eventsModel, onDataChange}) {
    this.#eventListContainer = eventListContainer;
    this.#eventsModel = eventsModel;
    this.#handleDataChange = onDataChange;
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
      onFormSubmit: this.#handleFormSubmit,
      // onFavoriteClick: this.#handleFavoriteClick,
    });

    if (prevEventComponent === null || prevFormEditComponent === null) {
      render(this.#eventComponent, this.#eventListContainer);
      return;
    }

    // Проверка на наличие в DOM необходима,
    // чтобы не пытаться заменить то, что не было отрисовано
    if (this.#eventListContainer.contains(prevEventComponent.element)) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if (this.#eventListContainer.contains(prevFormEditComponent.element)) {
      replace(this.#formEditComponent, prevFormEditComponent);
    }

    remove(prevEventComponent);
    remove(prevFormEditComponent);
  }

  destroy() {
    remove(this.#eventComponent);
    remove(this.#formEditComponent);
  }

  #replaceEventToForm() {
    replace(this.#formEditComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToEvent() {
    replace(this.#eventComponent, this.#formEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler)
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

  #handleFormSubmit = () => {
    this.#handleDataChange(event);
    this.#replaceFormToEvent();
  };
}
