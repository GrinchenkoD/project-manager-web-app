import { lazy } from 'react';

const mainRoutes = [
  {
    name: 'registration',
    path: '/registration',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/registrationPage/RegistrationPage' /*webpackChunkName: "registration-page" */
      ),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/loginPage/LoginPage' /*webpackChunkName: "login-page" */
      ),
    ),
    private: false,
    restricted: true,
  },
  {
    name: 'projects',
    path: '/projects',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/ProjectsPage/ProjectsPage' /*webpackChunkName: "projects-page" */
      ),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'projects',
    path: '/projects/:projectId',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/sprintsPage/SprintsPage' /*webpackChunkName: "sprints-page" */
      ),
    ),
    private: true,
    restricted: false,
  },
  {
    name: 'projects',
    path: '/projects/:projectId/sprints/:sprintId',
    exact: true,
    component: lazy(() =>
      import(
        '../pages/TasksPage/TasksPage' /*webpackChunkName: "tasks-page" */
      ),
    ),
    private: true,
    restricted: false,
  },
];
export default mainRoutes;
