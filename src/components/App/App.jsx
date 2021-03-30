import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Main from '../Main/Main';
import Header from 'components/Header/Header';
import Chart from 'components/Chart/Chart';
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
  
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
  return (
    <div>
      {/* <Header /> */}
      {/* <Main /> */}
      <div></div>
      <div style={styles}>
        < Chart />
      </div>
    </div>
  );
};

export default App;
