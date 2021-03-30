import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';

const App = function () {
  const isAuth = true;
  const history = useHistory();

  useEffect(() => {
    if (!isAuth) {
      history.push('/registration');
    }
  }, []);

  return (
    <div>
      <Main />
      <Modal />
    </div>
  );
};

export default App;
