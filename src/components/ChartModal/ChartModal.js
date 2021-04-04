import React, { Component } from 'react';
import Chart from '../Chart/Chart';
import Qwert from '../Chart/Qwert';
import styles from './ChartModal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    }
  handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }
  render() {
    return (
      <>
        <div className={styles.Overlay} onClick={this.handleBackDrop}>
          <div className={styles.Modal}>
            <div className={styles.graphicWrapper}>
              {/* <Chart /> */}
              <Qwert />
            </div>
          </div>
        </div>
      </>
    );
  }
}