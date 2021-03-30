import React from 'react';
import { modalStyle } from './Modal.module.css';

function CustomConfirm(props) {
  return (
    <div style={modalStyle}>
      {props.text} <br />
      <button onClick={props.close}>Close</button>
      <button onClick={props.confirm}>Confirm</button>
    </div>
  );
}

export default CustomConfirm;
