import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userInformation } from '../redux/actions';
import Footer from '../components/Footer';
import '../css/initial.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name } = this.state;
    const { sendInfo } = this.props;
    const { handleChange, state } = this;
    return (
      <>
        <header className="welcome-initial">
          <section className="section-initial">
            <div>
              <h3>Seja bem-vindo!!</h3>
            </div>
            <div>
              <h3>Coloque o seu nome para continuar!</h3>
            </div>
            <form action="">
              <input
                type="text"
                placeholder="Nome"
                name="name"
                value={ name }
                onChange={ (value) => handleChange(value) }
              />
              <Link to="/boas-vindas">
                <button
                  type="button"
                  onClick={ () => {
                    sendInfo(state);
                  } }
                >
                  Entrar
                </button>
              </Link>
            </form>
          </section>
        </header>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendInfo: (loginInfo) => dispatch(userInformation(loginInfo)),
});

Login.propTypes = {
  sendInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
