import React, { Component } from 'react';
import ListaDeMaterias from './listaDeMaterias/ListaDeMaterias';
import MateriaParaLista from './listaDeMaterias/MateriaParaLista';

class InfoDePersona extends Component {

    constructor() {
        super();

        this.state = {
            labelDeNota: ""
        }
    }
    
    render() {
        return (
            <div class="col-md-12 col-lg-6 col-xl-4">
                <div class="card-shadow-primary card-border mb-3 card">
                    <div class="dropdown-menu-header">
                        <div class="dropdown-menu-header-inner bg-dark">
                            <div class="menu-header-content">
                                <div class="avatar-icon-wrapper mb-3 avatar-icon-xl">
                                    <div class="avatar-icon"><img src="assets/images/avatars/6.jpg" alt="Avatar 5" /></div>
                                </div>
                                <div>
                                    <h5 class="menu-header-title">Isabelle Day</h5>
                                    <h6 class="menu-header-subtitle">Security Officer</h6>
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
                                    <label for="boxcheck">Aprobadas</label><br></br>
                                    <input  id="boxcheck" type="checkbox" name="checkbox" unchange="hideContent()" value=""></input>
                                </th>
                            </tr>
                        </table>
                        <ListaDeMaterias id="lista" listaDeCursos={this.props.persona.listaDeCursosTomados}></ListaDeMaterias>
                    </div>
                    <div class="text-center d-block card-footer">
                        {this.obtenerInformacionDePromedio()}
                    </div>
                </div>
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
    
  
    hideContent() {
        let element = document.getElementById("lista");
        let check = document.getElementById("boxcheck");
        
        if (check.checked && element.nota >=3) {
            element.style.display='block';
        }
        else {
            element.style.display='none';
        }
    }
}
export default InfoDePersona;