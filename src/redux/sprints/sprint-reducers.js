import { createReducer } from '@reduxjs/toolkit';
import { logoutSuccess } from 'redux/auth/auth-actions.js';
import { refreshTokenError } from 'redux/refreshToken/refreshToken-actions.js';
import {
  addSprintSuccess,
  getSprintSuccess,
  deleteSprintSuccess,
  changeSprintTitleSuccess,
} from './sprint-action';

const sprintsReducer = createReducer([], {
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

  [refreshTokenError]: () => [],
  [logoutSuccess]: () => [],
});

export default sprintsReducer;
