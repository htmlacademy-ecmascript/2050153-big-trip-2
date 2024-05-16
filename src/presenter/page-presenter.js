import EventFilterView from '../view/filter-view.js';
import TripInfoView from '../view/trip-info-view.js';
import EventSortView from '../view/sort-view.js';
import EventListView from '../view/list-view.js';
import EventItemView from '../view/point-view.js';
import PointEditFormView from '../view/point-edit-form-view.js';
import { RenderPosition, render } from '../render.js';

const headerElement = document.querySelector('.page-header__container');
const headerTripInfoElement = headerElement.querySelector('.trip-main');
const headerFilterElement = headerElement.querySelector('.trip-controls__filters');

const pageMainElement = document.querySelector('.page-body__page-main');
const pageMainSortElement = pageMainElement.querySelector('.trip-events');

export default class PagePresenter {
  tripListComponent = new EventListView();
  pointEditFormView = new PointEditFormView();

  constructor({pageContainer, eventsModel}) {
    this.pageContainer = pageContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.pageEvents = [...this.eventsModel.getTasks()];

    render(new TripInfoView(), headerTripInfoElement, RenderPosition.AFTERBEGIN);
    render(new EventFilterView(), headerFilterElement);
    render(new EventSortView(), pageMainSortElement);
    render(this.tripListComponent, pageMainSortElement);
    render(this.pointEditFormView, this.tripListComponent.getElement());

    for (let i = 0; i < this.pageEvents.length; i++) {
      render(new EventItemView({task: this.pageEvents[i]}),
      this.tripListComponent.getElement());
    }
  }
}
