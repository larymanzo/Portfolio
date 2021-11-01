import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/cards.css'

class Projetos extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="projects-main">
          <a className="section-about" href="//www.linkedin.com/in/larissa-manzo/" alt="github">
            <div className="projects">
              Projeto Trybewallet
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-react-testing-library" alt="Projeto react testing">
            <div className="projects">
              Projeto react testing
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-trybetunes" alt="Projeto Trybetunes">
            <div className="projects">
                Projeto Trybetunes
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-movie-cards-library-stateful" alt="github">
            <div className="projects">
              Projeto movie cards stateful
            </div>
          </a>
          
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-movie-cards-library" alt="github">
            <div className="projects">
              Projeto movie cards stateful
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-shopping-cart" alt="Projeto Shopping Cart">
            <div className="projects">
                Projeto Shopping Cart
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-zoo-functions" alt="Projeto Zoo Functions">
            <div className="projects">
                Projeto Zoo Functions
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-unit-tests" alt="Projeto JS unit tests">
            <div className="projects">
                Projeto JS unit tests
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/projetc-trybewarts" alt="projeto trybewarts">
            <div className="projects">
                Projeto trybewarts
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-todo-list" alt="projeto to do list">
            <div className="projects">
                Projeto to do list
            </div>
          </a>
          <a className="section-about" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-pixels-art" alt="projeto pixels art">
            <div className="projects">
                Projeto pixels art
            </div>
          </a>
        </section>
        <Footer />
      </>
    );
  }
}

export default Projetos;
