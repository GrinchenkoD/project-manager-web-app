import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Main from '../Main/Main';
import Header from 'components/Header/Header';
import RegistrationPage from '../../pages/RegistrationPage';

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

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 0760206c130762efd17553330ee0297791dad832
