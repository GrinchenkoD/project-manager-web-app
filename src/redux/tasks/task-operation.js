import axios from 'axios';
import { refreshTemplate } from 'redux/refreshToken/refreshTemplate';
import { date } from 'yup/lib/locale';
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
  addHoursWastedSuccess,
  addHoursWastedRequest,
  addHoursWastedError,
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
    dispatch(addTaskError(error.message));
    refreshTemplate(() => addTask(sprintId, task), error, dispatch);
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
    dispatch(getTaskSuccess(data));
  } catch (error) {
    dispatch(getTaskError(error.message));
    refreshTemplate(() => getTask(sprintId), error, dispatch);
  }
};

const deleteTask = id => async dispatch => {
  dispatch(deleteTaskRequest());
  try {
    await axios.delete(`/task/${id}`);
    dispatch(deleteTaskSuccess(id));
  } catch (error) {
    dispatch(deleteTaskError(error.message));
    refreshTemplate(() => deleteTask(id), error, dispatch);
  }
};

const addHoursWasted = (taskId, hoursWasted, currentDay) => async dispatch => {
  dispatch(addHoursWastedRequest());

  try {
    const { data } = await axios.patch(`/task/${taskId}`, {
      date: currentDay,
      hours: hoursWasted,
    });
    dispatch(
      addHoursWastedSuccess({
        currentDay: data.day.currentDay,
        singleHoursWasted: data.day.singleHoursWasted,
        hoursWasted: data.newWastedHours,
        taskId,
      }),
    );
  } catch (error) {
    dispatch(addHoursWastedError(error));
  }
};

export { addTask, getTask, deleteTask, addHoursWasted };
