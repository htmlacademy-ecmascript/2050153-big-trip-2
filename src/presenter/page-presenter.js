import EventSortView from '../view/sort-view.js';
import EventListView from '../view/list-view.js';
import EventItemView from '../view/point-view.js';
import PointEditFormView from '../view/new-point-edit-form-view.js';
import EditPointView from '../view/edit-point-view.js';
import { RenderPosition, render } from '../framework/render.js';

const pageMainElement = document.querySelector('.page-main');
const pageMainSortElement = pageMainElement.querySelector('.trip-events');

export default class PagePresenter {
  #tripListComponent = new EventListView();

  constructor({pageContainer, eventsModel}) {
    this.pageContainer = pageContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.pageEvents = [...this.eventsModel.events];

    render(new EventSortView(), pageMainSortElement);
    render(this.#tripListComponent, pageMainSortElement);
    render(new PointEditFormView(), this.#tripListComponent.element, RenderPosition.AFTERBEGIN)

    render(new EditPointView({
      event: this.pageEvents[0],
      checkedOffers: [...this.eventsModel.getOfferById(this.pageEvents[0].type, this.pageEvents[0].offers)],
      offers: this.eventsModel.getOffersByType(this.pageEvents[0].type),
      destination: this.eventsModel.getDestinationById(this.pageEvents[0].destination),
    }), this.#tripListComponent.element);

    for (let i = 0; i < this.pageEvents.length; i++) {
      render(new EventItemView({
        event: this.pageEvents[i],
        offers: [...this.eventsModel.getOfferById(this.pageEvents[i].type, this.pageEvents[i].offers)],
        destination: this.eventsModel.getDestinationById(this.pageEvents[i].destination),
      }), this.#tripListComponent.element);
    }
  }
}
