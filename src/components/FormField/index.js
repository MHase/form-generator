import React from 'react';

import Input from './Input';
import Select from './Select';

const FormField = ({ ...props }) => {
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
