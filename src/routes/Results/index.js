import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import Json from '../../components/Json';

import './style.scss';

const Form = () => {
  const { values } = useSelector(state => state);

  useEffect(() => {
    !Object.values(values).length && navigate('/');
  }, [values]);

  return (
    <div className="Results">
      <Json value={values} />
    </div>
  );
};

export default Form;
