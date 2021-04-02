import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Main from '../Main/Main';
import Header from 'components/Header/Header';
<<<<<<< HEAD
import Chart from 'components/Chart/Chart';
import ChartModal from 'components/ChartModal/ChartModal';
=======
// import Chart from 'components/Chart/Chart';
>>>>>>> 1df7dbacc4a07d91f7c86353bf1e2f10e45acafb
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
<<<<<<< HEAD
      {/* <Header />
      <Main /> */}
      {/* < Chart /> */}
      <button onClick={() => setIsOpenModal(true)}>
        <svg>
          <use href={sprite + '#icon-analytics' }/>
        </svg>
      </button>
      {isOpenModal && <ChartModal onClose={() => setIsOpenModal(false) }/>}
=======
      <Header />
      <Main />
>>>>>>> 1df7dbacc4a07d91f7c86353bf1e2f10e45acafb
    </div>
  );
};

export default App;
