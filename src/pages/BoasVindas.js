import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../css/cards.css'

class BoasVindas extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="welcome section-main">
          <h3>Olá! Meu nome é:</h3>
          <h1>Larissa Manzo Lamoso</h1>
          <p>Sou formada em Publicidade e propaganda, faço análise e desenvolvimento na FATEC-Ourinhos e também estou cursando a escola de programadores Trybe, em desenvolvimento full-stack</p>
        </section>
        <Footer />
      </>
    );
  }
}

export default BoasVindas;
