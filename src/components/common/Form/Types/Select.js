import React from 'react';
import { Field } from 'formik';

import classes from '../Form.module.css';

function Select(props) {
  const { label, name, options, ...rest } = props
  return (
    <div className={classes.formControl}>
      <label htmlFor={name}>{label}</label>
      <Field as='select' name={name} id={name} {...rest} >
        {
          options.map(option => {
            return (
              <option key={option.value} value={option.value} >{option.key}</option>
            )
          })
        }
      </Field>
    </div>
  );
}

export default Select;