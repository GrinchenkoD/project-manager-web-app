import { createAction} from '@reduxjs/toolkit'

// =========  add project  ========
const addSprintRequest = createAction('sprints/add-sprint-request');
const addSprintSuccess = createAction('sprints/add-sprint-success');
const addSprintError = createAction('sprints/add-sprint-error');

// =========  add contributor  ========
// const addContributorRequest = createAction('project/add-contributor-request');
// const addContributorSuccess = createAction('project/add-contributor-success');
// const addContributorError = createAction('project/add-contributor-error');

//=========== get project ==============

const getSprintRequest = createAction('project/get-sprint-request');
const getSprintSuccess = createAction('project/get-sprint-success');
const getSprintError = createAction('project/get-sprint-error');

//=========== delete contact ==============
const deleteSprintRequest = createAction('project/delete-sprint-request');
const deleteSprintSuccess = createAction('project/delete-sprint-success');
const deleteSprintError = createAction('project/delete-sprint-error');
// =============== patch contact ==================

// const changeProjectTitleRequest = createAction('project/patch-title-request');
// const changeProjectTitleSuccess = createAction('project/patch-title-success');
// const changeProjectTitleError = createAction('project/patch-title-error');

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
//   changeProjectTitleRequest,
//   changeProjectTitleSuccess,
//   changeProjectTitleError,
};