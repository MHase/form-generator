import React, { FunctionComponent, useState } from 'react';
import cn from 'classnames';
import './style.scss';

interface DefineClassArguments {
  focused?: boolean | string;
  filled?: boolean | string;
  error?: boolean | string;
  disabled?: Boolean | string;
}

export type DefineClasses = (args: DefineClassArguments) => void;

export interface WrapperComponentProps {
  defineClasses: DefineClasses;
}

interface WithFieldClassesProps<V> extends FunctionComponent<V> {}

export default function withFieldClasses<V extends {}>(
  WrappedComponent: WithFieldClassesProps<V>
) {
  return ({ ...props }) => {
    const [classes, setClasses] = useState('');

    const defineClasses: DefineClasses = ({
      focused,
      filled,
      error,
      disabled,
    }) => {
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
            {/* @ts-ignore */}
            <WrappedComponent {...props} defineClasses={defineClasses} />
          </div>
        </div>
        <p className="Field__error">{props.error}</p>
      </div>
    );
  };
}
