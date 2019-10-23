import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Helmet} from 'react-helmet';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <form>
          <helmet>
            <style>{'body { background-color: darkblue; }'}</style>
          </helmet>
          <p className="h4 text-center mb-4">Iniciar sesión</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Usuario
              </label>
              <br />
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Contraseña
              </label>
              <br />
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <br />
                <button>Iniciar sesión</button>
              </div>
        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
