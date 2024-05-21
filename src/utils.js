import dayjs from 'dayjs';

const dateFormat = {
  DATE: 'DD/MM/YYTHH:mm',
  DATE_AND_TIME: 'YYYY-MM-DDTHH:mm',
  MONTH_DAY: 'MMMM DD',
  HOURS: 'THH:mm',
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
const humanizeDate = (eventDate, format) => {
  return eventDate ? dayjs(eventDate).format(format) : '';
};

const getDifferenceInTime = (date1, date2) => date2.getTime() - date1.getTime();

const capitalizeWords = (str) => str.replace(/\b\w/g, c => c.toUpperCase());

export { getRandomArrayElement, getRandomInteger, getArrayFromRandomElements, dateFormat, humanizeDate, getDifferenceInTime, capitalizeWords };
