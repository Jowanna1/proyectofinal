import React, { Component } from 'react'

export default class Noticias extends Component {
    render() {
        return (
            <div>
                <section class="bienvenido" />
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="https://www.larepublica.co/cocina"><img src="../assets/img/cocina.jpg" alt="Cocina1" class="img-thumbnail"/></a>
                        </div>
                        <div class="col-md-6">
                            <a href="https://www.eltiempo.com/noticias/cocina-colombiana"><img src="../assets/img/cocina2.jpg" alt="Cocina2" class="img-thumbnail"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
