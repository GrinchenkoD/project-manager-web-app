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

export default errorReducer;
