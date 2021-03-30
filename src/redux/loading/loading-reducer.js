import { createReducer } from '@reduxjs/toolkit';

import {
  addProjectRequest,
  addContributorRequest,
  getProjectRequest,
  deleteProjectRequest,
  changeProjectTitleRequest,
  addProjectSuccess,
  addProjectError,
  addContributorSuccess,
  addContributorError,
  getProjectSuccess,
  getProjectError,
  deleteProjectSuccess,
  deleteProjectError,
  changeProjectTitleSuccess,
  changeProjectTitleError,
} from '../projects/project-actions';

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

export default loadingReducer;
