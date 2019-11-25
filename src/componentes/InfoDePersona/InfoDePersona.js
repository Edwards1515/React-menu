import React, { Component } from 'react';
import ListaDeMaterias from './listaDeMaterias/ListaDeMaterias';
import MateriaParaLista from './listaDeMaterias/MateriaParaLista';

class InfoDePersona extends Component {
    state={
        rememberMe: false
    };

    evaluarEstadoDeCheckBox = event  =>{
        this.setState({rememberMe: event.target.checked});
        if(this.state.rememberMe === false){
            
            var estadoCheckBox = true;
            console.log(estadoCheckBox);
            console.log('chekeado');
        }
       
    };
    render() {
        return (
            <div class="col-md-12 col-lg-6 col-xl-4">
                <div class="card-shadow-primary card-border mb-3 card">
                    <div class="dropdown-menu-header">
                        <div class="dropdown-menu-header-inner bg-dark">
                            
                            <div class="menu-header-content">
                                
                                <div class="avatar-icon-wrapper mb-3 avatar-icon-xl">
                                    Perfil
                                    
                                    <div class="avatar-icon"><img src="assets/images/avatars/6.jpg" alt="Avatar 5" /></div>
                                </div>
                                <div>

                                    {this.obtenerDatos()}
                                    
                                </div>
                                <div class="menu-header-btn-pane pt-1">
                                    <button class="btn-icon btn btn-warning btn-sm">View Complete Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3">
                        <table  width="100%">
                           <tr>
                           <th>
                                <p>Lista de Materias</p>
                            </th>
                           </tr>
                            <tr align="right">
                               
                                <th>
                                 <p>Aprobadas</p> 
                                <input type="checkbox" 
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


    obtenerDatos  = () => {

        
    for (let i = 0; i < this.props.persona.nombre.length; i++) {
        var nombre = this.props.persona.nombre[i];
        

    }
    for (let i = 0; i < this.props.persona.rol.length; i++) {
        var rol = this.props.persona.rol[i];

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
