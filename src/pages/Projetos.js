import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

import '../css/cards.css'

class Projetos extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Project />
        <Footer />
      </>
    );
  }
}

export default Projetos;
