import dayjs from 'dayjs';

const MILLISECONDS_IN_MINUTES = 60000;
const SECONDS_IN_MINUTS = 60;
const HOURS_IN_DAY = 24;

const dateFormat = {
  DATE: 'DD/MM/YY\xa0HH:mm',
  DATE_AND_TIME: 'YYYY-MM-DD-HH:mm',
  MONTH_DAY: 'MMM DD',
  HOURS: 'HH:mm',
  DATE_POINT: 'YYYY-MM-DD',
};

// Получение целого положительного числа из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// Получение случайного значения из массива данных
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// получение массива случайной длины из значений
const getArrayFromRandomElements = (elements) => Array.from(
  { length: getRandomInteger(0, elements.length - 1) },
  () => getRandomArrayElement(elements),
).join(', ');

// Приобразование данных по дате в нужный формат
const humanizeDate = (eventDate, format) => eventDate ? dayjs(eventDate).format(format) : '';

const getDifferenceInTime = (start, end) => {
  const difference = dayjs(end).diff(start) / MILLISECONDS_IN_MINUTES;

  switch (difference) {
    case difference < SECONDS_IN_MINUTS:
      return dayjs(difference).format('mm[M]');
    case difference > SECONDS_IN_MINUTS && difference < (SECONDS_IN_MINUTS * HOURS_IN_DAY):
      return dayjs(difference).format('HH[H] mm[M]');
    default:
      return dayjs(difference).format('DD[D] HH[H] mm[M]');
  }
};

const capitalizeWords = (str) => str.replace(/\b\w/g, c => c.toUpperCase());

const isEscapeKey = (evt) => (evt).key === 'Escape';

function updateItem (items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

// Сортировка
const compareEvents = (event1, event2) => {
  if (event1 < event2) {
    return -1;
  }
  if (event1 > event2) {
    return 1;
  }
  return 0;
};

const compareNumbers = (a, b) => a - b;

const sortByDay = (eventA, eventB) => {
  const weight = compareEvents(eventA.dateFrom, eventB.dateFrom);

  return weight ?? dayjs(eventA.dateFrom).diff(dayjs(eventB.dateFrom));
};

const sortByTime = (eventA, eventB) => {
  const durationA = getDifferenceInTime(eventA.dateFrom, eventA.dateTo);
  const durationB = getDifferenceInTime(eventB.dateFrom, eventB.dateTo);
  const weight = compareEvents(durationA, durationB);

  return weight ?? dayjs(durationA).diff(dayjs(durationB));
};

const sortByPrice = (eventA, eventB) => {
  compareNumbers(eventA.price, eventB.price);
};

export { getRandomArrayElement, getRandomInteger, getArrayFromRandomElements, dateFormat, humanizeDate, getDifferenceInTime, capitalizeWords, isEscapeKey, updateItem, sortByTime, sortByPrice, sortByDay };
