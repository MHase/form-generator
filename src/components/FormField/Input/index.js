import React, { useState, useEffect } from 'react';
import { string, bool, func } from 'prop-types';

import withFieldClasses from '../../_enhancer/withFieldClasses';

const propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  required: bool,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  error: string,
  value: string,
};

const defaultProps = {
  required: false,
  error: '',
  value: '',
};

const Input = ({ defineClasses, error, onChange, onBlur, value, ...props }) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = e => {
    onBlur(props.name, e.target.value);
    setFocused(false);
  };

  const handleChange = e => {
    onChange(props.name, e.target.value);
  };

  useEffect(() => {
    defineClasses({
      focused,
      filled: focused || value,
      error,
    });
  }, [defineClasses, focused, value, error]);

  return (
    <input
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={() => setFocused(true)}
      {...props}
      value={value}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default withFieldClasses(Input);
