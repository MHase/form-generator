import React from 'react';
import { Router } from '@reach/router';

import Form from '../../routes/Form';
import Results from '../../routes/Results';

import './style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Form path="/" />
        <Results path="/results" />
      </Router>
    </div>
  );
}

export default App;
