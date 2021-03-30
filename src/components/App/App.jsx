import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Main from '../Main/Main';
import Header from 'components/Header/Header';
// import RegistrationPage from '../../pages/RegistrationPage';
// import AuthBackground from 'components/AuthBackground/AuthBackground';
// import Auth from 'pages/authentification/authentification';


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
