import EventSortView from '../view/sort-view.js';
import EventListView from '../view/list-view.js';
import EventItemView from '../view/point-view.js';
// import PointEditFormView from '../view/new-point-edit-form-view.js';
import FormEditView from '../view/form-edit-view.js';
import NoEventsView from '../view/no-events-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils.js';

export default class PagePresenter {
  #tripListComponent = new EventListView();
  #sortComponent = new EventSortView();
  #noEventComponent = new NoEventsView();
  #pageContainer = null;
  #eventsModel = null;
  #pageEvents = [];


  constructor({pageContainer, eventsModel}) {
    this.#pageContainer = pageContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#pageEvents = [...this.#eventsModel.events];
    this.#renderApp();
  }

  #renderEvent(point) {
    const escKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const event = new EventItemView({
      event: point,
      offers: [...this.#eventsModel.getOfferById(point.type, point.offers)],
      destination: this.#eventsModel.getDestinationById(point.destination),
      onEditClick: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const formEdit = new FormEditView({
      event: point,
      checkedOffers: [...this.#eventsModel.getOfferById(point.type, point.offers)],
      offers: this.#eventsModel.getOffersByType(point.type),
      destination: this.#eventsModel.getDestinationById(point.destination),
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(formEdit, event);
    }

    function replaceFormToPoint() {
      replace(event, formEdit);
    }

    render(event, this.#tripListComponent.element);
  }

  #renderNoEvents() {
    render(this.#noEventComponent, this.#pageContainer);
  }

  #renderTripList() {
    render(this.#tripListComponent, this.#pageContainer);
  }

  #renderSort() {
    render(this.#sortComponent, this.#pageContainer);
  }

  #renderApp() {
    if (this.#pageEvents.length === 0) {
      this.#renderNoEvents();
      return;
    }

    this.#renderSort();
    this.#renderTripList();
    this.#pageEvents.forEach((i) => this.#renderEvent(i));
  }
}
