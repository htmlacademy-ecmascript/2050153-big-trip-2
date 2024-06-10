import EventFilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { RenderPosition, render } from '../framework/render.js';

export default class HeaderPresenter {
  #tripInfoView = new TripInfoView();
  #eventFilterView = new EventFilterView();
  #headerContainer = null;
  #eventsModel = null;
  #pageEvents = [];

  constructor({headerContainer, eventsModel}) {
    this.#headerContainer = headerContainer;
    this.tripInfoContainer = this.#headerContainer.querySelector('.trip-main');
    this.eventFilterContainer = this.#headerContainer.querySelector('.trip-controls__filters');
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#pageEvents = [...this.#eventsModel.events];

    render(this.#tripInfoView, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    this.#renderFilters();
  }

  #renderFilters() {
    render(this.#eventFilterView, this.eventFilterContainer);

    if (this.#pageEvents.length === 0) {
      const filterInputs = document.querySelectorAll('.trip-filters__filter-input');
      disdableFilters(filterInputs);
    }

    function disdableFilters(elements) {
      elements.forEach((i) => (i).setAttribute('disabled', 'disabled'));
    }
  }
}
