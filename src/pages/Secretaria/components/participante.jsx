import React, { Component } from "react";
import imgUsuario from "../../../assets/imgUsuario.svg";
import cup from "../../../assets/cup.svg";
import "./participante.scss";
import { STORAGE_ENDPOINT } from "../../../environment/environment";

export class Participante extends Component {
    state = {
        nombre: "",
        edad: "",
        nacionalidad: "",
        correo: "",
        copas: ""
    };
    render() {
        const { player } = this.props;

        return (
            <div className="Contparticipante">
                <p>
                    <img
                        id="imguser"
                        src={`${STORAGE_ENDPOINT}/${player.photo}`}
                        alt="Usuario"
                    />
                </p>
                <h3>{}</h3>
                <p>Edad:años</p>
                <p>Nacionalidad: {player.country}</p>
                <p>correo: </p>
                <p id="cups">
                    <img src={cup} alt="copa" />5
                    <i className="contenedorBoton">
                        <button id="btnDlete"> Eliminar </button>
                    </i>
                </p>
            </div>
        );
    }
}
