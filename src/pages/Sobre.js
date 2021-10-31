import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../css/cards.css'

class Sobre extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="welcome section-about">
          <h2>Sobre:</h2>
          <p>Olá, me chamo Larissa, tenho 30 anos. Sou formada em publicidade e propaganda pela UNIP. Faço faculdade de análise e desenvolvimento de sistemas e também estou fazendo a escola de programadores Trybe. Até hoje tenho conhecimento de versionamento de código com Git e Github, HTLM5, CSS, JavaSript, React e Redux.</p>
          <p>Hoje, na Trybe, estou aprendendo a usar Hooks. </p>
          <p>Meu foco hoje é desenvolver os conhecimentos que já possuo e sempre aprender algo novo que possa agregar na minha jornada como DEV.
          </p>
        </section>
        <Footer />
      </>
    );
  }
}

export default Sobre;
