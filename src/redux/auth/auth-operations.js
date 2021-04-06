import axios from 'axios';
import { refreshTemplate } from 'redux/refreshToken/refreshTemplate';
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

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credential => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/auth/register', credential);
    dispatch(registerSuccess(response.data));
    const responseWithToken = await axios.post('/auth/login', credential);
    dispatch(loginSuccess(responseWithToken.data));
  } catch (error) {
    alert('Такой пользователь уже зарегистрирован!');
    dispatch(registerError(error.message));
  }
};

const login = credential => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/auth/login', credential);
    token.set(response.data.accessToken);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    alert('Ошибка! Проверьте данные для входа!');
    dispatch(loginError(error.message));
  }
};

const logout = () => async (dispatch, getState) => {
  dispatch(logoutRequest());
  const {
    auth: { token: accessToken },
  } = getState();
  token.set(accessToken);
  try {
    await axios.post('/auth/logout');
    token.unset();
    await dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
    refreshTemplate(logout, error, dispatch);
  }
};

export { register, login, logout };
