import React from 'react';
import Contexts from './src/contexts';
import Navigation from './src/navigations';

const App = () => {
  return (
    <Contexts>
      <Navigation />
    </Contexts>
  );
};

export default App;
