import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  logoutError,
  logoutRequest,
  logoutSuccess,
} from '../auth/auth-actions';
import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
} from '../refreshToken/refreshToken-actions.js';
import {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  addContributorRequest,
  addContributorSuccess,
  addContributorError,
  getProjectRequest,
  getProjectSuccess,
  getProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  changeProjectTitleRequest,
  changeProjectTitleSuccess,
  changeProjectTitleError,
} from './project-actions.js';

const projectsItems = createReducer([], {
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
  [logoutSuccess]: () => [],
});

const projectsLoading = createReducer(false, {
  [addProjectRequest]: () => true,
  [addContributorRequest]: () => true,
  [getProjectRequest]: () => true,
  [deleteProjectRequest]: () => true,
  [changeProjectTitleRequest]: () => true,
  [refreshTokenRequest]: () => true,
  [logoutRequest]: () => true,

  [addProjectSuccess]: () => false,
  [addProjectError]: () => false,
  [addContributorSuccess]: () => false,
  [addContributorError]: () => false,
  [getProjectSuccess]: () => false,
  [getProjectError]: () => false,
  [deleteProjectSuccess]: () => false,
  [deleteProjectError]: () => false,
  [changeProjectTitleSuccess]: () => false,
  [changeProjectTitleError]: () => false,

  [refreshTokenSuccess]: () => false,
  [refreshTokenError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});

const cleanError = () => false;
const handleError = (_, action) => action.payload;
const projectsError = createReducer(false, {
  [addProjectRequest]: cleanError,
  [addContributorRequest]: cleanError,
  [getProjectRequest]: cleanError,
  [deleteProjectRequest]: cleanError,
  [changeProjectTitleRequest]: cleanError,
  [refreshTokenRequest]: cleanError,

  [addProjectError]: handleError,
  [addContributorError]: handleError,
  [getProjectError]: handleError,
  [deleteProjectError]: handleError,
  [changeProjectTitleError]: handleError,
  [refreshTokenError]: handleError,
});

const projectsReducer = combineReducers({
  projectsItems,
  projectsLoading,
  projectsError,
});

export default projectsReducer;
