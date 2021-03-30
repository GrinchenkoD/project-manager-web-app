import React/*,{ useState, useEffect }*/ from 'react';
// import { useHistory } from 'react-router';
// import Main from '../Main/Main';
// import Modal from '../Modal/Modal';
import Header from 'components/Header/Header';
// import style from './App.module.css'
import AuthBackground from 'components/AuthBackground/AuthBackground';
import Auth from 'pages/authentification/authentification';


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
    <Auth />
    <AuthBackground/>
    {/* <Main />
    <Modal /> */}
  </div>
  );
};

export default App;
