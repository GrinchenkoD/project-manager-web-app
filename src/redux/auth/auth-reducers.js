import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
} from './auth-actions';
const initialUserState = { email: null, id: null, projects: [] };
const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => {
    return payload;
  },
  [loginSuccess]: (_, { payload }) => {
    return payload.data;
  },
});
const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => {
    return payload.accessToken;
  },
  [registerError]: () => null,
  [loginError]: () => null,
});
const isAuthentificated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
});
const authReducer = combineReducers({ user, token, isAuthentificated });
export default authReducer;
