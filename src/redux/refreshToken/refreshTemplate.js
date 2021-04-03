import axios from 'axios';
import { refreshCurrentToken } from './refreshToken-operations';

const token = {
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const refreshTemplate = async (callback, error, dispatch) => {
  if (error.response?.status >= 400 && error.response?.status <= 500) {
    try {
      await dispatch(refreshCurrentToken());
      dispatch(callback());
    } catch (error) {
      token.unset();
    }
  }
};

export { refreshTemplate };
