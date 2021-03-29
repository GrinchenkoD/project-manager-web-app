import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addProjectRequest,
  addProjectSuccess, //
  addProjectError,
  addContributorRequest,
  addContributorSuccess,
  addContributorError,
  getProjectRequest,
  getProjectSuccess, //
  getProjectError,
  deleteProjectRequest,
  deleteProjectSuccess, //
  deleteProjectError,
  changeProjectTitleRequest,
  changeProjectTitleSuccess,
  changeProjectTitleError,
} from './project-actions.js';

const projectsReducer = createReducer([], {
  [getProjectRequest]: (_, { payload }) => [...payload],
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, payload) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const loadingReducer = createReducer(false, {
  [addProjectRequest]: () => true,
  [addContributorRequest]: () => true,
  [getProjectRequest]: () => true,
  [deleteProjectRequest]: () => true,
  [changeProjectTitleRequest]: () => true,

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
});

const cleanError = () => null;
const handleError = (_, action) => action.payload;

const errorReducer = createReducer(null, {
  [addProjectRequest]: cleanError,
  [addContributorRequest]: cleanError,
  [getProjectRequest]: cleanError,
  [deleteProjectRequest]: cleanError,
  [changeProjectTitleRequest]: cleanError,

  [addProjectError]: handleError,
  [addContributorError]: handleError,
  [getProjectError]: handleError,
  [deleteProjectError]: handleError,
  [changeProjectTitleError]: handleError,
});

const allProjectsReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  projects: projectsReducer,
});

export default allProjectsReducer;
