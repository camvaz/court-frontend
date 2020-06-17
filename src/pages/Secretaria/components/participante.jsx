import React, { Component } from "react";
import cup from "../../../assets/cup.svg";
import "./participante.scss";
import "animate.css";
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
            <div className="Contparticipante animated fadeIn">
                <div className="border-img">
                    <img
                        id="imguser"
                        src={`${STORAGE_ENDPOINT}/${player.photo}`}
                        alt="Usuario"
                    />
                </div>
                <h3>{player.user?.name}</h3>
                <p>ATP Points:{player.atpPoints}</p>
                <p className="nacionalidad">
                    Nacionalidad:
                    <img
                        className="flag"
                        src={`${STORAGE_ENDPOINT}/storage/flags/${
                            player.country.charAt(0).toLowerCase() +
                            player.country.slice(1)
                        }.png`}
                        alt=""
                    />
                </p>
                <div id="cups">
                    <img src={cup} alt="copa" />5
                </div>
            </div>
        );
    }
}
