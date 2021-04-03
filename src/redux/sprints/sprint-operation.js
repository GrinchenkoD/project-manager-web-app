import axios from 'axios';
import { refreshTemplate } from 'redux/refreshToken/refreshTemplate';
import {
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  getSprintRequest,
  getSprintSuccess,
  getSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
} from './sprint-action';

//  https://sbc-backend.goit.global
// axios.defaults.baseURL = 'https://sbc-backend.goit.global';

// ======= post project=======
//     /project

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addSprint = (projectId, sprint) => async (dispatch, getState) => {
  dispatch(addSprintRequest());
  const {
    auth: { token: accessToken },
  } = getState();
  token.set(accessToken);
  try {
    const { data } = await axios.post(`/sprint/${projectId}`, sprint);
    const id = data.id;
    delete data.id;
    dispatch(addSprintSuccess({ ...data, _id: id }));
  } catch (error) {
    dispatch(addSprintError(error.message));
     refreshTemplate(()=>addSprint(projectId, sprint), error, dispatch)
  }
};

const getSprint = projectId => async (dispatch, getState) => {
  dispatch(getSprintRequest());
  const {
    auth: { token: accessToken },
  } = getState();
  token.set(accessToken);
  try {
    const { data } = await axios.get(`/sprint/${projectId}`);
    dispatch(getSprintSuccess(data.sprints));
  } catch (error) {
    dispatch(getSprintError(error.message));
    refreshTemplate(()=>getSprint(projectId), error, dispatch)
  }
};

const deleteSprint = id => async dispatch => {
  dispatch(deleteSprintRequest());
  try {
    await axios.delete(`/sprint/${id}`);
    dispatch(deleteSprintSuccess(id));
  } catch (error) {
    dispatch(deleteSprintError(error.message));
    refreshTemplate(()=>deleteSprint(id), error, dispatch)
  }
};

export { addSprint, getSprint, deleteSprint };
