import EventItemView from '../view/point-view.js';
import FormEditView from '../view/form-edit-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils.js';

export default class PointPresenter {
  #pointListContainer = null;

  #eventComponent = null;
  #formEditComponent = null;

  #eventsModel = null;

  #event = null;

  constructor({pointListContainer, eventsModel}) {
    this.#pointListContainer = pointListContainer;
    this.#eventsModel = eventsModel;
  }

  init(event) {
    this.#event = event;

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

    render(this.#eventComponent, this.#pointListContainer);
  }

  #replacePointToForm() {
    replace(this.#formEditComponent, this.#eventComponent);
    document.addEventListener('keydown', escKeyDownHandler);
  }

  #replaceFormToPoint() {
    replace(this.#eventComponent, this.#formEditComponent);
    document.removeEventListener('keydown', escKeyDownHandler)
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
