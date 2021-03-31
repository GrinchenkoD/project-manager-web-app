import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import Main from '../Main/Main';
import Header from 'components/Header/Header';
// import Chart from 'components/Chart/Chart';
import ChartModal from 'components/ChartModal/ChartModal';
// import RegistrationPage from '../../pages/RegistrationPage';
// import AuthBackground from 'components/AuthBackground/AuthBackground';
// import Auth from 'pages/authentification/authentification';
import sprite from '../Chart/analytics.svg';

const App = function () {
  const history = useHistory();
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/registration');
    }
  }, [history]);
  return (
    <div>
      <Header />
      <Main />
      {/* < Chart /> */}
      <button onClick={() => setIsOpenModal(true)}>
        <svg>
          <use href={sprite + '#icon-analytics' }/>
        </svg>
      </button>
      {isOpenModal && <ChartModal onClose={() => setIsOpenModal(false) }/>}
    </div>
  );
};

export default App;
