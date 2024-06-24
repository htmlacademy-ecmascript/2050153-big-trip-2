import AbstractView from '../framework/view/abstract-view.js';
import { capitalizeWords } from '../utils.js';

export function createSortTemplate(sort) {
  const { type, isDisabled, isChecked } = sort;
  const disabledAttribute = isDisabled
    ? 'disabled'
    : '';

  const checkedAttribute = isChecked
    ? 'checked'
    : '';

  console.log('type',type);
  return (
    `<div class="trip-sort__item  trip-sort__item--${type}">
      <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" data-sort-type="${type}" value="sort-${type}" ${checkedAttribute} ${disabledAttribute}>
      <label class="trip-sort__btn" for="sort-${type}">${capitalizeWords(type)}</label>
    </div>`
  );
}

function createSortContainerTemplate(sorts) {
  console.log('sorts', sorts);
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sorts.map((sort) => createSortTemplate(sort)).join('')}
    </form>`
  );
}

export default class EventSortView extends AbstractView {
  #sorts = null;
  #handleSortTypeChange = null;

  constructor({sorts, onSortTypeChange}) {
    super();
    this.#sorts = sorts;
    console.log('sorts', this.#sorts);
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortContainerTemplate(this.#sorts);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
    if (evt.target.dataset.sortType) {
      if (evt.target !== 'checked') {
        evt.target.setAttribute('checked', '')
      }
    }
  };
}
