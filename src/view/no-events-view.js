import AbstractView from '../framework/view/abstract-view.js';
import { TextNoEvent } from '../const.js';

function createNoEventsTemplate() {
  return `<p class="trip-events__msg">${ TextNoEvent.EVERYTHING }</p>`;
}

export default class NoEventsView extends AbstractView {
  get template() {
    return createNoEventsTemplate();
  }
}
