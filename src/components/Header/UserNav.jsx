import React from 'react';
import style from './Header.module.css';
import logo from '../../icons/Header/Logo.svg';
import { authSelectors } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';

export default function UserNav() {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const OnLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={style.headerbg}>
        <a href="/" className={style.logoimg}>
          <img className={style.logo2img} src={logo} alt="" />
        </a>
        <div className={style.user_cont}>
          <span className={style.name_contx}>{email}</span>
          <button className={style.headerButton} onClick={OnLogOut}>
            <p className={style.buttonText}>Вийти</p>
          </button>
        </div>
      </div>
    </>
  );
}
