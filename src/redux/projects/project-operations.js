import axios from 'axios';
import { refreshTemplate } from 'redux/refreshToken/refreshTemplate';

import {
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  addContributorRequest,
  addContributorSuccess,
  addContributorError,
  getProjectRequest,
  getProjectSuccess,
  getProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  changeProjectTitleRequest,
  changeProjectTitleSuccess,
  changeProjectTitleError,
} from './project-actions';

// ======= post project=======

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addProject = project => async dispatch => {
  dispatch(addProjectRequest());

  try {
    const { data } = await axios.post('/project', project);
    const id = data.id;
    delete data.id;
    dispatch(addProjectSuccess({ ...data, _id: id }));
  } catch (error) {
  
    dispatch(addProjectError(error.message));
    refreshTemplate(()=>addProject(project), error, dispatch)
  }
};

// =========get projects========
//     /project
const getProject = () => async (dispatch, getState) => {
  const {
    auth: { token: accessToken },
  } = getState();
  token.set(accessToken);
  dispatch(getProjectRequest());

  try {
    const { data } = await axios.get('/project');
    dispatch(getProjectSuccess(data));
  } catch (error) {
    dispatch(getProjectError(error.message));
     refreshTemplate(getProject, error, dispatch)
  }
};

// ======== post contributor=========
//      /project/contributor/{projectId}

const addContributor = (projectId, contributor) => async dispatch => {
  dispatch(addContributorRequest());

  try {
    const { data } = await axios.patch(
      `/project/contributor/${projectId}`,
      contributor,
    );
    dispatch(addContributorSuccess({ members: data.newMembers, projectId }));
  } catch (error) {
    dispatch(addContributorError(error.message));
     refreshTemplate(()=>addContributor(projectId, contributor), error, dispatch)
  }
};

// ========patch title==========

//    /project/title/{projectId}

const patchTitle = (projectId, title) => async dispatch => {
  dispatch(changeProjectTitleRequest());

  try {
    await axios.patch(`/project/title/${projectId}`, { title });
    dispatch(changeProjectTitleSuccess({ projectId, title }));
  } catch (error) {
    dispatch(changeProjectTitleError(error.message));
     refreshTemplate(()=>patchTitle(projectId, title), error, dispatch)
  }
};

//=========delete project==========
//    /project/{projectId}
const deleteProject = id => async dispatch => {
  dispatch(deleteProjectRequest());
  try {
    await axios.delete(`/project/${id}`);
    dispatch(deleteProjectSuccess(id));
  } catch (error) {
    dispatch(deleteProjectError(error.message));
    refreshTemplate(()=>deleteProject(id), error, dispatch)
  }
};

export { addProject, getProject, addContributor, patchTitle, deleteProject };
