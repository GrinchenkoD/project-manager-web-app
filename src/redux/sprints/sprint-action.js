import { createAction } from '@reduxjs/toolkit';

// =========  add sprint  ========
const addSprintRequest = createAction('sprints/add-sprint-request');
const addSprintSuccess = createAction('sprints/add-sprint-success');
const addSprintError = createAction('sprints/add-sprint-error');

// =========  add contributor  ========
// const addContributorRequest = createAction('project/add-contributor-request');
// const addContributorSuccess = createAction('project/add-contributor-success');
// const addContributorError = createAction('project/add-contributor-error');

//=========== get sprint ==============
const getSprintRequest = createAction('sprints/get-sprint-request');
const getSprintSuccess = createAction('sprints/get-sprint-success');
const getSprintError = createAction('sprints/get-sprint-error');

//=========== delete sprint ==============
const deleteSprintRequest = createAction('sprints/delete-sprint-request');
const deleteSprintSuccess = createAction('sprints/delete-sprint-success');
const deleteSprintError = createAction('sprints/delete-sprint-error');

// =============== patch sprint ==================
const changeSprintTitleRequest = createAction('sprints/patch-title-request');
const changeSprintTitleSuccess = createAction('sprints/patch-title-success');
const changeSprintTitleError = createAction('sprints/patch-title-error');

export {
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  //   addContributorRequest,
  //   addContributorSuccess,
  //   addContributorError,
  getSprintRequest,
  getSprintSuccess,
  getSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  changeSprintTitleRequest,
  changeSprintTitleSuccess,
  changeSprintTitleError,
};
