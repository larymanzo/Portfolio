import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Larissa from '../images/Larissa.jpeg'
import '../css/main.css'

class BoasVindas extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="welcome-main">
          <div className="info">
            <img className="imagem" src={Larissa} alt="Foto de Larissa"/>
          </div>
          <div className="info-main">
            <h3>Olá! Meu nome é:</h3>
            <div className="entalhe" />
            <h1>Larissa Manzo Lamoso</h1>
            <p> Sou natural de Santa Cruz do Rio Pardo - SP e hoje resido na cidade de Ourinhos - SP. Atualmente tenho 30 anos, estou cursando a faculdade de análise e desenvolvimento de sistemas na FATEC em Ourinhos e também faço a escola de programadores Trybe.  Sou formada em publicidade e propaganda pela UNIP desde 2017.</p>
            <p>Comecei minha trajetória aprendendo a programar em C básico. Até hoje tenho conhecimento de versionamento de código com Git e Github, C, HTLM5, CSS, JavaSript, React e Redux. Estou no bloco 17 da Trybe, onde estou aprendendo a usar Hooks</p>
            <p> Meu foco é desenvolver os conhecimentos que já possuo e sempre aprender algo novo que possa agregar na minha jornada como DEV.
            </p>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default BoasVindas;
