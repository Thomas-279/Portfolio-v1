// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Skills from 'src/components/Skills';
import Projects from 'src/components/Projects';
import Error from 'src/components/Error';

import Footer from 'src/components/Footer';
import './style.scss';

// == Composant
const App = () => {
  useEffect(() => {
    document.title = 'Thomas GARRAUT';
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app">
      <Header />
      {/* Suivant les urls */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
