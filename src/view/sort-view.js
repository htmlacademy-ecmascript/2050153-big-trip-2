import AbstractView from '../framework/view/abstract-view.js';
import { SortType } from '../const.js';
import { capitalizeWords } from '../utils.js';

export function createSortTemplate(type) {
  return (
    `<div class="trip-sort__item  trip-sort__item--${type}">
      <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" data-sort-type="${type}" value="sort-${type}">
      <label class="trip-sort__btn" for="sort-${type}">${capitalizeWords(type)}</label>
    </div>`
  );
}

function createEventSortTemplate() {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${Object.values(SortType).map((item) => createSortTemplate(item)).join('')}
    </form>`
  );
}

export default class EventSortView extends AbstractView {
  get template() {
    return createEventSortTemplate();
  }
}
