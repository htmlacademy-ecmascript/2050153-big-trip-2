import PagePresenter from './presenter/page-presenter.js';
import EventsModel from './model/event-model.js';

const pageBodyElement = document.querySelector('.page-body');

const eventsModel = new EventsModel();
const pagePresenter = new PagePresenter({
  pageContainer: pageBodyElement,
  eventsModel,
});

pagePresenter.init();
