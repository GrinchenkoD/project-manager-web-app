import { createSelector } from '@reduxjs/toolkit';
import db from '../../pages/TasksPage/db.json';

const getToken = state => state;
const getTasks = state => state;
// const getFilter = state => state.tasks.filter;

// const getVisibleTasks = createSelector(getFilter, getTasks, (filter, tasks) =>
//   tasks.filter(item => item.title.toLowerCase().includes(filter.toLowerCase())),
// );

export const tasksSelector = state => state;
export const itemsSelector = state => tasksSelector(state).items;

const list = db.tasks.items;

export const items = db.tasks.items;

export const chartDaysSelector = list[0].hoursWastedPerDay.map(
  task => task.currentDay,
);

export const hoursPlannedSelector = list
  .map(task => Number(task.hoursPlanned))
  .reduce((acc, taskValue) => {
    return (acc += taskValue);
  }, 0);

export const sumHoursWastedSelector = list
  .map(task => Number(task.hoursWasted))
  .reduce((acc, taskValue) => {
    return (acc += taskValue);
  }, 0);

export const sprintDurationSelector = list[0].hoursWastedPerDay.length;

// export const sprintDurationSelector = (state) =>
//   itemsSelector(state)[0].hoursWastedPerDay.length;

// export const qwer = db.tasks.items;
//  export const hoursPlannedSelector = createSelector([itemsSelector], (items) =>
//   items
//     .map((task) => Number(task.hoursPlanned))
//     .reduce((acc, taskValue) => {
//       return (acc += taskValue);
//     }, 0)
// );

// export const sumHoursWastedSelector = createSelector([itemsSelector], (items) =>
//   items
//     .map((task) => Number(task.hoursWasted))
//     .reduce((acc, taskValue) => {
//       return (acc += taskValue);
//     }, 0)
// );

// export const chartDaysSelector = createSelector([itemsSelector], (items) =>
//   items[0].hoursWastedPerDay.map((task) => task.currentDay)
// );

export { getToken, getTasks };
