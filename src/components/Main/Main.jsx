import PrivateRoute from 'components/routes/PrivateRoute';
import PublicRoute from 'components/routes/PublicRoute';
import React from 'react';
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
