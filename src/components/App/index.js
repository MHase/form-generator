import React from 'react';
import { Router } from '@reach/router';

import Form from '../../routes/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Form path="/" />
      </Router>
    </div>
  );
}

export default App;
