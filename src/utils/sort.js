import dayjs from 'dayjs';

function getDuration(event) {
  return dayjs(event.dateTo).diff(dayjs(event.dateFrom));
}

function sortByDay(eventA, eventB) {
  return eventA.dateFrom - eventB.dateFrom;
}

function sortByTime(eventA, eventB) {
  const durationA = getDuration(eventA);
  const durationB = getDuration(eventB);

  return durationB - durationA;
}

function sortByPrice(eventA, eventB) {
  return eventA.basePrice - eventB.basePrice;
}

export { sortByDay, sortByTime, sortByPrice };
