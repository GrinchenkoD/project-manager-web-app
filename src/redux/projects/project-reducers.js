import { createReducer } from '@reduxjs/toolkit';
import {
  addProjectSuccess,
  getProjectSuccess,
  deleteProjectSuccess,
  changeProjectTitleSuccess,
  addContributorSuccess,
} from './project-actions.js';

const projectsReducer = createReducer([], {
  [getProjectSuccess]: (_, { payload }) => [...payload],
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) => [
    ...state.filter(project => project._id !== payload),
  ],
  [addContributorSuccess]: (state, { payload }) => [...state, payload],
  [changeProjectTitleSuccess]: (state, { payload }) => {
    const index = state.findIndex(item => item._id === payload.projectId);
    const item = state[index];
    return [
      ...state.slice(0, index),
      { ...item, title: payload.title },
      ...state.slice(index + 1),
    ];
  },
});

export default projectsReducer;
