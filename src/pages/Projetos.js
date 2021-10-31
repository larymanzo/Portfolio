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
          <div className="section-about">
            <a className="projects" href="//www.linkedin.com/in/larissa-manzo/" alt="github">
              Projeto Trybewallet
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-react-testing-library" alt="Projeto react testing">
              Projeto react testing
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-trybetunes" alt="Projeto Trybetunes">
              Projeto Trybetunes
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-movie-cards-library-stateful" alt="github">
              Projeto movie cards stateful
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-movie-cards-library" alt="github">
            Projeto movie cards stateful
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-shopping-cart" alt="Projeto Shopping Cart">
              Projeto Shopping Cart
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-zoo-functions" alt="Projeto Zoo Functions">
              Projeto Zoo Functions
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-unit-tests" alt="Projeto JS unit tests">
              Projeto JS unit tests
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/projetc-trybewarts" alt="projeto trybewarts">
              Projeto trybewarts
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-todo-list" alt="projeto to do list">
              Projeto to do list
            </a>
          </div>
          <div className="section-about">
            <a className="projects" href="https://github.com/larymanzo/Projetos_trybe/tree/master/project-pixels-art" alt="projeto pixels art">
              Projeto pixels art
            </a>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Projetos;
