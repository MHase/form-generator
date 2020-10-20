import React, { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import Json from 'components/Json/Json';

import { clearValues, RootState } from 'store/form';

import './style.scss';

const Results: FunctionComponent<RouteComponentProps> = () => {
  const values = useSelector((state: RootState) => state.values);
  const dispatch = useDispatch();

  // @ts-ignore
  useEffect(() => {
    return () => dispatch(clearValues());
  }, [dispatch]);

  return (
    <div className="Results">
      <Json value={values} />
    </div>
  );
};

export default Results;
