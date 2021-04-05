import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  logoutError,
  logoutRequest,
  logoutSuccess,
} from '../auth/auth-actions.js';
import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
} from '../refreshToken/refreshToken-actions.js';
import {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  getTaskRequest,
  getTaskSuccess,
  getTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  addHoursWastedRequest,
  addHoursWastedSuccess,
  addHoursWastedError,
  getHoursWastedRequest,
  getHoursWastedSuccess,
  getHoursWastedError,
} from './task-action';

const tasksItems = createReducer([], {
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

const tasksLoading = createReducer(false, {
  [addTaskRequest]: () => true,
  [getTaskRequest]: () => true,
  [deleteTaskRequest]: () => true,
  [addHoursWastedRequest]: () => true,
  [getHoursWastedRequest]: () => true,
  [refreshTokenRequest]: () => true,
  [logoutRequest]: () => true,

  [addTaskSuccess]: () => false,
  [addTaskError]: () => false,
  [getTaskSuccess]: () => false,
  [getTaskError]: () => false,
  [deleteTaskSuccess]: () => false,
  [deleteTaskError]: () => false,

  [addHoursWastedSuccess]: () => false,
  [addHoursWastedError]: () => false,
  [getHoursWastedSuccess]: () => false,
  [getHoursWastedError]: () => false,

  [refreshTokenSuccess]: () => false,
  [refreshTokenError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});

const cleanError = () => false;
const handleError = (_, action) => action.payload;
const tasksError = createReducer(false, {
  [addTaskRequest]: cleanError,
  [getTaskRequest]: cleanError,
  [deleteTaskRequest]: cleanError,
  [addHoursWastedRequest]: cleanError,
  [getHoursWastedRequest]: cleanError,
  [refreshTokenRequest]: cleanError,

  [addTaskError]: handleError,
  [getTaskError]: handleError,
  [deleteTaskError]: handleError,
  [addHoursWastedError]: handleError,
  [getHoursWastedError]: handleError,
  [refreshTokenError]: handleError,
});

const tasksReducer = combineReducers({
  tasksItems,
  tasksLoading,
  tasksError,
});

export default tasksReducer;
