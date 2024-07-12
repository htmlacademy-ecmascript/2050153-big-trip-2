import { SortType } from '../const.js';

const sortByTypes = {
  [SortType.DEFAULT]: { isDisabled: false, isChecked: true },
  [SortType.EVENT]: { isDisabled: true, isChecked: false },
  [SortType.TIME]: { isDisabled: false, isChecked: false },
  [SortType.PRICE]: { isDisabled: false, isChecked: false },
  [SortType.OFFERS]: { isDisabled: true, isChecked: false },
};

function generateSortTypes() {
  return Object.entries(sortByTypes).map(
    ([sortType, {isDisabled, isChecked }]) => ({
      type: sortType,
      isDisabled: isDisabled,
      isChecked: isChecked
    }));
}

export { generateSortTypes };
