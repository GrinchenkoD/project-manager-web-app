import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  restricted = false,
  redirectTo = '/projects',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = !isLoggedIn && restricted;
  return (
    <>
      {shouldRedirect ? (
        <Route {...routeProps} />
      ) : (
        <Redirect to={redirectTo} />
      )}
    </>
  );
}
