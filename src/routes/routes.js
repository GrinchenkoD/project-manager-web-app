import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import SprintsPage from '../pages/sprintsPage/SprintsPage';
import LoginPage from '../pages/loginPage/LoginPage';
import RegistrationPage from '../pages/registrationPage/RegistrationPage';

const mainRoutes = [
  {
    name: 'registration',
    path: '/registration',
    exact: true,
    component: RegistrationPage,
    private: false,
    restricted: true,
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: LoginPage,
    private: false,
    restricted: true,
  },
  {
    name: 'projects',
    path: '/projects',
    exact: true,
    component: ProjectsPage,
    private: true,
    restricted: false,
  },
  {
    name: 'projects',
    path: '/projects/:projectId',
    exact: true,
    component: SprintsPage,
    private: true,
    restricted: false,
  },
  {
    name: 'projects',
    path: '/projects/:projectId/sprints',
    exact: true,
    component: SprintsPage,
    private: true,
    restricted: false,
  },
  {
    name: 'projects',
    path: '/projects/:projectId/sprints/:sprintId',
    exact: true,
    component: SprintsPage,
    private: true,
    restricted: false,
  },
];

export default mainRoutes;
