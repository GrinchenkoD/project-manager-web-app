import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from './auth-actions';
import {
  refreshTokenSuccess,
  refreshTokenError,
  refreshTokenRequest,
} from '../refreshToken/refreshToken-actions.js';

const initialUserState = { email: null, id: null };
const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => {
    return { email: payload.email, id: payload.id };
  },
  [loginSuccess]: (_, { payload }) => {
    return { email: payload.data.email, id: payload.data.id };
  },
  [logoutSuccess]: () => null,
  [refreshTokenError]: () => null,
});
const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => {
    return payload.accessToken;
  },
  [registerError]: () => null,
  [loginError]: () => null,
  [logoutSuccess]: () => null,
  [refreshTokenSuccess]: (_, { payload }) => payload.newAccessToken,
  [refreshTokenError]: () => null,
});

const refreshToken = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.refreshToken,
  [refreshTokenSuccess]: (_, { payload }) => payload.newRefreshToken,
  [refreshTokenError]: () => null,
  [logoutSuccess]: () => null,
});

const sid = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.sid,
  [refreshTokenSuccess]: (_, { payload }) => payload.newSid,
  [refreshTokenError]: () => null,
  [logoutSuccess]: () => null,
});

const isAuthentificated = createReducer(false, {
  [loginSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [refreshTokenError]: () => false,
});

// ===========================================================
const authLoading = createReducer(false, {
  [registerRequest]: () => true,
  [loginRequest]: () => true,
  [logoutRequest]: () => true,
  [refreshTokenRequest]: () => true,

  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [refreshTokenSuccess]: () => false,
  [refreshTokenError]: () => false,
});

const cleanError = () => false;
const handleError = (_, action) => action.payload;
const authError = createReducer(false, {
  [registerRequest]: cleanError,
  [loginRequest]: cleanError,
  [logoutRequest]: cleanError,
  [refreshTokenRequest]: cleanError,

  [registerError]: handleError,
  [loginError]: handleError,
  [logoutError]: handleError,
  [refreshTokenError]: handleError,
});

const authReducer = combineReducers({
  user,
  token,
  refreshToken,
  sid,
  isAuthentificated,
  authLoading,
  authError,
});
export default authReducer;
