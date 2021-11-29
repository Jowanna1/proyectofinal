import React, { Component } from "react";

export default class Login extends Component {

  render() {
    return (
      <div>
  <section class="bienvenido">
    <form class="formulario">
      <div class="form">
        <input type="email" class="form-control input-config" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar usuario" v-model="usuario" />
        <input type="password" class="form-control input-config" id="exampleInputPassword1" placeholder="Ingresar contraseña" v-model="password" />
      </div>
      <button type="submit" class="boton" >Ingresar</button>
      <button type="submit" class="boton" >Crear usuario</button>
    </form>
  </section>
</div>
/*
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
*/
    );
  }
}
