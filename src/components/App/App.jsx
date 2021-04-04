import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Main from '../Main/Main';
import Header from 'components/Header/Header';

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
