// import { createSelector } from '@reduxjs/toolkit';
import db from '../../pages/TasksPage/db.json';

const getToken = state => state;
const getTasksHoursWasted = state => state.tasks;
const tasksSelector = state => state.tasks.tasksItems;
const tasksErrorSelector = state => state.sprints.tasksError;
const tasksLoadingSelector = state => state.sprints.tasksLoading;
const getNowDay = state => state.tasks.currentDay;
const getTasks = state => state;

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
//   tasksSelector(state)[0].hoursWastedPerDay.length;

// export const qwer = db.tasks.items;
//  export const hoursPlannedSelector = createSelector([tasksSelector], (items) =>
//   items
//     .map((task) => Number(task.hoursPlanned))
//     .reduce((acc, taskValue) => {
//       return (acc += taskValue);
//     }, 0)
// );

// export const sumHoursWastedSelector = createSelector([tasksSelector], (items) =>
//   items
//     .map((task) => Number(task.hoursWasted))
//     .reduce((acc, taskValue) => {
//       return (acc += taskValue);
//     }, 0)
// );

// export const chartDaysSelector = createSelector([tasksSelector], (items) =>
//   items[0].hoursWastedPerDay.map((task) => task.currentDay)
// );

export {
  getToken,
  tasksSelector,
  tasksErrorSelector,
  tasksLoadingSelector,
  getTasksHoursWasted,
  getNowDay,
  getTasks,
};
