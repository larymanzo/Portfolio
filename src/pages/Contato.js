import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/cards.css'

class Contato extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="welcome section-main">
          <a className="" href="//www.github.com/larymanzo" alt="github">
            Github
          </a>
          <a className="" href="//www.linkedin.com/in/larissa-manzo/" alt="github">
            Linkedin
          </a>
        </section>
        <Footer />
      </>
    );
  }
}

export default Contato;
