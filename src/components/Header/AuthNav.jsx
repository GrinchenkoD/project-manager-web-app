import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
import logo from '../../icons/Header/Logo.svg'

export default function AuthNav() {
  return (
    <div className={style.headerbg}>
      <img className={style.logoimg} src={logo} />
    </div>
  );
}
