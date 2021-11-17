import React, { Component } from "react";

export default class Login extends Component {

  render() {
    return (
      <div className="logueo">
        <header className="login">
          <form className="form-container">
            <label>Nombre Usuario</label>
            <br />

            <input name="username" type="text" onChange={this.handleChange} />
            <br />
            <label>Contrasena</label>
            <br />
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <br />
            <input type="button" onClick={this.handleClick} value="Entrar" />
          </form>
        </header>
      </div>
    );
  }
}
