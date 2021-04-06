import { createSelector } from '@reduxjs/toolkit';

const getToken = state => state;
const getTasksHoursWasted = state => state.tasks;
const tasksSelector = state => state.tasks.tasksItems;
const tasksErrorSelector = state => state.tasks.tasksError;
const tasksLoadingSelector = state => state.tasks.tasksLoading;
const getNowDay = state => state.tasks.currentDay;
const getTasks = state => state;

export const sprintDurationSelector = (state) =>
  tasksSelector(state)[0].hoursWastedPerDay.length;

 export const hoursPlannedSelector = createSelector([tasksSelector], (items) =>
  items
    .map((task) => Number(task.hoursPlanned))
    .reduce((acc, taskValue) => {
      return (acc += taskValue);
    }, 0)
);

export const sumHoursWastedSelector = createSelector([tasksSelector], (items) =>
  items
    .map((task) => Number(task.hoursWasted))
    .reduce((acc, taskValue) => {
      return (acc += taskValue);
    }, 0)
);

export const chartDaysSelector = createSelector([tasksSelector], (items) =>
  items[0].hoursWastedPerDay.map((task) => task.currentDay)
);

const sprintsSelector = (state) => state.sprints;
const itemsSprintsSelector = (state) => sprintsSelector(state).sprintsItems;
export const titleSprintsSelector = (state) => itemsSprintsSelector(state)[0].title;

export const findCurrentSprint = createSelector(
  [(state, params) => params, itemsSprintsSelector],
  (params, sprints) => sprints.find((el) => el._id === params.sprintId)
);

export {
  getToken,
  tasksSelector,
  tasksErrorSelector,
  tasksLoadingSelector,
  getTasksHoursWasted,
  getNowDay,
  getTasks,
};
