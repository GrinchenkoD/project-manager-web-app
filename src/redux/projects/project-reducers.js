import { createReducer } from '@reduxjs/toolkit';
import { logoutSuccess } from 'redux/auth/auth-actions.js';
import { refreshTokenError } from 'redux/refreshToken/refreshToken-actions.js';
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
  [addContributorSuccess]: (state, { payload }) => [
    ...state.map(project =>
      project._id === payload.projectId
        ? { ...project, members: [...payload.members] }
        : project,
    ),
  ],
  [changeProjectTitleSuccess]: (state, { payload }) => {
    const index = state.findIndex(item => item._id === payload.projectId);
    const item = state[index];
    return [
      ...state.slice(0, index),
      { ...item, title: payload.title },
      ...state.slice(index + 1),
    ];
  },
  [refreshTokenError]: () => [],
  [logoutSuccess]:()=>[],
  
});

export default projectsReducer;
