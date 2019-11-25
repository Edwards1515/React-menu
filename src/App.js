import React, { Component } from 'react';
import InfoDePersona from './componentes/InfoDePersona/InfoDePersona';

class App extends Component {
  render() {

    let miPersona = {
      nombre: "Juan José Lizarazo",
      rol: "Estudiante",
      descripcion: "Software: Ananké",
      imagen:'assets/images/avatars/juan.jpeg',
      listaDeCursosTomados: [
        {
          nombre: ".NET",
          nota: 4.4,
          ciclo:"Ciclo IV"
        },
        {
          nombre: "Oracle DB",
          nota: 2.1,
          ciclo:"Ciclo III"
        },
        {
          nombre: "Express JS",
          nota: 5.0,
          ciclo:"Ciclo V"
        }]
    };

    let miOtraPersona = {
      nombre: "Narda Amador",
      rol: "Estudiante",
      descripcion: "Antropología: UNAL",
      imagen:'assets/images/avatars/narda.jpeg',
      listaDeCursosTomados: [{nombre: "Arqueología", nota: 4,ciclo:"Ciclo VIII"}, 
      {nombre: "Fund. Antropología", nota:3.3, ciclo:"Ciclo II"}, {nombre: "Latin", nota:2.4, ciclo:"Ciclo I"}]
    };


    return (
      <React.Fragment>
        <InfoDePersona persona={miPersona}></InfoDePersona>
        <InfoDePersona persona={miOtraPersona}></InfoDePersona>
      </React.Fragment>
    );
  }
}

export default App;
