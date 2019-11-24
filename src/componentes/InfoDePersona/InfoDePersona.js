import React, { Component } from 'react';
import ListaDeMaterias from './listaDeMaterias/ListaDeMaterias';
import MateriaParaLista from './listaDeMaterias/MateriaParaLista';

class InfoDePersona extends Component {
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
                                 <p>Aprobadas</p> 
                                <input  id="boxcheck" type="checkbox" value="">{this.obtenerMateriasAprobadas()}</input>
                                </th>
                            </tr>
                        </table>

                        <ListaDeMaterias listaDeCursos={this.props.persona.listaDeCursosTomados}></ListaDeMaterias>
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

    obtenerMateriasAprobadas = () => {
        var checkb = document.getElementById('boxcheck');
        window.onload = function filtrarMaterias() {
         
                if (checkb.checked === true) {
                    var checkeado = true;
                }
                checkb.addEventListener("click", filtrarMaterias);
                
                console.log(checkeado);

        }
    }

}

export default InfoDePersona;
