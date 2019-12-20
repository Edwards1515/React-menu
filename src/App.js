import React, { Component } from 'react';
import TarjetaDePromociones from './componentes/infoDePromociones/TarjetaDePromociones';



class App extends Component {

  constructor() {
    super();

    this.state = {
      
      arrayDeProfesores :[],
      arrayDeRestaurantes1:[]
    }
  }

  componentDidMount() {

    // fetch('https://curso-ananke-back.herokuapp.com/data/obtenerTodosLosDocentes',
    //   {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       nombre: asdasd,
    //       valor: asdasd
    //     })
    //   })
    //https://tallerfinal.herokuapp.com/taller/obtenerTodosLosRestaurantes
    fetch('https://curso-ananke-back.herokuapp.com/data/obtenerTodosLosDocentes')
      .then(response => {
        response.json()
          .then(datos =>{
            this.setState({
              arrayDeProfesores: datos.docentes
            })
            console.log(this.state.arrayDeProfesores);
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))

     

        fetch('https://react-ananke.herokuapp.com/data/obtenerPromociones')
        .then(response => {
          response.json()
            .then(datos =>{
              this.setState({
                arrayDeRestaurantes1: datos.Promo
              })
              console.log(this.state.arrayDeRestaurantes1);
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  

  render() {

    return (
      <React.Fragment>
               
                <div className="container">
                    <div className="main_title">
                        <h2>Menú de Promociones</h2>
                        <p>...</p>
                    </div>
                    {/* {this.obtenerCardsConTarjetasDePersonas()} */}
                    {this.obtenerCardsConDocentesDesdeElBack()}
                </div>
            </React.Fragment>
    );
  }

 



  obtenerCardsConDocentesDesdeElBack = () => {
    let arrayDeCardsHTML = [];
    for (let i = 0; i < this.state.arrayDeRestaurantes1.length; i++) {
      arrayDeCardsHTML.push(
        <TarjetaDePromociones promocion="2x1" restaurante={this.state.arrayDeRestaurantes1[i]}></TarjetaDePromociones>
        
      )
     
     
    }
    return arrayDeCardsHTML;
  }

 
}

export default App;
