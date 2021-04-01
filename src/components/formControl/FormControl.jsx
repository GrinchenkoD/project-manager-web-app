import { ErrorMessage } from "formik";
import React from "react";
import TextInput from "../../shared/TextInput/TextInput";
import { useField } from "formik";

import styles from "./FormControl.module.css"
import cn from "classnames";


const FormControl = ({ label,className, ...props }) => {
  const [field, meta] = useField(props);
  return (
      <div className={styles.container}>
   
      {/* <TextInput {...props} /> */}
           <label htmlFor={props.id} className={styles.label}>
              {label}
          </label>
        <input
          className={cn(
          `${styles.formControlInput}`,
          {
            "isInvalid": meta.error && meta.touched,
          },
        className
        )}
        {...props}
        {...field}
      />
       
   
      <ErrorMessage
          name={props.name}
          className={styles.error}
        />
    </div>
  );
};

export default FormControl;