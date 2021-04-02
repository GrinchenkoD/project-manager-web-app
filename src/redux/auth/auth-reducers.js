import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
} from './auth-actions';
const initialUserState = { email: null, id: null, projects: [] };
const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => {
    return payload;
  },
  [loginSuccess]: (_, { payload }) => {
    return payload.data;
  },
  [logoutSuccess]: () => null,
});
const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => {
    return payload.accessToken;
  },
  [registerError]: () => null,
  [loginError]: () => null,
  [logoutSuccess]: () => null,
});
const isAuthentificated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});
const authReducer = combineReducers({ user, token, isAuthentificated });
export default authReducer;
