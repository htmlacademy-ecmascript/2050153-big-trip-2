import { remove, render, RenderPosition } from '../framework/render.js';
import AddEventFormView from '../view/new-point-edit-form-view.js';
import { nanoid } from 'nanoid';
import { UserAction, UpdateType, FormResetButton } from '../const.js';

export default class NewEventFormPresenter {
  #newEventFormComponent = null;
  #eventListContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #handleDestroy = null;

  #event = null;
  #dataOffers = null;
  #dataDestinations = null;

  constructor({eventListContainer, onDataChange, onDestroy}) {
    this.#eventListContainer = eventListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init(dataOffers, dataDestinations) {
    this.#dataOffers = dataOffers;
    this.#dataDestinations = dataDestinations;

    if (this.#newEventFormComponent !== null) {
      return;
    }

    this.#newEventFormComponent = new AddEventFormView({
      dataOffers: this.#dataOffers,
      dataDestinations: this.#dataDestinations,
      resetButton: FormResetButton.CANCEL,
      onFormEditClick: this.#handleFormEditClick,
      onFormSubmit: this.#handleNewEventFormSubmit,
      onCancelClick: this.#handleCancelClick,
    });

    render(this.#newEventFormComponent, this.#eventListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#newEventFormComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#newEventFormComponent);
    this.#newEventFormComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handleNewEventFormSubmit = (event) => {
    this.#handleDataChange(
      UserAction.ADD_EVENT,
      UpdateType.MINOR,
      // Пока у нас нет сервера, который бы после сохранения
      // выдывал честный id задачи, нам нужно позаботиться об этом самим
      {id: nanoid(), ...event},
    );
    this.destroy();
  };

  #handleCancelClick = () => {
    this.destroy();
  };

  #handleFormEditClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
