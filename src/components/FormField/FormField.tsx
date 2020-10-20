import React, { FunctionComponent } from 'react';

import Input, { InputProps } from './Input/Input';
import Select, { SelectProps } from './Select/Select';

type FormFieldProps = Partial<InputProps> & Partial<SelectProps>;

const FormField: FunctionComponent<FormFieldProps> = ({ ...props }) => {
  const { type } = props;

  switch (type) {
    case 'text':
    case 'email':
      return <Input {...props} />;
    case 'select':
      return <Select {...props} />;
    default:
      return null;
  }
};

export default FormField;

export { Input };
