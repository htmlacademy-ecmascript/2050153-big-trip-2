import PagePresenter from './presenter/page-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import EventsModel from './model/event-model.js';
// import { generateSortTypes } from './mock/sorts.js';

const headerElement = document.querySelector('.page-header__container');
const pageMainElement = document.querySelector('.page-main');
const pageMainSortElement = pageMainElement.querySelector('.trip-events');

const eventsModel = new EventsModel();
// const sortTypes = generateSortTypes();

const headerPresenter = new HeaderPresenter({
  headerContainer: headerElement,
  eventsModel,
});

const pagePresenter = new PagePresenter({
  pageContainer: pageMainSortElement,
  eventsModel,
  // sorts: sortTypes,
});

headerPresenter.init();
pagePresenter.init();
