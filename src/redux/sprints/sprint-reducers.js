import { createReducer } from '@reduxjs/toolkit';
import {
  addSprintSuccess,
  getSprintSuccess,
  deleteSprintSuccess,
  addTaskSuccess,
} from './sprint-action';

const sprintsReducer = createReducer([], {
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [getSprintSuccess]: (_, { payload }) => (payload ? [...payload] : []),
  [deleteSprintSuccess]: (state, { payload }) => {
    return [...state.filter(sprint => sprint._id !== payload)];
  },
});

export default sprintsReducer;
