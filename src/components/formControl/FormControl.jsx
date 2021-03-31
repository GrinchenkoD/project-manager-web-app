import { ErrorMessage } from "formik";
import React from "react";
import TextInput from "../../shared/TextInput/TextInput";
import styles from "./FormControl.module.css"

const FormControl = ({ label, ...props }) => {
  return (
      <div className={styles.container}>
        {/* <div className> */}
            <label htmlFor={props.id} className={styles.label}>
                {label}
            </label>
            <TextInput {...props} />
            <ErrorMessage
                name={props.name}
                className={styles.error}
                // component="small"
              />
        {/* </div> */}
    </div>
  );
};

export default FormControl;