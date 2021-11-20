import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/img/menu.png'
import periodic from '../assets/img/periodic.png';
import equipo from '../assets/img/equipo.png'

export default class Inicio extends Component {
    render() {
        return (
            <div>
            <div className="inicio">
                <div className="titulo">
                <h1>BIENVENIDO A COLOMBIA</h1>
                <h2>ANÍMATE Y COMPARTE TU RECETA</h2>
                </div>
                <div className="c-receta">
                 <Link to='/' className="btn-receta">Comparte tu receta</Link>
                <br />
                </div>
            </div>
                <div class="row">
                <div class="col-md-4">
                    <Link to="/servicios"><img src={menu} alt="RECETAS" className="menu"/><i class="fas fa-concierge-bell"></i></Link>
                    <p class="textoInicio">RECETAS</p>
                </div>
                <div class="col-md-4">
                    <Link to="/noticias"><img src={periodic} alt="NOTICIAS" className="periodico"/><i class="far fa-newspaper"></i></Link>
                    <p class="textoInicio">NOTICIAS GASTRONÓMICAS</p>
                </div>
                <div class="col-md-4">
                    <Link to="/programadores"><img src={equipo} alt="EQUIPO" className="equipo"/><i class="fas fa-users-cog"></i></Link>
                    <p class="textoInicio">EQUIPO</p>
                </div>
                </div>
                </div>

        )
    }
}

