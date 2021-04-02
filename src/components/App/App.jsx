import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Main from '../Main/Main';
import Header from 'components/Header/Header';
// import Chart from 'components/Chart/Chart';
// import RegistrationPage from '../../pages/RegistrationPage';
// import AuthBackground from 'components/AuthBackground/AuthBackground';
// import Auth from 'pages/authentification/authentification';
import sprite from '../Chart/analytics.svg';

const App = function () {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/registration');
    }
  }, [history]);
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
