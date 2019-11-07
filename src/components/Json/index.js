import React from 'react';
import { object, string } from 'prop-types';

const propTypes = {
  value: object.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
};

const Json = ({ value, ...props }) => (
  <pre {...props}>{JSON.stringify(value, undefined, 2)}</pre>
);

Json.propTypes = propTypes;
Json.defaultProps = defaultProps;

export default Json;
