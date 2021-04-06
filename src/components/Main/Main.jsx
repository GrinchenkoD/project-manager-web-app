import React, { Suspense } from 'react';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import { Switch } from 'react-router-dom';
import mainRoutes from '../../routes/routes';
import Loader from "../../shared/Loader/Loader";
import styles from "./Main.module.css"

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <Suspense fallback={<Loader/>}>
        <Switch>
          {mainRoutes.map(route =>
            route.private ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            ),
          )}
        </Switch>
      </Suspense>
    </div>
  );
}
