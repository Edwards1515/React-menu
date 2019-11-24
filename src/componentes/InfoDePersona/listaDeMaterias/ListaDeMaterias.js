import React, { Component } from 'react';
import MateriaParaLista from './MateriaParaLista';

class ListaDeMaterias extends Component {

    constructor() {
        super();

        this.state = {
            labelDeNota: ""
        }
    }

    render() {

        let listaDeMateriasEnHTML = [];
        for (let i = 0; i < this.props.listaDeCursos.length; i++) {
            listaDeMateriasEnHTML.push(
                <MateriaParaLista materia=
                    {{
                        nota: this.props.listaDeCursos[i].nota,
                        nombre: this.props.listaDeCursos[i].nombre,
                        ciclo: this.props.listaDeCursos[i].ciclo
                    }}
                ></MateriaParaLista>
            );
        }


        return (
            <ul class="rm-list-borders list-group list-group-flush">
                {listaDeMateriasEnHTML}
            </ul>
        );
    }


}

export default ListaDeMaterias;
