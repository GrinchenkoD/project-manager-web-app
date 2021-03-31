import axios from 'axios';
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

const addSprint = (projectId, sprint) => async dispatch => {
  dispatch(addSprintSuccess());

  try {
    const { data } = await axios.post(`/sprint/${projectId}`, sprint);
    dispatch(addSprintSuccess(data));
  } catch (error) {
    dispatch(addSprintError(error));
  }
};


// =========get project========
//     /project
// const getProject = () => async (dispatch, getState) => {
//   const {
//     auth: { token: accessToken },
//   } = getState();
//   token.set(accessToken);
//   dispatch(getProjectRequest());

//   try {
//     const { data } = await axios.get('/project');
//     dispatch(getProjectSuccess(data));
//   } catch (error) {
//     dispatch(getProjectError(error));
//   }
// };

// ======== post contributor=========
//      /project/contributor/{projectId}

// const addContributor = (projectId, contributor) => async dispatch => {
//   dispatch(addContributorRequest());

//   try {
//     const { data } = await axios.post(
//       `/project/contributor/${projectId}`,
//       contributor,
//     );
//     dispatch(addContributorSuccess(data));
//   } catch (error) {
//     dispatch(addContributorError(error));
//   }
// };

// ========patch title==========

//    /project/title/{projectId}

// const patchTitle = (projectId, title) => async dispatch => {
//   dispatch(changeProjectTitleRequest());

//   try {
//     const responce = await axios.patch(`/project/title/${projectId}`, title);
//     dispatch(changeProjectTitleSuccess());
//   } catch (error) {
//     dispatch(changeProjectTitleError(error));
//   }
// };

//=========delete project==========
//    /project/{projectId}
// const deleteProject = id => async dispatch => {
//   dispatch(deleteProjectRequest());
//   try {
//     await axios.delete(`/project/${id}`);
//     dispatch(deleteProjectSuccess(id));
//   } catch (error) {
//     dispatch(deleteProjectError(error));
//   }
// };

export { addSprint };