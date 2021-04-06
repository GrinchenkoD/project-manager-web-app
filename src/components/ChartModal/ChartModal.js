import React, { Component, useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import styles from './ChartModal.module.css';
import { useParams } from 'react-router';


const Modal = ({onClose}) => {

  const params = useParams();
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  })

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log(e.code);
      onClose();
      changeScrollStyle();
    }
  };
  const handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
      changeScrollStyle();
    }
  };
  const handleClickOnCloseBtn = e => {
    e.target.nodeName === 'BUTTON' && onClose();
    changeScrollStyle();
  };
  const changeScrollStyle = () => {
    document.querySelector('body').style.overflow = 'unset';
  };
  return (
    <div className={styles.overlay} onClick={handleBackDrop}>
      <div className={styles.modal}>
        <Chart params={ params }/>
        <button
          type="button"
          className={styles.closeGraphicBtn}
          onClick={handleClickOnCloseBtn}
        ></button>
      </div>
    </div>
  );
}
export default Modal;

