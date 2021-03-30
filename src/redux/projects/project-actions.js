import { createAction } from '@reduxjs/toolkit';

// =========  add project  ========
const addProjectRequest = createAction('project/add-project-request');
const addProjectSuccess = createAction('project/add-project-success');
const addProjectError = createAction('project/add-project-error');

// =========  add contributor  ========
const addContributorRequest = createAction('project/add-contributor-request');
const addContributorSuccess = createAction('project/add-contributor-success');
const addContributorError = createAction('project/add-contributor-error');

//=========== get project ==============

const getProjectRequest = createAction('project/get-project-request');
const getProjectSuccess = createAction('project/get-project-success');
const getProjectError = createAction('project/get-project-error');

//=========== delete contact ==============
const deleteProjectRequest = createAction('project/delete-project-request');
const deleteProjectSuccess = createAction('project/delete-project-success');
const deleteProjectError = createAction('project/delete-project-error');
// =============== patch contact ==================

const changeProjectTitleRequest = createAction('project/patch-title-request');
const changeProjectTitleSuccess = createAction('project/patch-title-success');
const changeProjectTitleError = createAction('project/patch-title-error');

export {
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
};
