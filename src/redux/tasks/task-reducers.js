import { createReducer } from '@reduxjs/toolkit';
import {
  addTaskSuccess,
  getTaskSuccess,
  deleteTaskSuccess,
  getTaskError,
  addHoursWastedSuccess,

} from './task-action';

const tasksReducer = createReducer([], {
  [addTaskSuccess]: (state, { payload }) => [...state, payload],
  [getTaskSuccess]: (_, { payload }) => (payload ? [...payload] : []),
  [getTaskError]: () => [],
  [deleteTaskSuccess]: (state, { payload }) => {
    return [...state.filter(task => task._id !== payload)];
  },
  [addHoursWastedSuccess]: (state, { payload }) => [
    ...state.map(task =>
      task._id === payload.taskId
        ? { ...task, hoursWasted: [...payload.hoursWasted] }
        : task,
    ),
  ],
});

export default tasksReducer;
