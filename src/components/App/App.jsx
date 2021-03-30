
import React,{ useState, useEffect } from 'react';
  import { useHistory } from 'react-router';
import Main from '../Main/Main';
import Register from '../../pages/registrationPage/RegistrationPage';
import AuthBackground from 'pages/registrationPage/AuthBackground';
import Modal from '../Modal/Modal';
import Header from 'components/Header/Header';


const App = function () {
//    const isAuth = true;
//   const history = useHistory();

//   useEffect(() => {
//     if (!isAuth) {
//       history.push('/registration');
//     }
//   }, []);
  
    return (
        <div>
            <Header/>
          <Register />
            <AuthBackground/>
          <Main />
            <Modal />
        </div>
    );
};

export default App;
