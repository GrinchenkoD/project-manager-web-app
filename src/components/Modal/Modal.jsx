import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import CustomConfirm from './CustomConfirm';
// import { Button } from '../../shared/Button/Button';
// import { Input } from '../../shared/Input/Input';

function Modal() {
  //   const openModal = () =>
  //     window.confirm('hello?') ? console.log('Lets do it!') : null;
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <React.Fragment>
      <div>
        <button onClick={() => setOpenConfirm(true)}>Open Modal</button>
      </div>
      <div>
        {openConfirm && (
          <CustomConfirm
            close={() => setOpenConfirm(false)}
            confirm={() => <Redirect to="/sprints" />}
            text={'Hello?'}
          />
        )}
      </div>
    </React.Fragment>
  );
}


export default Modal;
