import React, { FunctionComponent } from 'react';

interface JsonProps {
  value: object;
  className?: string;
}

const Json: FunctionComponent<JsonProps> = ({ value, ...props }) => (
  <pre {...props}>{JSON.stringify(value, undefined, 2)}</pre>
);

export default Json;
