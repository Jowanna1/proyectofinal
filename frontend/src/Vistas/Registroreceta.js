import React, { Component } from 'react'

export default class Registroreceta extends Component {
    render() {
        return (
            <div>
                <section class="bienvenido">
                    <form class="formulario">
                        <div class="form">
                            <input type="text" class="form-control input-config" id="exampleInputName" placeholder="Ingrese nombre de la receta"/>
                            <textarea type="text" class="form-control input-config" id="exampleInputIngredientes" placeholder="Ingrese ingredientes requeridos" v-model="ingredientes" rows='4' />
                            <textarea type="text" class="form-control input-config" id="exampleInputPreparacion" placeholder="Ingrese el modo de preparación" v-model="preparacion" rows='4' />
                            <input type ="text" class ="form-control input-config" id="exampleInputAutor" placeholder="Ingrese nombre del chef"/>
                        </div>
                            <button type ="submit" class ="boton">Guardar Receta</button>
                    </form>
                </section>
            </div>
        )
    }
}
