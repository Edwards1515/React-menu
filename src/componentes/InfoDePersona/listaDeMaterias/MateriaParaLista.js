import React, { Component } from 'react';

class MateriaParaLista extends Component {

    render() {
        return (
            <li class="list-group-item">
                <div class="widget-content p-0">
                    <div class="widget-content-wrapper">

                        <div class="widget-content-left">
                            <div class="widget-heading">{this.props.materia.nombre}</div>
                            <div class="widget-subheading">{this.props.materia.ciclo}</div>
                        </div>
                        <div class="widget-content-right">
                            <div class="font-size-xlg text-muted">
                                {this.obtenerTextoConColorSegunNota()}
                                {this.obtenerFlechaSegunNotaDefinitiva()}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    obtenerTextoConColorSegunNota = () => {

        if (this.props.materia.nota < 3) {
            return (
                <span style={{ color: "red" }}>{this.props.materia.nota}
                </span>)
        }
        else {
            return (<span style={{ color: "black" }}>{this.props.materia.nota}
            </span>);
        }
    }

    obtenerFlechaSegunNotaDefinitiva = () => {
        if (this.props.materia.nota >= 3.0) {
            return (<small class="text-success pl-2" >
                <i class="fa fa-angle-up ">
                </i>
            </small>);
        }
        else {
            return (<small class="text-danger pl-2" >
                <i class="fa fa-angle-down ">
                </i>
            </small>);
        }

    }
}

export default MateriaParaLista;