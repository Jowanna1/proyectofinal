/* eslint-disable no-useless-concat */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import axios from "axios";
import appConfing from '../AppConfing'

export default class Login extends Component {

  constructor(props){
    //Initialize dad constructor
    super(props);
    //Binding functions
    this.handleChange= this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
    this.changeStateRegistro= this.props.onTryLogin;
    //Component State Definitior
    this.state= {
      usuario: '',
      password:''
    }
  }

  //Update State from Registroreceta
  // async changeStateRegistro(newLogger){
  //   this.cambiarEstado(newLogger);
  // }

  //Handle functions

  async handleClick(e){
    if(e.target.name === 'ingresar'){
      let response= await axios.post(appConfing.urlBackend + 'usuario' + '/login',this.state);
      // console.log(response.data['mensaje']);
      alert(response.data['mensaje']);
      if(response.data['login']){
        this.changeStateRegistro(response.data['login'])
      }
    }else{
      let response = await axios.post(appConfing.urlBackend + 'usuario' + '/crear',this.state);
      alert(response.data['mensaje']);
      if(response.data['login']){
        this.changeStateRegistro(response.data['login'])
      }
    }
  }

  async handleChange(e){
    if(e.target.name === 'usuario'){
      await this.setState({
        usuario: e.target.value
      })
    }else{
      await this.setState({
        password: e.target.value
      })
    }
    //console.log(this.state);
  }

  //Render functions

  render() {
    return (
      <div>
        <section class="bienvenido">
          <form class="formulario">
            <div class="form">
              <input type="email" class="form-control input-config" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar usuario" v-model="usuario" onChange={this.handleChange} name='usuario' />
              <input type="password" class="form-control input-config" id="exampleInputPassword1" placeholder="Ingresar contraseña" v-model="password" onChange={this.handleChange} name='password'/>
            </div>
            <input type='button' value='Ingresar' class='boton' onClick={this.handleClick} name='ingresar'/>
            <input type='button' value='Crear usuario' class='boton' onClick={this.handleClick} name='crear_cuenta'/>
            {/* <button type="submit" class="boton" >Ingresar</button>
            <button type="submit" class="boton" >Crear usuario</button> */}
          </form>
        </section>
      </div>
    );
  }
}
