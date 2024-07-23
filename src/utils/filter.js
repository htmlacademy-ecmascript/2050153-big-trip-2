import dayjs from 'dayjs';

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

export { isEventInPresent, isEventInPast, isEventInFuture };
