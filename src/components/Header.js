import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          Olá, { name } !
        </h3>
        <nav>
          <Link to="/boas-vindas">Boas vindas</Link>
          <Link to="/sobre">Sobre mim</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
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
