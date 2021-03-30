import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
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
    console.log(response.data);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const login = credential => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/auth/login', credential);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

// const logout = () => async dispatch => {
//   dispatch(logoutRequest());
//   try {
//     await axios.post('/auth/logout');
//     dispatch(logoutSuccess());
//   } catch (error) {
//     dispatch(logoutError(error.message));
//   }
// };

export { register, login };
