import React, { Component } from 'react';
import ListaDeMaterias from './listaDeMaterias/ListaDeMaterias';
import MateriaParaLista from './listaDeMaterias/MateriaParaLista';

class InfoDePersona extends Component {
   
    state={
        rememberMe: false
    };

    evaluarEstadoDeCheckBox = event  =>{
        this.setState({rememberMe: event.target.checked}); 
    };
    render() {
        return (
            <div class="col-md-12 col-lg-6 col-xl-4">
                <div class="card-shadow-primary card-border mb-3 card">
                    <div class="dropdown-menu-header">
                        <div class="dropdown-menu-header-inner bg-dark">
                            
                            <div class="menu-header-content">
                                
                                <div class="avatar-icon-wrapper mb-3 avatar-icon-xl">                                    
                                    {this. obtenerFotodePerfil()}
                                </div>
                                <div>

                                    {this.obtenerDatos()}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3">
                        <table  width="100%">
                           <tr align="center">
                           <th>
                                <h5>Lista de Materias</h5>
                            </th>
                           </tr>
                            <tr align="right">
                               
                                <th>
                                 <p>Aprobadas</p> 
                                <input id="checkbox_1" type="checkbox" 
                                checked={this.state.rememberMe}
                                onChange={this.evaluarEstadoDeCheckBox}
                                ></input>
                                </th>
                            </tr>
                        </table>

                        <ListaDeMaterias listaDeCursos={{
                            listaDeCursos : this.props.persona.listaDeCursosTomados,
                            estadoCheckBox : this.state.rememberMe
                        }}></ListaDeMaterias>
                    </div>
                    <div class="text-center d-block card-footer">
                        {this.obtenerInformacionDePromedio()}
                    </div>
                </div>
            </div>
        );
    } 


    obtenerFotodePerfil= () => {
        let imagen = this.props.persona.imagen;
        
        for (let i = 0; i < imagen; i++) {
            imagen = imagen[i];

        }
        return (
            <div class="avatar-icon"><img src={imagen} alt="Avatar 5" /></div>
        );
    }

    obtenerDatos  = () => {

        let nombre = this.props.persona.nombre;
        
    for (let i = 0; i < nombre; i++) {
        nombre = nombre[i];
        

    }

        let rol = this.props.persona.rol;

    for (let i = 0; i < rol; i++) {
        rol = rol[i];

    }
        return(
            <div>
                 <h5 class="menu-header-title">{nombre}</h5>
                <h6 class="menu-header-subtitle">{rol}</h6>
            </div>
        

        );
    }

    calcularPromedioDelEstudiante = () => {
        let cursos = this.props.persona.listaDeCursosTomados;
        let suma = 0;

        for (let i = 0; i < cursos.length; i++) {
            suma += cursos[i].nota;
        }

        return suma / cursos.length;
    }

    obtenerInformacionDePromedio = () => {
        return (
            <ul class="rm-list-borders list-group list-group-flush">
                <MateriaParaLista materia={{
                    nombre: "Promedio",
                    nota: this.calcularPromedioDelEstudiante()
                }}></MateriaParaLista>
            </ul>
        );
    }
}

export default InfoDePersona;

