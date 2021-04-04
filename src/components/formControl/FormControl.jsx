import { ErrorMessage } from 'formik';
import React from 'react';
import { useField } from 'formik';

import styles from './FormControl.module.css';
import cn from 'classnames';

const FormControl = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.container}>
      {/* <TextInput {...props} /> */}
      <input
        className={cn(
          `${styles.formControlInput}`,
          {
            isInvalid: meta.error && meta.touched,
          },
          className,
        )}
        {...props}
        {...field}
      />
      <label htmlFor={props.id} className={styles.label}>
        {label}
      </label>

      <ErrorMessage name={props.name} className={styles.error} />
    </div>
  );
};

export default FormControl;
