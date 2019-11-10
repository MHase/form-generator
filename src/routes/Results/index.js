import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Json from '../../components/Json';

import { clearValues } from '../../store/form';

import './style.scss';

const Form = () => {
  const { values } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearValues());
  }, [dispatch]);

  return (
    <div className="Results">
      <Json value={values} />
    </div>
  );
};

export default Form;
