import React, { Component } from 'react'

import ajiaco from "../assets/img/noticias/ajiaco.JPG"
import restaurant from "../assets/img/noticias/restaurantTour.JPG"

export default class Noticias extends Component {
    render() {
        return (
            <div>
                <section class="bienvenido" />
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.larepublica.co/cocina"><img src={ajiaco} alt="Cocina1" class="img-thumbnail"/></a>
                        </div>
                        <div class="col-md-6">
                            <a href="https://www.eltiempo.com/noticias/cocina-colombiana"><img src={restaurant} alt="Cocina2" class="img-thumbnail"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
