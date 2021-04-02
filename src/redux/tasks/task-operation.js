import axios from 'axios';
import {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  getTaskRequest,
  getTaskSuccess,
  getTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
} from './task-action';

//  https://sbc-backend.goit.global
// axios.defaults.baseURL = 'https://sbc-backend.goit.global';

// ======= post task=======

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addTask = (sprintId, task) => async (dispatch, getState) => {
  dispatch(addTaskRequest());
  const {
    auth: { token: accessToken },
  } = getState();
  token.set(accessToken);
  try {
    const { data } = await axios.post(`/task/${sprintId}`, task);
    const id = data.id;
    delete data.id;
    dispatch(addTaskSuccess({ ...data, _id: id }));
  } catch (error) {
    dispatch(addTaskError(error));
  }
};

const getTask = sprintId => async (dispatch, getState) => {
  dispatch(getTaskRequest());
  const {
    auth: { token: accessToken },
  } = getState();
  token.set(accessToken);
  try {
    const { data } = await axios.get(`/task/${sprintId}`);
    dispatch(getTaskSuccess(data)); //if not works, check here
  } catch (error) {
    dispatch(getTaskError(error));
  }
};

const deleteTask = id => async dispatch => {
  dispatch(deleteTaskRequest());
  try {
    await axios.delete(`/task/${id}`);
    dispatch(deleteTaskSuccess(id));
  } catch (error) {
    dispatch(deleteTaskError(error));
  }
};

export { addTask, getTask, deleteTask };
