import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default class Inicio extends Component {
    render() {
        return (
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

        )
    }
}
