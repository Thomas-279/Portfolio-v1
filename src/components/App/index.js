// == Import npm
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

// == Export
export default App;
