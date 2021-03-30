import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  redirectTo = '/registration',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>{isLoggedIn ? <Route {...routeProps} /> : <Redirect to={redirectTo} />}</>
  );
}
