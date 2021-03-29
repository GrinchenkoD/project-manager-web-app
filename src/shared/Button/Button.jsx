import React from 'react';
import css from './Button.module.css';

export function Button({ name, type, onClick }) {
  return (
    <>
      <button className={css.btn} type={type} onClick={onClick}>
        {name}
      </button>
    </>
  );
}
