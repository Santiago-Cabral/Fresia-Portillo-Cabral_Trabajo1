import React, { Component } from "react";
import data from "../Helpers/Data.json";
import ElementoLista from "./ElementoLista";


function Alumno(props) {
    return(<div><h3>✔️</h3></div>
    )
}

function NoAlumno(props) {
    return(<div><h3>Logout</h3></div>
    )
}

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session:true
    };
}
    render(){
        console.log(data);
        return(
            <div>
                <h2>RenderizadoCondicional</h2>
                {this.state.session ? <Alumno />:<NoAlumno/>}   
              <ol>
                {
                    data.Alumnos.map(el=><ElementoLista/>)
                }
                </ol>              
            </div>
            
        );

}
}