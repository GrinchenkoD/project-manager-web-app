import { Component } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/auth/auth-selectors';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/projects',
  ...routeProps
}) {
  const isAuthentificated = useSelector(authSelectors.isAuthentificated)
  const shouldRedirect = !isAuthentificated && restricted;
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

