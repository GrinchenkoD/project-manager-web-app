// import { useDispatch, useSelector } from 'react-redux';
// import React, { useEffect, lazy } from 'react';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

// const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
// const SprintsPage = lazy(() => import('../pages/SprintsPage'));

// export default function App() {
//   const dispatch = useDispatch();
//   const isFetchingCurrentUser = useSelector(); //(authSelectors.getIsFetchingCurrent)
//   console.log(isFetchingCurrentUser);

//   //   useEffect(() => {
//   //     dispatch(authOperations.fetchCurrentUser());
//   //   }, [dispatch]);

//   return (
//     <>
//       <PublicRoute exact path="/" component={RegistrationPage} />
//       <PublicRoute
//         path="/registration"
//         component={RegistrationPage}
//         redirectTo="/"
//         restricted
//       />
//       <PublicRoute
//         path="/login"
//         component={LoginPage}
//         redirectTo="/"
//         restricted
//       />
//       <PrivateRoute
//         path="/projects"
//         component={ProjectsPage}
//         redirectTo="/login"
//       />
//       <PrivateRoute
//         path="/sprints"
//         component={SprintsPage}
//         redirectTo="/login"
//       />
//     </>
//   );
// }
import RegistrationPage from '../pages/RegistrationPage';
import ProjectsPage from '../pages/ProjectsPage';
import SprintsPage from '../pages/SprintsPage';

const mainRoutes = [
  {
    name: 'registration',
    path: '/registration',
    exact: true,
    component: RegistrationPage,
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: RegistrationPage,
  },
  {
    name: 'projects',
    path: '/projects',
    exact: true,
    component: ProjectsPage,
  },
  {
    name: 'projects',
    path: '/projects/:projectId',
    exact: true,
    component: ProjectsPage,
  },
  {
    name: 'projects',
    path: '/projects/:projectId/sprints',
    exact: true,
    component: ProjectsPage,
  },
  {
    name: 'projects',
    path: '/projects/:projectId/sprints/:sprintId',
    exact: true,
    component: ProjectsPage,
  },
];

export default mainRoutes;
