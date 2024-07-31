import FilterPresenter from '../presenter/filter-presenter.js';
import TripInfoView from '../view/trip-info-view.js';
import { RenderPosition, render, remove } from '../framework/render.js';

export default class HeaderPresenter {
  #tripInfoComponent = null;

  #headerContainer = null;
  #tripInfoContainer = null;
  #filterContainer = null;

  #eventsModel = null;
  #filterModel = null;

  #filterPresenter = null;

  #dataOffers = [];
  #events = [];

  constructor({headerContainer, eventsModel, filterModel}) {
    this.#headerContainer = headerContainer;
    this.#tripInfoContainer = this.#headerContainer.querySelector('.trip-main');
    this.#filterContainer = this.#headerContainer.querySelector('.trip-controls__filters');
    this.#eventsModel = eventsModel;
    this.#filterModel = filterModel;
  }

  init() {
    this.#events = this.#eventsModel.events;
    this.#dataOffers = this.#eventsModel.offers;

    this.#renderTripInfo();
    this.#renderFilters();
  }

  destroy() {
    if (this.#tripInfoComponent === null) {
      return;
    }

    remove(this.#tripInfoComponent);
    this.#tripInfoComponent = null;

    this.#filterPresenter.destroy();
  }

  #renderTripInfo() {
    this.#tripInfoComponent = new TripInfoView({
      events: this.#events,
      dataOffers: this.#dataOffers,
    });
    render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  #renderFilters() {
    this.#filterPresenter = new FilterPresenter({
      filterContainer: this.#filterContainer,
      eventsModel: this.#eventsModel,
      filterModel: this.#filterModel,
    });
    this.#filterPresenter.init();
  }
}
