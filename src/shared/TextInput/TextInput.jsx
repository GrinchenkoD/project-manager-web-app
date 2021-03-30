import React from "react";
import { useField } from "formik";
import cn from "classnames";
import styles from "./TextInput.module.css"

const TextInput = ({ className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <input
      className={cn(
        `${styles.formControl}`,
        {
          "is-invalid": meta.error && meta.touched,
        },
        className
      )}
      {...props}
      {...field}
    />
  );
};

export default TextInput;