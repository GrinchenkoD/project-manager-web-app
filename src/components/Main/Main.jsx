import React from 'react';
import { Route, Switch } from 'react-router-dom';
import mainRoutes from '../../routes/routes';

export default function Main() {
  return (
    <>
      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </>
  );
}
