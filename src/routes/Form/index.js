import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createStructure } from '../../store/form';

import { fields } from '../../sampleForm.json';

const Form = () => {
  const { values, structure } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    !Object.values(structure).length && dispatch(createStructure(fields));
    console.log(values); // TODO: remove console.log
  }, [dispatch, structure, values]);

  return (
    <div className="Form" />
  );
};

export default Form;
