import React from 'react';
import Input from './Types/Input';
import Radio from './Types/Radio';
import Select from './Types/Select';

function FormControl(props) {
  const { control, ...rest} = props
  switch (control) {
    case 'input': 
      return <Input {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radio {...rest} />
    case 'checkbox':
    case 'date':
    default:
      return null
  }
}

export default FormControl;