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

const capitalizeWords = (str) => str.replace(/\b\w/g, c => c.toUpperCase());

const isEscapeKey = (evt) => (evt).key === 'Escape';

/**
 * Function to getTotalEventPrice
 * Parametrs: event.basePrice, offers.price
 */
// function getTotalPrice (basePrice, offerPrices) {
//   let totalOfferesPrice = 0;

//   offerPrices.forEach((value) => totalOfferesPrice += +value);

//   const totalPrice = basePrice + totalOfferesPrice;
//   return totalPrice;
// }

export { getRandomArrayElement, getRandomInteger, getArrayFromRandomElements, isEscapeKey };
