import React, { useEffect, useState, useRef } from 'react';
import { string, func, oneOfType, array, object } from 'prop-types';
import cn from 'classnames';

import useOutsideClick from '../../../hooks/useOutsideClick';

import withFieldClasses from '../../_enhancer/withFieldClasses';

import './style.scss';

const propTypes = {
  name: string.isRequired,
  options: oneOfType([array, object]).isRequired,
  onChange: func.isRequired,
  onBlur: func.isRequired,
  error: string,
  dependant: string,
  dependantValue: string,
  value: string,
};

const defaultProps = {
  error: '',
  dependant: '',
  dependantValue: '',
  value: '',
};

const Select = ({
  defineClasses,
  name,
  options,
  onChange,
  onBlur,
  error,
  dependant,
  dependantValue,
  value,
  ...props
}) => {
  const [optionsVisibility, setOptionsVisibility] = useState(false);
  const customOptions = dependant ? options[dependantValue] || [] : options;
  const selectedItem = customOptions.find(opt => opt.value === value) || {};

  const wrapperRef = useRef();
  useOutsideClick(wrapperRef, () => setOptionsVisibility(false));

  const handleChange = ({ label, value }) => {
    onChange(name, value);
    setOptionsVisibility(false);
    onBlur(name, value);
  };

  useEffect(() => {
    if (customOptions.length && dependant) {
      onChange(name, '');
      onBlur(name, '');
    }
  }, [
    dependantValue,
    customOptions.length,
    dependant,
    name,
    onBlur,
    onChange,
  ]);

  useEffect(() => {
    defineClasses({
      focused: optionsVisibility,
      filled: optionsVisibility || selectedItem.value,
      error,
      disabled: !customOptions.length,
    });
  }, [defineClasses, optionsVisibility, selectedItem, error, customOptions]);

  return (
    <div
      ref={wrapperRef}
      className={cn('Select', { 'Select--open': optionsVisibility })}
      onClick={() =>
        !optionsVisibility && setOptionsVisibility(prevState => !prevState)
      }
    >
      <input
        type="text"
        className="Select__label"
        readOnly
        value={selectedItem.label || ''}
      />
      {optionsVisibility && (
        <ul className="Select__list" data-testid="options-wrapper">
          {customOptions.map((item, i) => (
            <li
              className={cn('Select__list-item', {
                'Select__list-item--selected':
                  item.value === selectedItem.value,
              })}
              onClick={() => handleChange(item)}
              key={i}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default withFieldClasses(Select);
