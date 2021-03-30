import React from 'react';
import style from './Header.module.css'
import logo from '../../icons/Header/Logo.svg'

export default function AuthNav() {
  const goit = 'https://goit.ua/'
  return (
    <div className={style.headerbg}>
      <a href={goit} className={style.logoimg}><img src={logo}alt=""/></a>
    </div>
  );
}
