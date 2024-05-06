import PagePresenter from './presenter/page-presenter.js';

// const headerElement = document.querySelector('.page-header__container');
// const headerTripInfoElement = headerElement.querySelector('.trip-main');
// const headerFilterElement = headerElement.querySelector('.trip-controls__filters');

const pageBodyElement = document.querySelector('.page-body');

const pagePresenter = new PagePresenter({pageContainer: pageBodyElement});

// render(new TripInfoView(), headerTripInfoElement);
// render(new EventFilterView(), headerFilterElement);

pagePresenter.init();
