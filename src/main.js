import PagePresenter from './presenter/page-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import EventsModel from './model/event-model.js';
import FilterModel from './model/filter-model.js';

const headerElement = document.querySelector('.page-header__container');
const pageMainElement = document.querySelector('.page-main');
const pageMainSortElement = pageMainElement.querySelector('.trip-events');
const newEventButton = document.querySelector('.trip-main__event-add-btn');

const eventsModel = new EventsModel();
const filterModel = new FilterModel();

newEventButton.addEventListener('click', handleNewEventButtonClick);

// const headerPresenter = new HeaderPresenter({
//   headerContainer: headerElement,
//   filterModel,
//   eventsModel,
// });

const pagePresenter = new PagePresenter({
  pageContainer: pageMainSortElement,
  headerContainer: headerElement,
  eventsModel,
  filterModel,
  onNewEventDestroy: handleNewEventFormClose
});

function handleNewEventFormClose(evt) {
  // evt.preventDefault();
  newEventButton.disabled = false;
}

function handleNewEventButtonClick(evt) {
  // evt.preventDefault();

  pagePresenter.createEvent();
  newEventButton.disabled = true;
}

// headerPresenter.init();
pagePresenter.init();
