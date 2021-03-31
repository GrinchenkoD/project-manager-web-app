import axios from 'axios';
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
    alert('Такий корыстувач вже зареєстрований!');
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
    alert('Помилка! Перевiрте даннi для входу!');
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
    dispatch(logoutSuccess());
    window.location.reload();
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export { register, login, logout };
