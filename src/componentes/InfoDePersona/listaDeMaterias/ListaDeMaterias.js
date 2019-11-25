import React, { Component } from 'react';
import MateriaParaLista from './MateriaParaLista';
import InfoDePersona from '../InfoDePersona';


class ListaDeMaterias extends Component {

    constructor() {
        super();

        this.state = {
            labelDeNota: ""
        }
    }

    render() {

        let listaDeMateriasEnHTML = [];
        for (let i = 0; i < this.props.listaDeCursos.listaDeCursos.length; i++) {
           
            if(this.props.listaDeCursos.estadoCheckBox === true  ){
           
                if(this.props.listaDeCursos.listaDeCursos[i].nota > 3  ){
                    listaDeMateriasEnHTML.push(
                        <MateriaParaLista materia=
                            {{
                                nota: this.props.listaDeCursos.listaDeCursos[i].nota,
                                nombre: this.props.listaDeCursos.listaDeCursos[i].nombre,
                                ciclo: this.props.listaDeCursos.listaDeCursos[i].ciclo
                            }}
                        ></MateriaParaLista>
                    );

                
            }
        }else{

            listaDeMateriasEnHTML.push(
                <MateriaParaLista materia=
                    {{
                        nota: this.props.listaDeCursos.listaDeCursos[i].nota,
                        nombre: this.props.listaDeCursos.listaDeCursos[i].nombre,
                        ciclo: this.props.listaDeCursos.listaDeCursos[i].ciclo
                    }}
                ></MateriaParaLista>
                );
        }
           
        }


        return (
            <ul class="rm-list-borders list-group list-group-flush">
                {listaDeMateriasEnHTML}
            </ul>
        );
    }


}

export default ListaDeMaterias;
