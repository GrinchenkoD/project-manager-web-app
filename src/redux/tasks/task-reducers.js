import { createReducer } from '@reduxjs/toolkit';
import {
  addTaskSuccess,
  getTaskSuccess,
  deleteTaskSuccess,
  getTaskError,
} from './task-action';

const tasksReducer = createReducer([], {
  [addTaskSuccess]: (state, { payload }) => [...state, payload],
  [getTaskSuccess]: (_, { payload }) => (payload ? [...payload] : []),
  [getTaskError]: () => [],
  [deleteTaskSuccess]: (state, { payload }) => {
    return [...state.filter(task => task._id !== payload)];
  },
});

export default tasksReducer;
