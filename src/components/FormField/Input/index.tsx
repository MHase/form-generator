import React, {
  FunctionComponent,
  ChangeEvent,
  FocusEvent,
  useState,
  useEffect,
  InputHTMLAttributes,
} from 'react';

import withFieldClasses, {
  WrapperComponentProps,
} from '../../_enhancer/withFieldClasses/index';

export interface InputProps
  extends WrapperComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur'> {
  name: string;
  type: string;
  required?: boolean;
  onChange: (name: string, value: string | number) => void;
  onBlur: (name: string, value: string | number) => void;
  error?: string;
  value?: string | number;
}

const Input: FunctionComponent<InputProps> = ({
  defineClasses,
  error = '',
  onChange,
  onBlur,
  value = '',
  required = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur(props.name, e.target.value);
    setFocused(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(props.name, e.target.value);
  };

  useEffect(() => {
    defineClasses({
      focused,
      filled: Boolean(focused || value),
      error,
    });
  }, [defineClasses, focused, value, error]);

  return (
    <input
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={() => setFocused(true)}
      {...props}
      required={required}
      value={value}
    />
  );
};

export default withFieldClasses(Input);
