// == Import npm
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import './style.scss';

// == Composant
const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  </Router>
);

// == Export
export default App;
