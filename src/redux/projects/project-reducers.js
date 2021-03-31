import { createReducer } from '@reduxjs/toolkit';
import {
  addProjectSuccess,
  addContributorSuccess,
  getProjectSuccess,
  deleteProjectSuccess,
  changeProjectTitleSuccess,
} from './project-actions.js';

const projectsReducer = createReducer([], {
  [getProjectSuccess]: (_, { payload }) => [...payload],
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) => [
    ...state.filter(project => project._id !== payload),
  ],
});

export default projectsReducer;
