import dayjs from 'dayjs';
import { FilterType } from '../const';

// eslint-disable-next-line no-undef
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
dayjs.extend(isSameOrBefore);

// eslint-disable-next-line no-undef
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
dayjs.extend(isSameOrAfter);

const isEventInPresent = (dateStart, dateEnd) => {
  return dayjs().isSameOrAfter(dateStart, 'D') && dayjs().isSameOrBefore(dateEnd, 'D');
};

const isEventInPast = (dateEnd) => {
  return dateEnd && dayjs().isAfter(dateEnd, 'D');
};

const isEventInFuture = (dateStart) => {
  return dateStart && dayjs().isBefore(dateStart, 'D');
};

const filterEvents = {
  [FilterType.EVERYTHING]: (events) => events,
  [FilterType.FUTURE]: (events) => events.filter((event) => isEventInFuture(event.dateFrom)),
  [FilterType.PRESENT]: (events) => events.filter((event) => isEventInPresent(event.dateFrom, event.dateTo)),
  [FilterType.PAST]: (events) => events.filter((event) => isEventInPast(event.dateTo)),
};

export { isEventInPresent, isEventInPast, isEventInFuture, filterEvents };
