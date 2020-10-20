import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import './style.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button className={cn('Button', className)} {...props}>
    {children}
  </button>
);

export default Button;
