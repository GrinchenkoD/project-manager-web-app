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
import { refreshTokenSuccess, refreshTokenError } from 'redux/refreshToken/refreshToken-actions';



const initialUserState = { email: null, id: null, projects: [] };
const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => {
    return payload;
  },
  [loginSuccess]: (_, { payload }) => {
    return payload.data;
  },
  [logoutSuccess]: () => null,
   [refreshTokenError]:()=>null,
});
const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => {
    return payload.accessToken;
  },
  [registerError]: () => null,
  [loginError]: () => null,
  [logoutSuccess]: () => null,
  [refreshTokenSuccess]: (_, { payload }) => payload.newAccessToken,
   [refreshTokenError]:()=>null,
});

const refreshToken = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.refreshToken,
  [refreshTokenSuccess]: (_, { payload }) => payload.newRefreshToken,
  [refreshTokenError]:()=>null,
});


const sid = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.sid,
  [refreshTokenSuccess]: (_, { payload }) => payload.newSid,
   [refreshTokenError]:()=>null,
});

const isAuthentificated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
   [refreshTokenError]:()=>false,
});
const authReducer = combineReducers({ user, token,refreshToken,sid, isAuthentificated });
export default authReducer;
