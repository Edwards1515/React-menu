import React, { Component } from 'react';

class Titulo extends Component {

  constructor() {
    super();

    this.state = {
      colorDelTexto: "black"
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.colorDelTexto }}>{this.props.Contenido}</h1>
        <p>{"Creado el: " + new Date()}</p>
        
        
        <input type="button" value="Cambiar color"
          style={{ cursor: "pointer" }}
          onClick={this.cambiarColor}></input>
      </div>
    );
  }

  cambiarColor = () => {
    let colorTarget;
    if (this.state.colorDelTexto === "blue") {
      colorTarget = "black";
    }
    else {
      colorTarget = "blue";
    }

    this.setState({
      colorDelTexto: colorTarget
    });

  }
}

export default Titulo;
