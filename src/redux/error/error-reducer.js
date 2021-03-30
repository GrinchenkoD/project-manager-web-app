import { createReducer } from '@reduxjs/toolkit';
import {
  addProjectRequest,
  addContributorRequest,
  getProjectRequest,
  deleteProjectRequest,
  changeProjectTitleRequest,
  addProjectError,
  addContributorError,
  getProjectError,
  deleteProjectError,
  changeProjectTitleError,
} from '../projects/project-actions';
import {
  registerRequest,
  registerError,
  loginRequest,
  loginError,
} from '../auth/auth-actions';

const cleanError = () => false;
const handleError = (_, action) => action.payload;

const errorReducer = createReducer(false, {
  [addProjectRequest]: cleanError,
  [addContributorRequest]: cleanError,
  [getProjectRequest]: cleanError,
  [deleteProjectRequest]: cleanError,
  [changeProjectTitleRequest]: cleanError,
  [registerRequest]: cleanError,
  [loginRequest]: cleanError,

  [addProjectError]: handleError,
  [addContributorError]: handleError,
  [getProjectError]: handleError,
  [deleteProjectError]: handleError,
  [changeProjectTitleError]: handleError,
  [registerError]: handleError,
  [loginError]: handleError,
});

export default errorReducer;
