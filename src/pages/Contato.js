import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contato from '../images/contato.jpg'
import '../css/main.css'

class Contato extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="main-contact">
          <div className="contact">
            <img src={contato} alt="Contatos"/>
          </div>
          <div className="contact-right">
            <h2>Contato</h2>
            <div className="entalhe" />
            <a href="https://github.com/larymanzo">github.com/larymanzo</a>
            <a href="https://www.linkedin.com/in/larissa-manzo/">linkedin.com/in/larissa-manzo</a>
            <a href="https://api.whatsapp.com/send?phone=+5514998464393&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio%20Web!">whatsapp</a>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Contato;
