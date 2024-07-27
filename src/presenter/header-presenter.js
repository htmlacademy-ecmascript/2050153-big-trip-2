import FilterPresenter from '../presenter/filter-presenter.js';
import TripInfoView from '../view/trip-info-view.js';
import { RenderPosition, render } from '../framework/render.js';

export default class HeaderPresenter {
  #tripInfoComponent = null;

  #headerContainer = null;
  #tripInfoContainer = null;
  #filterContainer = null;

  #eventsModel = null;
  #filterModel = null;

  #dataOffers = [];
  #events = [];

  #filterPresenter = new Map();

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

  #renderTripInfo() {
    this.#tripInfoComponent = new TripInfoView({
      events: this.#events,
      dataOffers: this.#dataOffers,
    });
    render(this.#tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  #renderFilters() {
    const filterPresenter = new FilterPresenter({
      filterContainer: this.#filterContainer,
      eventsModel: this.#eventsModel,
      filterModel: this.#filterModel,
    });
    filterPresenter.init();
  }
}
