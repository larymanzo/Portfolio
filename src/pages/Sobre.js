import React from 'react';
import Header from '../components/Header';

class Sobre extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <h2>Sobre:</h2>
        <h3>Olá, me chamo Larissa, tenho 30 anos. Sou formada em publicidade e propaganda pela UNIP. Faço faculdade de análise e desenvolvimento de sistemas e também estou fazendo a escola de programadores Trybe. Até hoje tenho conhecimento de versionamento de código com Git e Github, HTLM5, CSS, JavaSript, React e Redux.</h3>
        <h3>Hoje, na Trybe, estou aprendendo a usar Hooks. </h3>
        <h3>Meu foco hoje é desenvolver os conhecimentos que já possuo e sempre aprender algo novo que possa agregar na minha jornada como DEV.
        </h3>
      </section>
    );
  }
}

export default Sobre;
