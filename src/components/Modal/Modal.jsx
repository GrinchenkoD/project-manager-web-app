import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import CustomConfirm from './CustomConfirm';

function Modal() {
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
