import React from 'react';
// import {useSelector, useDispatch} from 'react-redux'
// import {authSelectors} from 'redux/auth';
import style from './Header.module.css';
import logo from '../../icons/Header/Logo.svg';
import logoutImg from '../../icons/Header/LogOut.svg';
import secImg from '../../icons/Header/SecondLogOut.svg';

export default function UserNav() {
  const email = 'sdsad@gmail.com';
  const goit = 'https://goit.ua/'
  return (
    <>
      <div className={style.headerbg}>
        <a href={goit} className={style.logoimg}><img src={logo}alt=""/></a>
        <div className={style.user_cont}>
          <span className={style.name_contx}>{email}</span>
          <object className={style.outImg} data={logoutImg}></object>
          <object className={style.secOutImg} data={secImg}></object>
          <button className={style.tb_text}>Log Out</button>
        </div>
      </div>
    </>
  );
}
