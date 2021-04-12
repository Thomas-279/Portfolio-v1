// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Skills from 'src/components/Skills';
import Projects from 'src/components/Projects';

import Footer from 'src/components/Footer';
import './style.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* Suivant les urls */}
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/skills" exact>
        <Skills />
      </Route>
      <Route path="/projects" exact>
        <Projects />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
