import axios from 'axios';

import { refreshTokenRequest, refreshTokenSuccess, refreshTokenError } from './refreshToken-actions';

const token = {
  set(refreshToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const refreshCurrentToken = () => async (dispatch, getState) => {
    
  const {
    auth: { refreshToken, sid},
  } = getState();
  token.set(refreshToken);
    dispatch(refreshTokenRequest());
    

  try {
      const { data } = await axios.post('/auth/refresh', { sid });
     
      dispatch(refreshTokenSuccess(data));
      token.set(data.newAccessToken);
  } catch (error) {
     
      dispatch(refreshTokenError(error.message));
      throw new Error(error.message)
  }
};

export {refreshCurrentToken}