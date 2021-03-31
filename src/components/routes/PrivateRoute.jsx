import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  redirectTo = '/registration',
  ...routeProps
}) {
  const isAuthentificated = useSelector(authSelectors.isAuthentificated);
  // const isAuthentificated = true;
  return (
    <>
      {isAuthentificated ? (
        <Route {...routeProps} />
      ) : (
        <Redirect to={redirectTo} />
      )}
    </>
  );
}
