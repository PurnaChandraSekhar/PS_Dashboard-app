import React from "react";
import { useField, ErrorMessage } from "formik";

import './FormInput.css'

const FormInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const { label } = props;

  return (
    <div className="my-input">
      <label htmlFor={field.name}>{label}</label>
      <input className={`${meta.touched && meta.error && `error`}`} {...field} {...props}/>
      <ErrorMessage component="div" name={field.name} className="error-text" />
    </div>
  );
};

export default FormInput;
