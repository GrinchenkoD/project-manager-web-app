import { createAction } from '@reduxjs/toolkit';

// =========  add task  ========
const addTaskRequest = createAction('sprints/add-task-request');
const addTaskSuccess = createAction('sprints/add-task-success');
const addTaskError = createAction('sprints/add-task-error');

//=========== get task ==============

const getTaskRequest = createAction('sprints/get-task-request');
const getTaskSuccess = createAction('sprints/get-task-success');
const getTaskError = createAction('sprints/get-task-error');

//=========== delete task ==============
const deleteTaskRequest = createAction('sprints/delete-task-request');
const deleteTaskSuccess = createAction('sprints/delete-task-success');
const deleteTaskError = createAction('sprints/delete-task-error');

export {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  getTaskRequest,
  getTaskSuccess,
  getTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
};
