import Register from '../../pages/registrationPage/RegistrationPage'
import Login from '../../pages/loginPage/LoginPage'
import React from 'react';
import Modal from '../Madal/Modal';
import AuthBackground from 'pages/registrationPage/AuthBackground';

const App = function () {
  return (<div>
            {/* <Modal /> */}
            {/* <Login /> */}
            <Register />
            <AuthBackground/>
          </div>);
};

export default App;
