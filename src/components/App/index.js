// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
  </div>
);

// == Export
export default App;
