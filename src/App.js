import React from 'react';
import './App.css';
import Titulo from './Components/titulo';

import Alumnos from './Components/ListaAlumno';
import Boton from './Components/Boton';
import Info from './Components/Info';
import Infod from './Components/Infod';
import Infov from './Components/Infov';



function App() {
  return (
    <div className="App">
    <header><Titulo title="Three Clother"/></header>
    
    <nav> 
      <ul>
        <li id='c'>Inicio</li>
        <li id='c'>Catalogo</li>
        <li id='c'>Contenido</li>
      </ul>
      <Boton/>
    </nav>
    <section>
      <Alumnos/>
      
      
    </section>
    <article>
   

      <Info  title="Valentina Fresia"
        
        name="comision 3"/>

        <hr></hr>
        <Infod title="Sofia Portillo Romero"

        name="comision 3"
        />
        <hr></hr>
        <Infov title="Santiago Cabral"

        name="comision 3"
        
        />

      </article>
    <footer> 
      <Titulo title="Titulo footer"/>
      <Boton/>
       </footer>
    </div>
  );
}

export default App;
