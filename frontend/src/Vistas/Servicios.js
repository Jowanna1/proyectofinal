import React, { Component } from 'react'
import {} from 'react-router-dom'

import pescado from '../assets/img/pescado.jpg'
import changua from "../assets/img/Changua.jpg"
import piraña from "../assets/img/piraña.jpg"

export default class Servicios extends Component {
    render() {
        return (
            <div>
                <section className="bienvenido">  
                </section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <img src={pescado} alt="..." class="img-thumbnail"/>
                            <p class ="texto">PESCADO FRITO</p>
                            <p class ="texto-1">Ingredientes: 4 tilapias o mojarras pequeñas enteras, limpias y sin escamas (puedes usar el tipo de pescado que desees)
                            2 limones verdes medianos
                            4 dientes de ajo, finamente picados
                            Sal al gusto
                            1 taza de harina de trigo o para todo uso
                            Aceite para freír (vegetal, canola, maíz)</p>
                        </div>
                        <div class="col-md-4">
                            <img src={changua} alt="..." class="img-thumbnail"/>
                            <p class ="texto">CHANGUA</p>
                            <p class ="texto-1">Ingredientes: tazas leche entera, 2 tazas agua, 4 huevos, 3 tallos cebollín (scallions) finamente picado, cilantro al gusto finamente picado, 4 unidades pan tostado (calados, pan duro, toast), sal al gusto, 2 cdas mantequilla sin sal, 4 porciones queso mozarella, doble crema (opcional)</p>
                        </div>
                        <div class="col-md-4">
                            <img src={piraña} alt="..." class="img-thumbnail"/>
                            <p class ="texto">ARROZ ATOLLADO</p>
                            <p class ="texto-1">Ingredientes: 2 cucharadas aceite de canola (28 g)
                            1/4 de libra de carne de cerdo cortada en cubos (125 g)
                            1/4 de libra de carne de res cortada en cubos medianos (125 g)
                            1/4 de libra de pechuga de pollo sin piel y sin hueso cortada en cubos medianos (125 g)
                            1 chorizo mediano cortado en rodajas (60 g)</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

