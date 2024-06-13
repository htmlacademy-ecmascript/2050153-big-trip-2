import EventSortView from '../view/sort-view.js';
import EventListView from '../view/list-view.js';
// import PointEditFormView from '../view/new-point-edit-form-view.js';
import PointPresenter from './point-presenter.js';
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

  #renderEvent(event) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#tripListComponent.element,
      eventsModel: this.#eventsModel,
    });
    pointPresenter.init(event);
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
