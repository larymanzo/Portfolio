import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/header.css'

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <header className="main-header">
        <h3 className="name-header">
          Olá, { name } !
        </h3>
        <nav className="nav-bar-header">
          <Link to="/inicio" className="item-nav-bar">Início</Link>
          <Link to="/projetos" className="item-nav-bar">Projetos</Link>
          <Link to="/contato" className="item-nav-bar">Contato</Link>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.user.name,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
