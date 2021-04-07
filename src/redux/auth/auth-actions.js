import { createAction } from '@reduxjs/toolkit';

// =========  register  ========
const registerRequest = createAction('auth/register-request');
const registerSuccess = createAction('auth/register-success');
const registerError = createAction('auth/register-error');
// =========  login  ========
const loginRequest = createAction('auth/login-request');
const loginSuccess = createAction('auth/login-success');
const loginError = createAction('auth/login-error');
// =========  logout  ========
const logoutRequest = createAction('auth/logout-request');
const logoutSuccess = createAction('auth/logout-success');
const logoutError = createAction('auth/logout-error');


export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
};
