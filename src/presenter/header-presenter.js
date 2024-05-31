import EventFilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { RenderPosition, render } from '../framework/render.js';

export default class HeaderPresenter {
  #tripInfoView = new TripInfoView();
  #eventFilterView = new EventFilterView();

  constructor({headerContainer, eventsModel}) {
    this.headerContainer = headerContainer;
    this.tripInfoContainer = this.headerContainer.querySelector('.trip-main');
    this.eventFilterContainer = this.headerContainer.querySelector('.trip-controls__filters');
    // this.eventsModel = eventsModel;
  }

  init() {
    // this.pageEvents = [...this.eventsModel.getEvents()];

    render(this.#tripInfoView, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(this.#eventFilterView, this.eventFilterContainer);
  }
}
