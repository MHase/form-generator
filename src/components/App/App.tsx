import React, { FunctionComponent } from 'react';
import { Router } from '@reach/router';

import Form from 'routes/Form/Form';
import Results from 'routes/Results/Results';

import './style.scss';

const App: FunctionComponent = () => (
  <div className="App">
    <Router>
      <Form path="/" />
      <Results path="/results" />
    </Router>
  </div>
);

export default App;
