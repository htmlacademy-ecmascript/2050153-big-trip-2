import EventSortView from '../view/sort-view.js';
import EventListView from '../view/list-view.js';
// import PointEditFormView from '../view/new-point-edit-form-view.js';
import NoEventsView from '../view/no-events-view.js';
import EventPresenter from './event-presenter.js';
import { render, remove, RenderPosition } from '../framework/render.js';
import { SortTypes, UpdateType, UserAction } from '../const.js';
// import { updateItem } from '../utils/utils.js';
import { sortByDay, sortByTime, sortByPrice } from '../utils/sort.js';

export default class PagePresenter {
  #tripListComponent = new EventListView();
  #sortComponent = null;
  #noEventComponent = new NoEventsView();

  #pageContainer = null;
  #eventsModel = null;

  #currentSortType = SortTypes.DEFAULT;
  // #sortedEvents = [];
  // #pageEvents = [];
  // #sortTypes = [];
  #offers = [];
  #destinations = [];

  #eventPresenters = new Map();

  constructor({pageContainer, eventsModel, sorts}) {
    this.#pageContainer = pageContainer;
    this.#eventsModel = eventsModel;
    // this.#sortTypes = sorts;
    this.#eventsModel.addObserver(this.#handleModelEvent);
  }

  get events() {
    const events = [...this.#eventsModel.events];

    switch (this.#currentSortType) {
      case SortTypes.TIME:
        events.sort(sortByTime);
      case SortTypes.PRICE:
        events.sort(sortByPrice);
    }
    return events.sort(sortByDay);;
  }

  init() {
    this.#offers = [...this.#eventsModel.offers];
    this.#destinations = [...this.#eventsModel.destinations];
    // this.#pageEvents = [...this.#eventsModel.events];
    // this.#sortedEvents = [...this.#eventsModel.events];
    this.#renderSort();
    this.#renderTripList();
  }

  #handleModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  // #handleEventChange = (updatedEvent) => {
  //   // console.log('updatedEvent', updatedEvent);
  //   // this.#pageEvents = updateItem(this.#pageEvents, updatedEvent);
  //   // this.#sortedEvents = updateItem(this.#sortedEvents, updatedEvent);
  //   // Здесь будем вызывать обновление модели
  //   this.#eventPresenters.get(updatedEvent.id).init(updatedEvent, this.#offers, this.#destinations);
  //   // this.#sortEvents(this.#currentSortType);
  //   // this.#clearEvents();
  //   // this.#pageEvents.forEach((i) => this.#renderEvent(i, this.#offers, this.#destinations));
  // };

  /**
   * #handleViewAction будет вызывать обновление модели.
   * actionType - действие пользователя, нужно чтобы понять, какой метод модели вызвать
   * updateType - тип изменений, нужно чтобы понять, что после нужно обновить
   * update - обновленные данные
   */
  #handleViewAction = (actionType, updateType, update) => {
    console.log(actionType, updateType, update);
    switch (actionType) {
      case UserAction.UPDATE_TASK:
        this.#eventsModel.updateTask(updateType, update);
        break;
      case UserAction.ADD_TASK:
        this.#eventsModel.addTask(updateType, update);
        break;
      case UserAction.DELETE_TASK:
        this.#eventsModel.deleteTask(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    console.log(updateType, data);
    switch (updateType) {
      case UpdateType.PATCH:
        this.#eventPresenters.get(data.id).init(data, this.#offers, this.#destinations);
        break;
      case UpdateType.MINOR:
        // - ообновить events (точки маршрута)
        this.#clearEvents();
        // this.#renderSort();
        this.#renderTripList();
        break;
      case UpdateType.MAJOR:
        // - обновить всю страницу (например, при переключении фильтра)
        this.#clearEvents({resetSortType: true});
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
    // this.#sortEvents(sortType);
    // this.#sortTypes.forEach((i) => (i.type === sortType) ? (i.isChecked = true) : (i.isChecked = false));
    // - Очищаем сортировку
    this.#clearSortTypes();
    // - Рендерим сортировку заново
    this.#renderSort();
    // - Очищаем список
    this.#clearEvents();
    // - Рендерим список заново

    this.events.forEach((i) => this.#renderEvent(i, this.#offers, this.#destinations));
  };

  // #sortEvents(sortType) {
  //   switch (sortType) {
  //     case SortType.TIME:
  //       this.#pageEvents.sort(sortByTime);
  //       break;
  //     case SortType.PRICE:
  //       this.#pageEvents.sort(sortByPrice);
  //       break;
  //     default:
  //       this.#pageEvents = [...this.#sortedEvents];
  //       this.#pageEvents.sort(sortByDay);
  //       this.#currentSortType = SortType.DEFAULT;
  //   }
  //   this.#currentSortType = sortType;
  // }

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
    events.forEach((i) => this.#renderEvent(i, this.#offers, this.#destinations));
  }

  #clearEvents({ resetSortType = false } = {}) {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();

    remove(this.#sortComponent);
    remove(this.#noEventComponent);

    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  }

  #clearSortTypes() {
    remove(this.#sortComponent);
  }

  #renderTripList() {
    const events = this.events.slice(0, this.events.length);
    render(this.#tripListComponent, this.#pageContainer);

    if (this.events.length === 0) {
      this.#renderNoEvents();
      return;
    }
    this.#renderEvents(events);
  }

  // #renderEvents() {
  //   const ev = this.points.slice(0, this.points.length);
  //   render(this.#pointListComponent, this.#tripEventsContainer);

  //   if (this.events.length === 0) {
  //     this.#renderNoEvents();
  //     return;
  //   }

  //   this.#renderSort();
  //   this.#renderTripList();

  //   this.events.sort(sortByDay);
  //   this.events.forEach((i) => this.#renderEvent(i, this.#offers, this.#destinations));
  // }
}
