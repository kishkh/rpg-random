import React from 'react';
import { Formik, Form } from 'formik'
import FormControl from './FormControl';
function FormInventory({profile, changeItems, ...props}) {
  const fillInventory = (type) => {
    return type.map(item => (
      {
        key: item.toUpperCase(), 
        value: item
      }
    ))
  }
  const headOptions = fillInventory(profile.inventory.head)
  const bodyOptions = fillInventory(profile.inventory.body)
  const legsOptions = fillInventory(profile.inventory.legs)
  const weaponOptions = fillInventory(profile.inventory.weapon)
  
  const initialValues = {
    color: profile.items.color,
    headOption: profile.items.head,
    bodyOption: profile.items.body,
    legsOption: profile.items.legs,
    weaponOption: profile.items.weapon,
  }

  const onSubmit = (values) => {
    changeItems( 
      {
        head: values.headOption, 
        body: values.bodyOption, 
        weapon: values.weaponOption,
        legs: values.legsOption, 
        color: profile.items.color
      }
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      { formik => (
        <Form>
          <FormControl
            formik={formik}
            control='radio'
            label='Head'
            name='headOption'
            options={headOptions}  
          />
          <FormControl
            formik={formik}
            control='radio'
            label='Body'
            name='bodyOption'
            options={bodyOptions}  
          />
          <FormControl
            formik={formik}
            control='radio'
            label='Legs'
            name='legsOption'
            options={legsOptions}  
          />
          <FormControl
            formik={formik}
            control='radio'
            label='weapon'
            name='weaponOption'
            options={weaponOptions}  
          />
          <button type='submit' >Change</button>
        </Form>)
      }
    </Formik>
  );
}

export default FormInventory;