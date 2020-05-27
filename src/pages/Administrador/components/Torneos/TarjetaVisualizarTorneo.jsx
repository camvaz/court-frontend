import React, { Component } from "react";
import styled from "styled-components";
import fondoTorneo from "../../../../assets/fondoVisualizarWeb.jpg";
import { Link } from "react-router-dom";
const Cabecera = React.lazy(() => import("../../../Home/Cabecera"));

const ContenedorGeneral = styled.div`
    position: relative;
    width: 100%;
`;
const ContenedorTarjeta = styled.div`
    position: relative;
    width: 340px;
    height: 489px;
    margin: 30px auto;
    left: 0;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 4px 3px rgba(150, 150, 150, 1);
    -moz-box-shadow: 0px 0px 4px 3px rgba(150, 150, 150, 1);
    box-shadow: 0px 0px 4px 3px rgba(150, 150, 150, 1);

    @media screen and (min-width: 1300px) {
        width: 650px;
    }
`;

const ContenedorImagen = styled.div`
    img {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0px 0px;
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
        position: relative;
        vertical-align: middle;
        color: white;
        font: "San Francisco", Helvetica, Arial, san-serif;
        font-size: 15px;
        font-weight: normal;
    }

    position: relative;
    padding-top: 17px;
    width: 100%;
    height: 5vh;
    margin: 0;
    left: 0;
    background: #1a3748;
    font-size: 15px;
    color: white;
    text-align: center;

    @media screen and (min-width: 1300px) {
        height: 7vh;
    }
`;

const ContenedorDetalles = styled.div`
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
    padding-top: 20px;
`;

const ContenedorBotones = styled.div`
    #verJugadores {
        position: relative;
        float: left;
        margin-left: 10px;
        width: 100px;
        height: 26.2px;
        border: 2px solid #1a3748;
        border-radius: 2px;
        background: none;

        @media screen and (min-width: 1300px) {
            margin-left: 40px;
            width: 170px;
        }
    }
    #cancelar {
        position: relative;
        margin-left: 10px;
        width: 99.55px;
        height: 26.2px;
        border: 1px solid #eb5757;
        border-radius: 50px;
        background: #eb5757;
        color: white;

        @media screen and (min-width: 1300px) {
            margin-right: 30px;
            float: right;
        }
    }
    #editar {
        position: relative;
        margin-left: 10px;
        width: 99.55px;
        height: 26.2px;
        border: 1px solid #1a3748;
        border-radius: 50px;
        background: #1a3748;
        color: white;

        @media screen and (min-width: 1300px) {
            float: right;
        }
    }

    position: absolute;
    padding-top: 10px;
    width: 100%;
    height: 5.5vh;
    bottom: 1px;
`;
export default class TarjetaVisualizarTorneo extends Component {
    render() {
        return (
            <ContenedorGeneral>
                <Cabecera />
                <ContenedorTarjeta>
                    <ContenedorImagen>
                        <img src={fondoTorneo} alt="" />
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
                            Cancelar Torneo
                        </button>
                        <button type="button" id="editar">
                            Editar
                        </button>
                    </ContenedorBotones>
                </ContenedorTarjeta>
            </ContenedorGeneral>
        );
    }
}
