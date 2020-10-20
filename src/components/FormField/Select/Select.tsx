import cn from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';
import withFieldClasses, {
  WrapperComponentProps,
} from 'components/_enhancer/withFieldClasses/withFieldClasses';
import useOutsideClick from 'hooks/useOutsideClick';
import useUpdate from 'hooks/useUpdate';
import {
  Option,
  SelectOptions,
  Value,
} from 'utils/formStoreStructure/formStoreStructure';
import './style.scss';

export interface SelectProps extends WrapperComponentProps {
  name: string;
  options: SelectOptions;
  onChange: (name: string, value: string | number) => void;
  onBlur: (name: string, value: string | number) => void;
  error?: string;
  dependant?: string;
  dependantValue?: Value;
  value?: string | number;
}

const Select: FunctionComponent<SelectProps> = ({
  defineClasses,
  name,
  options,
  onChange,
  onBlur,
  error = '',
  dependant = '',
  dependantValue = '',
  value = '',
}) => {
  const [optionsVisibility, setOptionsVisibility] = useState(false);
  // @ts-ignore
  const customOptions = dependant ? options[dependantValue] || [] : options;
  const selectedItem =
    customOptions.find((opt: Option) => opt.value === value) || {};

  const wrapperRef = useOutsideClick(() => setOptionsVisibility(false));

  const handleChange = ({ value }: typeof customOptions) => {
    onChange(name, value);
    setOptionsVisibility(false);
    onBlur(name, value);
  };

  useUpdate(() => {
    if (customOptions.length && dependant) {
      onChange(name, '');
      onBlur(name, '');
    }
  }, [dependantValue, customOptions.length, dependant, name, onBlur, onChange]);

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
      role="listbox"
      tabIndex={0}
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
          {customOptions.map((item: typeof customOptions, index: number) => (
            <li
              role="option"
              aria-selected={selectedItem.value}
              className={cn('Select__list-item', {
                'Select__list-item--selected':
                  item.value === selectedItem.value,
              })}
              onClick={() => handleChange(item)}
              key={index}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default withFieldClasses(Select);
