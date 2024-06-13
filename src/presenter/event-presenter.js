import EventItemView from '../view/point-view.js';
import FormEditView from '../view/form-edit-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils.js';

export default class EventPresenter {
  #eventListContainer = null;

  #eventComponent = null;
  #formEditComponent = null;

  #eventsModel = null;

  #event = null;

  constructor({eventListContainer, eventsModel}) {
    this.#eventListContainer = eventListContainer;
    this.#eventsModel = eventsModel;
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
    });

    this.#formEditComponent =  new FormEditView({
      event: this.#event,
      checkedOffers: [...this.#eventsModel.getOfferById(event.type, event.offers)],
      offers: this.#eventsModel.getOffersByType(event.type),
      destination: this.#eventsModel.getDestinationById(event.destination),
      onFormSubmit: this.#handleFormSubmit,
    });

    // render(this.#eventComponent, this.#eventListContainer);
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

  #replacePointToForm() {
    replace(this.#formEditComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#eventComponent, this.#formEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler)
  }

  #escKeyDownHandler = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  };
}
