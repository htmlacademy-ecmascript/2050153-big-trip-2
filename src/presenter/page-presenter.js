import EventSortView from '../view/sort-view.js';
import EventListView from '../view/list-view.js';
// import PointEditFormView from '../view/new-point-edit-form-view.js';
import NoEventsView from '../view/no-events-view.js';
import EventPresenter from './event-presenter.js';
import { render, remove, RenderPosition } from '../framework/render.js';
import { SortTypes, UpdateType, UserAction } from '../const.js';
import { sortByDay, sortByTime, sortByPrice } from '../utils/sort.js';

export default class PagePresenter {
  #tripListComponent = new EventListView();
  #sortComponent = null;
  #noEventComponent = new NoEventsView();

  #pageContainer = null;
  #eventsModel = null;

  #currentSortType = SortTypes.DEFAULT;
  #offers = [];
  #destinations = [];

  #eventPresenters = new Map();

  constructor({pageContainer, eventsModel, sorts}) {
    this.#pageContainer = pageContainer;
    this.#eventsModel = eventsModel;
    this.#eventsModel.addObserver(this.#handleModelEvent);
  }

  get events() {
    switch (this.#currentSortType) {
      case SortTypes.TIME:
        return [...this.#eventsModel.events].sort(sortByTime);
      case SortTypes.PRICE:
        return [...this.#eventsModel.events].sort(sortByPrice);
    }
    return [...this.#eventsModel.events].sort(sortByDay);
  }

  init() {
    this.#offers = [...this.#eventsModel.offers];
    this.#destinations = [...this.#eventsModel.destinations];

    this.#renderSort();
    this.#renderTripList();
  }

  #handleModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  /**
   * #handleViewAction будет вызывать обновление модели.
   * actionType - действие пользователя, нужно чтобы понять, какой метод модели вызвать
   * updateType - тип изменений, нужно чтобы понять, что после нужно обновить
   * update - обновленные данные
   */
  #handleViewAction = (actionType, updateType, update) => {
    console.log(actionType, updateType, update);
    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        this.#eventsModel.updateEvent(updateType, update);
        break;
      case UserAction.ADD_EVENT:
        this.#eventsModel.addEvent(updateType, update);
        break;
      case UserAction.DELETE_EVENT:
        this.#eventsModel.deleteEvent(updateType, update);
        break;
    }
  };

   /**
   * #handleModelEvent будет обновлять точки маршрута или всю страницу
   * в зависимости от типа изменений:
   * updateType - тип изменений:
   * - PATCH - обновит часть или всю event(точку маршрута),
   * - MINOR - обновит events (точки маршрута),
   * - MAJOR - обновить всю страницу (например, при переключении фильтра.
   * data - обновленные данные
   */
  #handleModelEvent = (updateType, data) => {
    console.log(updateType, data);
    switch (updateType) {
      case UpdateType.PATCH:
        this.#eventPresenters.get(data.id).init(data, this.#offers, this.#destinations);
        this.#clearTripList();
        this.#renderSort();
        this.#renderTripList();
        break;
      case UpdateType.MINOR:
        this.#clearTripList();
        this.#renderSort();
        this.#renderTripList();
        break;
      case UpdateType.MAJOR:
        this.#clearTripList({resetSortType: true});
        this.#renderSort();
        this.#renderTripList();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    // - Очищаем сортировку
    this.#clearTripList();
    // - Рендерим сортировку заново
    this.#renderSort();
    // - Рендерим список заново
    this.#renderTripList();
  };

  #renderSort() {
    this.#sortComponent = new EventSortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#pageContainer, RenderPosition.AFTERBEGIN);
  }

  #renderEvent(event, dataOffers, dataDestinations) {
    const eventPresenter = new EventPresenter({
      eventListContainer: this.#tripListComponent.element,
      eventsModel: this.#eventsModel,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange
    });
    eventPresenter.init(event, dataOffers, dataDestinations);
    this.#eventPresenters.set(event.id, eventPresenter);
  }

  #renderNoEvents() {
    render(this.#noEventComponent, this.#pageContainer);
  }

  #renderEvents(events) {
    events.forEach((event) => this.#renderEvent(event, this.#offers, this.#destinations));
  }

  #clearTripList({ resetSortType = false } = {}) {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#noEventComponent);

    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  }

  #renderTripList() {
    const events = this.events;
    render(this.#tripListComponent, this.#pageContainer);

    if (this.events.length === 0) {
      this.#renderNoEvents();
      return;
    }
    this.#renderEvents(events);
  }
}
