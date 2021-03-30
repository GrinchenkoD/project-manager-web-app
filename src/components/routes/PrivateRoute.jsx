import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/auth-selectors';

export default function PrivateRoute({
  redirectTo = '/registration',
  ...routeProps
}) {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = false;
  return (
    <>{isLoggedIn ? <Route {...routeProps} /> : <Redirect to={redirectTo} />}</>
  );
}
