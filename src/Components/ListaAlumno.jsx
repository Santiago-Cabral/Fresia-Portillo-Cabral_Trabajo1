 import React from "react";
import Data from "../Helpers/Data.json"


 function Alumnos() {
    return(
        
        <div>
            <h1>Lista Alumnos</h1>
            
            <ul>
        {Data.Alumnos.map((alumno) => (
          <li key={alumno.id}> {alumno.Nombre} {alumno.Apellidos} <input type="checkbox" name="lista" /></li>
        ))}
            </ul>
        </div>

    )
 }
 export default Alumnos;