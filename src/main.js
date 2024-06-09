import PagePresenter from './presenter/page-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import EventsModel from './model/event-model.js';

const headerElement = document.querySelector('.page-header__container');
const pageMainElement = document.querySelector('.page-main');
const pageMainSortElement = pageMainElement.querySelector('.trip-events');

const eventsModel = new EventsModel();

const headerPresenter = new HeaderPresenter({
  headerContainer: headerElement,
  eventsModel,
});

const pagePresenter = new PagePresenter({
  pageContainer: pageMainElement,
  eventsModel,
});

headerPresenter.init();
pagePresenter.init();
