import axios from 'axios';
import { refreshCurrentToken } from './refreshToken-operations';

export const token = {
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const refreshTemplate = async (callback, error, dispatch) => {
  if (error.response?.status === 401 || error.response?.status === 404) {
    try {
      await dispatch(refreshCurrentToken());
      dispatch(callback());
    } catch (error) {
      token.unset();
    }
  }
};

export { refreshTemplate };
