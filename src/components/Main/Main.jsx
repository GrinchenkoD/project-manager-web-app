import React from 'react';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import { Route, Switch } from 'react-router-dom';
import mainRoutes from '../../routes/routes';

export default function Main() {
  return (
    <>
      <Switch>
        {mainRoutes.map(route =>
          route.private ? (
            <PrivateRoute {...route} />
          ) : (
            <PublicRoute {...route} />
          ),
        )}
      </Switch>
    </>
  );
}
