/* eslint-disable no-useless-constructor */
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';

//import components
import Inicio from './Vistas/Inicio';
import Login from './Vistas/Login';
import Registroreceta from './Vistas/Registroreceta';
import Servicios from './Vistas/Servicios';
import Noticias from './Vistas/Noticias';
import Programadores from './Vistas/Programadores';
import NotFound from './Vistas/NotFound';

import logo from './assets/img/logo.png';
// import user from './assets/img/user.png';
import home from './assets/img/home.png';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      logger: false
    };
    this.updateState= this.updateState.bind(this);
  }


  updateState(newState){
    this.setState({
      logger: newState
    })
  }


  renderLogin(){
    return(
      <div className="App">
        <Login onTryLogin={this.updateState}/>
      </div>  
    )
  }

  renderApp(){
    return (
      <div className="App">
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to='/' className="Colombian" class="navbar-brand"><img src={logo} alt="LOGO" className="App-logo"/>COLOMBIAN FOOD</Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                {/* <li className="navbarNavAltMarkup">
                <Link to='/Login'><img src={user} alt="USER" className="App-user"></img></Link>
                </li> */}
                <li className="nav-item">
                <Link to='/'><img src={home} alt="HOME" className="App-home"></img></Link>
                </li>
              </ul>
          </div>
        </nav>
        </header>
        
        <Routes>
            <Route path='/' element={<Inicio />}></Route>          
            <Route path='/Login' element ={<Login />}></Route>
            <Route path='/Regreceta' element ={<Registroreceta />}></Route>
              {/* <Route path='/Products/:productId'element={<SpecificProduct />}></Route>
              <Route path='/Products/Create' element ={<ProductCreate />}></Route>
            </Route> */}

            <Route path='/servicios' element ={<Servicios />}></Route>
            <Route path='/noticias' element ={<Noticias />}></Route>
            <Route path='/programadores' element ={<Programadores />}></Route>

            <Route path='/*' element ={<NotFound />}></Route>
        </Routes>

        <section class="footer">
          <div class="container">
            <p>2021 © TODOS LOS DERECHOS RESERVADOS A SMARTDEV</p>
          </div>
        </section>

      </div>
    );
  }

  render(){
    if(this.state.logger){
      return this.renderApp();
    }else{
      return this.renderLogin();
    }
  }
}