import { createSelector } from "@reduxjs/toolkit";

const getToken = state => state;
const getTasks = state => state;

export const tasksSelector = state => state;
export const itemsSelector = state => tasksSelector(state).items;

 export const hoursPlannedSelector = createSelector([itemsSelector], (items) =>
  items
    .map((task) => Number(task.hoursPlanned))
    .reduce((acc, taskValue) => {
      return (acc += taskValue);
    }, 0)
);

export { getToken, getTasks};
