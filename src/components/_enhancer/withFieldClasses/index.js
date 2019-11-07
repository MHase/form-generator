import React, { useState } from 'react';
import cn from 'classnames';

import './style.scss';

export default function withFieldClasses(WrappedComponent) {
  return ({ ...props }) => {
    const [classes, setClasses] = useState('');

    const defineClasses = ({ focused, filled, error, disabled }) => {
      setClasses(
        cn('Field__container', {
          'Field__container--focused': focused,
          'Field__container--filled': filled,
          'Field__container--error': error,
          disabled: disabled,
        })
      );
    };

    return (
      <div className="Field">
        <div className={classes}>
          <label className="Field__label">
            {props.name}
            {props.required && '*'}
          </label>
          <div className="Field__content">
            <WrappedComponent {...props} defineClasses={defineClasses} />
          </div>
        </div>
        <p className="Field__error">{props.error}</p>
      </div>
    );
  };
}
