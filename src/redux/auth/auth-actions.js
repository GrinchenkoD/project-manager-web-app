import { createAction } from '@reduxjs/toolkit';

// =========  register  ========
const registerRequest = createAction('auth/register-request');
const registerSuccess = createAction('auth/register-success');
const registerError = createAction('auth/register-error');
// =========  login  ========
const loginRequest = createAction('auth/login-request');
const loginSuccess = createAction('auth/login-success');
const loginError = createAction('auth/login-error');

export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
};
