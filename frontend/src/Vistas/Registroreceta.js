/* eslint-disable no-useless-concat */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import axios from 'axios';
import appConfig from '../AppConfing'

export default class Registroreceta extends Component {
    constructor(props){
        //Initialize dad constructor
        super(props);
        //Binding functions
        this.handleChange= this.handleChange.bind(this);
        this.handleClick= this.handleClick.bind(this);
        //Component State Definitior
        this.state= {
            receta: '',
            ingredientes:'',
            preparacion:'',
            autor:''
        }
    }

    async handleClick(){
        let response = await axios.post(appConfig.urlBackend + 'recetas' + '/compartir_receta' , this.state);
        alert(response.data['mensaje'])
    }

    async handleChange(e){
        if(e.target.name === 'receta'){
            await this.setState({
                receta: e.target.value
            })
        }else if(e.target.name === 'ingredientes'){
            await this.setState({
                ingredientes: e.target.value
            })
        }else if(e.target.name === 'preparacion'){
            await this.setState({
                preparacion: e.target.value
            })
        }else{
            await this.setState({
                autor: e.target.value
            })
        }
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <section class="bienvenido">
                    <form class="formulario">
                        <div class="form">
                            <input type="text" class="form-control input-config" name="receta" placeholder="Ingrese nombre de la receta" onChange={this.handleChange}/>
                            <textarea type="text" class="form-control input-config" name="ingredientes" placeholder="Ingrese ingredientes requeridos" v-model="ingredientes" rows='4' onChange={this.handleChange}/>
                            <textarea type="text" class="form-control input-config" name="preparacion" placeholder="Ingrese el modo de preparación" v-model="preparacion" rows='4' onChange={this.handleChange}/>
                            <input type ="text" class ="form-control input-config" name="autor" placeholder="Ingrese nombre del chef" onChange={this.handleChange}/>
                        </div>
                            <input type='button' class='boton' value='Guardar receta' onClick={this.handleClick}/>
                            {/* <button type ="submit" class ="boton">Guardar Receta</button> */}
                    </form>
                </section>
            </div>
        )
    }
}
