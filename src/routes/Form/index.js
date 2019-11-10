import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';

import { updateField } from '../../store/form';

import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Json from '../../components/Json';

import validateValues from '../../utils/validateValues.js';

import './style.scss';

const Form = () => {
  const [errors, setErrors] = useState({});
  const { values, structure } = useSelector(state => state);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (name, value) => {
      dispatch(
        updateField({
          [name]: value,
        })
      );
    },
    [dispatch]
  );

  const validate = useCallback(
    (name, value) => {
      setErrors(prevErrors => ({
        ...prevErrors,
        ...validateValues({ [name]: value }, structure),
      }));
    },
    [structure]
  );

  const submit = e => {
    e.preventDefault();

    const submitErrors = validateValues(values, structure);
    const errorsCount = Object.values(submitErrors).filter(err => err && err);

    errorsCount.length ? setErrors(submitErrors) : navigate('/results');
  };

  return (
    <div className="Form">
      <form onSubmit={submit} noValidate className="Form__container">
        {Object.values(structure).map((field, i) => {
          return (
            <FormField
              key={i}
              error={errors[field.name]}
              onChange={onChange}
              onBlur={validate}
              {...(field.dependant && {
                dependantValue: values[field.dependant],
              })}
              {...field}
              value={values[field.name]}
            />
          );
        })}
        <Button type="submit">submit</Button>
      </form>

      <Json value={values} className="Form__results" />
    </div>
  );
};

export default Form;
