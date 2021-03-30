import { Component } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/projects',
  ...routeProps
}) {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = false;
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

// render={props => <Component {...props} />}
