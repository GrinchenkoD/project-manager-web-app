import { createAction } from '@reduxjs/toolkit';

const refreshTokenRequest = createAction('refreshToken/refresh-token-request');
const refreshTokenSuccess = createAction('refreshToken/refresh-token-success');
const refreshTokenError = createAction('refreshToken/refresh-token-error');

export {refreshTokenRequest, refreshTokenSuccess, refreshTokenError}