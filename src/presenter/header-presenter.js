import EventFilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';
import { RenderPosition, render } from '../render.js';

export default class HeaderPresenter {
  tripInfoView = new TripInfoView();
  eventFilterView = new EventFilterView();

  constructor({headerContainer, eventsModel}) {
    this.headerContainer = pageContainer;
    this.tripInfoContainer = this.headerContainer.querySelector('.trip-main');
    this.eventFilterContainer = this.headerContainer.querySelector('.trip-controls__filters');
    // this.eventsModel = eventsModel;
  }

  init() {
    // this.pageEvents = [...this.eventsModel.getEvents()];

    render(tripInfoView, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(eventFilterView, this.eventFilterContainer);
  }
}
