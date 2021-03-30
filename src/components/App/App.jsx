
import React from 'react';
import Register from '../../pages/registrationPage/RegistrationPage';
import AuthBackground from 'pages/registrationPage/AuthBackground';
import Modal from '../Madal/Modal';
import Header from 'components/Header/Header';


const App = function () {
  return (<div>
            <Header/>
          <Register />
            <AuthBackground/>
            <Modal />
          </div>);
};

export default App;
