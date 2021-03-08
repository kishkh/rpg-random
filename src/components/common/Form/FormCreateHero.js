import React from 'react';
import { Formik, Form } from 'formik'
import FormControl from './FormControl';
function FormCreateHero(props) {
  const headOptions = [
    {key: 'Baby_face', value: 'baby_face'},
    {key: 'Architect-mask', value: 'architect-mask'},
    {key: 'Calavera', value: 'calavera'},
    {key: 'Cleopatra', value: 'cleopatra'},
    {key: 'Dead-head', value: 'dead-head'},
    {key: 'Fron-maskox', value: 'iron-mask'},
    {key: 'Ninja-mask', value: 'ninja-mask'},
    {key: 'Liar', value: 'liar'},
    {key: 'Lynx-head', value: 'lynx-head'},
    {key: 'Mandrill-head', value: 'mandrill-head'},
    {key: 'mighty-boosh', value: 'mighty-boosh'},
    {key: 'Panda', value: 'panda'},
    {key: 'Pummeled', value: 'pummeled'},
    {key: 'Rabbit-head', value: 'rabbit-head'},
    {key: 'Raccoon-head', value: 'raccoon-head'},
    {key: 'Silenced', value: 'silenced'},

  ]
  const bodyOptions = [
    {key: 'Polo_shirt', value: 'polo_shirt'},
    {key: 'Sleeveless_top', value: 'sleeveless_top'},
    {key: 'T_shirt', value: 't_shirt'},
    {key: 'Tank_top', value: 'tank_top'}
  ]
  const legOptions = [
    {key: 'Trousers', value: 'trousers'},
    {key: 'Skirt', value: 'skirt'},
    

  ]
  const weaponOptions = [
    {key: 'Rock', value: 'rock'},
    {key: 'Spoon', value: 'spoon'}
  ]
  const initialValues = {
    name: 'hero',
    color: '#339359',
    headOption: headOptions[0].value,
    bodyOption: bodyOptions[0].value,
    legOption: legOptions[0].value,
    weaponOption: weaponOptions[0].value,
  }

  const onSubmit = (values) => {
    props.createHero(
      values.name, 
      {
        head: values.headOption, body: values.bodyOption, weapon: values.weaponOption,
        legs: values.legOption, color: values.color
      }
    )
  }
  const validate = (values) => {
    let errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 2) {
      errors.name = 'Name is to short'
    } else if (values.name.length > 21) {
      errors.name = 'Name is too long'
    }
    return errors
  }
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      { formik => (
        <Form>
          <FormControl
            control='input'
            type='text'
            name='name'
            label='Name'
          />
          <FormControl
            control='input'
            type='color'
            name='color'
            label='Color of skin'
          />
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
            name='legOption'
            options={legOptions}  
          />
          <FormControl
            formik={formik}
            control='radio'
            label='weapon'
            name='weaponOption'
            options={weaponOptions}  
          />
          <button type='submit' disabled={!formik.isValid} >Create</button>
        </Form>)
      }
    </Formik>
  );
}

export default FormCreateHero;