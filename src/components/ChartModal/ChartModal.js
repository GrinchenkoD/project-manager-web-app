import React, { Component } from 'react';
import Qwert from '../Chart/Qwert';
import styles from './ChartModal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      this.changeScrollStyle();
    }
  };
  handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
      this.changeScrollStyle();
    }
  };
  handleClickOnCloseBtn = e => {
    e.target.nodeName === 'BUTTON' && this.props.onClose();
    this.changeScrollStyle();
  };
  changeScrollStyle = () => {
    document.querySelector('body').style.overflow = 'unset';
  };
  render() {
    return (
      <div className={styles.overlay} onClick={this.handleBackDrop}>
        <div className={styles.modal}>
          {/* <Chart /> */}
          <Qwert params={this.props.params} />
          <button
            type="button"
            className={styles.closeGraphicBtn}
            onClick={this.handleClickOnCloseBtn}
          ></button>
        </div>
      </div>
    );
  }
}

export default Modal;
