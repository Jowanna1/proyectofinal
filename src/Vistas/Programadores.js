import React, { Component } from 'react'

import Jenny from "../assets/img/Jenny.jpg"
import Alfonso from "../assets/img/Alfonso.jpg"
import Sergio from "../assets/img/Sergio.jpg"
import David from "../assets/img/David.jpg"
import JuanCamilo from "../assets/img/juancamilo.jpg"  

export default class Programadores extends Component {
    render() {
        return (
            <div className="programadores">
                <section class="bienvenido"></section>
                <div class="container">
                    <div class="row" >
                        <div class="col-md-6">
                            <img src={Jenny} alt="Jenny" width="140" height="140" class="img-thumbnail" />
                            <p class="nombre">Jenny Johanna Forero Ávila</p>
                            <p class="texto-1">Diseñadora gráfica, encargada de la maquetación del sitio WEB, distribución de colores, creación de logos y modificación de imagenes según el dispositivo a visualizar</p>
                        </div>
                        <div class="col-md-6">
                            <img src={Alfonso} alt="Alfonso" width="140" height="140" class="img-thumbnail" />
                            <p class="nombre">Excluido</p>
                            <p class="texto-1">Desarrollador FRONT-END, encargado de  la interfaz desde el punto de vista del código para que el usuario pueda interactuar con un sistema</p>
                        </div>
                        <div class="col-md-6">
                            <img src={Sergio} alt="Sergio" width="140" height="140" class="img-thumbnail" />
                            <p class="nombre">Sergio Duvand Silva Merchán</p>
                            <p class="texto-1">Desarrollador BACK-END, encargado de implementar la interacción entre el usuario y el sitio web</p>
                        </div>
                        <div class="col-md-6">
                            <img src={David} alt="David" width="140" height="140" class="img-thumbnail" />
                            <p class="nombre">David Gálvez Puerta</p>
                            <p class="texto-1">Desarrollador BACK-END,  encargado de implementar la interacción entre el usuario y el sitio web</p>
                        </div>
                        <div class="col-md-6">
                            <img src={JuanCamilo} alt="Juan Camilo" width="140" height="100" class="img-thumbnail" />
                            <p class="nombre">Juan Camilo Gómez Álvarez</p>
                            <p class="texto-1">Desarrollador DB, encargado de  implementar y desarrollar la base de datos del sistema</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
