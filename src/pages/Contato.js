import React from 'react';
import Header from '../components/Header';

class Contato extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section>
          <a href="//www.github.com/larymanzo" alt="github">
            Github
          </a>
          <a href="//www.linkedin.com/in/larissa-manzo/" alt="github">
            Linkedin
          </a>
          {/* <img src="../images/github.png" alt="imagem do github"></img> */}
        </section>
      </>
    );
  }
}

export default Contato;
