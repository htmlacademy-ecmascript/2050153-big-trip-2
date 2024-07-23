import AbstractView from '../framework/view/abstract-view.js';
import { Filters } from '../const.js';
import { capitalizeWords } from '../utils/event.js';

function createFilterTemplate(filterName) {
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filterName}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterName}">
      <label class="trip-filters__filter-label" for="filter-${filterName}">${capitalizeWords(filterName)}</label>
    </div>`
  );
}

function createEventFiltersTemplate() {
  return (
    `<form class="trip-filters" action="#" method="get">
      ${Object.values(Filters).map((filter) => createFilterTemplate(filter)).join('')}

      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
}

export default class EventFilterView extends AbstractView {
  get template() {
    return createEventFiltersTemplate();
  }
}
