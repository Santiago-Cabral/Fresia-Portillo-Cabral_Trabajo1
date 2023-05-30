import React, { Component } from "react";
import data from "../Helpers/Data.json"
// import { render } from "@testing-library/react";

export default class ElementoLista extends Component{
 
    render()
    {
        return(
            <div>
                <h3>Lista de Alumnos</h3>
                {
                    <ul>
                        <li>{data.Alumnos.map()}</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                    </ul>
                }
                
            </div>
        ) 
    }
}


 
    