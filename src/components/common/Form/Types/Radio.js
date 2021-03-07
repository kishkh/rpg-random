import React from 'react';
import { Field } from 'formik'
import classes from '../Form.module.css'
import ItemBox from '../../ItemBox/ItemBox';
function Radio(props) {
  const { label, name, options, formik, ...rest } = props
  return (
    <div className={classes.formControl}>
      <label>{label}</label>
      <div className={classes.radio}>
        
        <Field name={name} {...rest} >
          {
            ({ field }) => {
              return options.map((option, i) => {
                return (
                  <React.Fragment key={option.key}>
                    <input
                      type='radio'
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={ field.value === option.value }
                    />
                    <label htmlFor={option.value}>
                      <ItemBox
                        color={formik.values.color}
                        item={option.value}
                        active={field.value === option.value}
                      />
                    </label>
                  </React.Fragment>
                )
              })
            }

          }
        </Field>
      </div>

    </div>
  );
}

export default Radio;