import React from 'react';
import { Field, ErrorMessage } from 'formik'
import classes from '../Form.module.css'
function Input(props) {
  const { label, name, type, ...rest } = props
  return (
    <div className={classes.formControl}>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} >
        {(props) => {
          return <>
            <input id={name} type={type}{...props.field} />
          </>
        }}
      </Field>
      <ErrorMessage name={name} >
        {errorMsg => <div className={classes.error}>{errorMsg}</div>}
      </ErrorMessage>
    </div>
  );
}

export default Input;