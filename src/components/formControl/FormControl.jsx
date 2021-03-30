import { ErrorMessage } from "formik";
import React from "react";
import TextInput from "../../shared/TextInput/TextInput";

const FormControl = ({ label, ...props }) => {
  return (
    <div className="">
      {/* <label htmlFor={props.id} className="form-label">
        {label}
      </label> */}
      <TextInput {...props} />
      <ErrorMessage
        name={props.name}
        className="invalid-feedback d-block"
        component="small"
      />
    </div>
  );
};

export default FormControl;