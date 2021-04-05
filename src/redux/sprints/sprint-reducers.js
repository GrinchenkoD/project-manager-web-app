import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  getSprintRequest,
  getSprintSuccess,
  getSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  changeSprintTitleSuccess,
  getCurrentDay,
  setCurrentDay,
} from './sprint-action';
import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
} from '../refreshToken/refreshToken-actions.js';
import {
  logoutError,
  logoutRequest,
  logoutSuccess,
} from '../auth/auth-actions';

const sprintsItems = createReducer([], {
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [getSprintSuccess]: (_, { payload }) => (payload ? [...payload] : []),
  [deleteSprintSuccess]: (state, { payload }) => {
    return [...state.filter(sprint => sprint._id !== payload)];
  },
  [changeSprintTitleSuccess]: (state, { payload }) => {
    const index = state.findIndex(item => item._id === payload.sprintId);
    const item = state[index];
    return [
      ...state.slice(0, index),
      { ...item, title: payload.title },
      ...state.slice(index + 1),
    ];
  },
});
const sprintsLoading = createReducer(false, {
  [addSprintRequest]: () => true,
  [getSprintRequest]: () => true,
  [deleteSprintRequest]: () => true,
  [refreshTokenRequest]: () => true,
  [logoutRequest]: () => true,

  [addSprintSuccess]: () => false,
  [addSprintError]: () => false,
  [getSprintSuccess]: () => false,
  [getSprintError]: () => false,
  [deleteSprintSuccess]: () => false,
  [deleteSprintError]: () => false,
  [refreshTokenSuccess]: () => false,
  [refreshTokenError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});

const cleanError = () => false;
const handleError = (_, action) => action.payload;
const sprintsError = createReducer(false, {
  [addSprintRequest]: cleanError,
  [getSprintRequest]: cleanError,
  [deleteSprintRequest]: cleanError,
  [refreshTokenRequest]: cleanError,

  [addSprintError]: handleError,
  [getSprintError]: handleError,
  [deleteSprintError]: handleError,
  [refreshTokenError]: handleError,
});

const sprintsReducer = combineReducers({
  sprintsItems,
  sprintsLoading,
  sprintsError,
});

export default sprintsReducer;
