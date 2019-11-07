import React from 'react';
import { string, node, oneOfType } from 'prop-types';
import cn from 'classnames';

import './style.scss';

const propTypes = {
  children: oneOfType([string, node]).isRequired,
  className: string,
};

const defaultProps = {
  className: '',
};

const Button = ({ children, className, ...props }) => {
  return (
    <button className={cn('Button', className)} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
