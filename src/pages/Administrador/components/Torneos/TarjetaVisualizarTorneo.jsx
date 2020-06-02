import React, { Component } from "react";
import styled from "styled-components";
import fondoTorneo from "../../../../assets/fondoVisualizarWeb.jpg";
import fondoTorneoWeb from "../../../../assets/imgTorneoWeb.png";
import { Link } from "react-router-dom";
import "animate.css";
const Cabecera = React.lazy(() => import("../../../Home/Cabecera"));

const ContenedorGeneral = styled.div`
    position: relative;
    width: 100%;
`;

const ContenedorTarjeta = styled.div`
    position: relative;
    width: 90%;
    margin: 30px auto;
    left: 0;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px gray;

    @media screen and (min-width: 1300px) {
        width: 55%;
    }
`;

const ContenedorImagen = styled.div`
    img {
        position: relative;
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 10px 10px 0px 0px;
    }
    .mobile {
        display: block;
        @media screen and (min-width: 767px) {
            display: none;
        }
    }

    .web {
        display: none;

        @media screen and (min-width: 767px) {
            display: block;
        }
    }
    .fondo-verde {
        width: 100%;
        height: 100%;
        background: #74ba5f;
        opacity: 0.5;
        z-index: 99;
        position: absolute;
    }

    position: relative;
    width: 100%;
    height: 15vh;
    margin: 0;
    left: 0;
    background: #d9ffbf;
    border-radius: 5px 5px 0px 0px;

    @media screen and (min-width: 1300px) {
        height: 20vh;
    }
`;

const NombreTorneo = styled.div`
    h1 {
        color: #ffffff;
        font-size: 16px;
        font-weight: normal;
    }

    width: 100%;
    height: 5vh;
    background: #1a3748;
    color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1300px) {
        height: 7vh;
    }
`;

const ContenedorDetalles = styled.div`
    padding: 20px;

    p {
        position: relative;
        width: 100%;
        margin: 2px 20px 2px 20px;
        padding: 5px;
        color: #797c7d;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 19px;
    }

    position: relative;
    width: 100%;
    text-align: left;
`;

const ContenedorBotones = styled.div`
    padding-bottom: 32px;
    justify-content: center;
    width: 529px;
    margin: 50px auto 0;
    display: flex;
    button {
        outline: none;
        width: 130px;
        padding: 5px 0;
        border: none;
        background: #1a3748;
        color: white;
        border-radius: 20px;
        border: 1px solid var(--azul-3);
        transition: 0.24s ease-in-out;
    }
    button:nth-child(1) {
        grid-column-start: 0;
        grid-column-end: 1;
        margin-left: 16px;
    }
    button:nth-child(2) {
        grid-column-start: 3;
        grid-column-end: 4;
    }
    button:nth-child(3) {
        grid-column-start: 4;
        grid-column-end: 5;
        margin-left: auto;
    }

    button:hover {
        background: white;
        border: 1px solid #1a3748;
        color: #1a3748;
        cursor: pointer;
        font-weight: bold;
    }
`;
export default class TarjetaVisualizarTorneo extends Component {
    render() {
        return (
            <ContenedorGeneral className="animated fadeIn">
                <Cabecera />
                <ContenedorTarjeta>
                    <ContenedorImagen>
                        <div className="fondo-verde" />
                        <img
                            className="mobile"
                            src={fondoTorneo}
                            alt="Imagen Torneo"
                        />
                        <img
                            className="web"
                            src={fondoTorneoWeb}
                            alt="imagen Torneo"
                        />
                    </ContenedorImagen>
                    <NombreTorneo>
                        <h1>{this.props.location.state.data.name}</h1>
                    </NombreTorneo>
                    <ContenedorDetalles>
                        <p>Fecha: {this.props.location.state.data.date}</p>
                        <p>Lugar: {this.props.location.state.data.location}</p>
                        <p>Numero de equipos: 10</p>
                        <p>
                            Categoria: {this.props.location.state.data.category}
                        </p>
                        <p>
                            Descripcion:{" "}
                            {this.props.location.state.data.competition}
                        </p>
                    </ContenedorDetalles>
                    <ContenedorBotones>
                        <Link
                            to={{
                                pathname: "/torneos/partidos",
                                state: {
                                    tournamentId: this.props.location.state
                                        .tournamentId
                                }
                            }}
                        >
                            <button type="button"> Ver Partidos </button>
                        </Link>
                        <Link
                            to={{
                                pathname: "/torneos/jugadores",
                                state: {
                                    tournamentId: this.props.location.state
                                        .tournamentId
                                }
                            }}
                        >
                            <button type="button" id="verJugadores">
                                Ver Jugadores
                            </button>
                        </Link>

                        <button type="button" id="cancelar">
                            Realizar Sorteo
                        </button>
                    </ContenedorBotones>
                </ContenedorTarjeta>
            </ContenedorGeneral>
        );
    }
}
