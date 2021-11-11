import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
//import components
import Inicio from './Vistas/Inicio';
import Login from './Vistas/Login';
import Noticias from './Vistas/Noticias';
import NotFound from './Vistas/NotFound';
import logo from './assets/img/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar navbar-expand-lg navbar-light" id="b">
        <div class="container-fluid">
          <Link to='/'><img src={logo} className="App-logo"/>ColombianFood</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="navbarNavAltMarkup">
              <Link to='/Login'>Login🤡</Link>
              </li>
              <li className="nav-item">
              <Link to='/Noticias'>Noticias</Link>
              </li>
        
            </ul>
          
        </div>
      </nav>
      </header>
      <Routes>
          <Route path='/' element={<Inicio />}></Route>          
          <Route path='/Login' element ={<Login />}></Route>
            {/* <Route path='/Products/:productId'element={<SpecificProduct />}></Route>
            <Route path='/Products/Create' element ={<ProductCreate />}></Route>
          </Route> */}
          <Route path='/Noticias' element ={<Noticias />}></Route>
          <Route path='/*' element ={<NotFound />}></Route>
        </Routes>
    </div>
  );
}

export default App;


