import React, { Component } from "react";
import TarjetaResultados from "./TarjetaResultados";
import styled from "styled-components";
import { STORAGE_ENDPOINT } from "../../environment/environment";
import { connect } from "react-redux";
import "animate.css";

const Contenedor = styled.div`
    width: 100%;
    position: relative;
    height: 100%;
    padding-top: 20px;
`;

const ContenedorCategorias = styled.div`
    height: 80px;
    width: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    padding: 10px;
    grid-template-areas:
        "boton1 boton2 boton3 boton4"
        "buscador buscador buscador buscador";
    align-items: center;

    @media screen and (min-width: 767px) {
        grid-template-areas: "boton1 boton2 boton3 boton4 buscador buscador";
    }

    button:nth-child(1) {
        grid-area: boton1;
    }
    button:nth-child(2) {
        grid-area: boton2;
    }
    button:nth-child(3) {
        grid-area: boton3;
    }
    button:nth-child(4) {
        grid-area: boton4;
    }

    input {
        grid-area: buscador;
        height: 25px;
        border-radius: 10px;
        box-shadow: none;
        padding: 10px;
        outline: none;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
    color: gray;
    cursor: pointer;
    margin: 0 10px;
    padding: 5px 0;
    outline: none;

    &:active,
    &:hover {
        border-bottom: 2px solid var(--verde-1);
        font-size: 0.9rem;
    }
    div {
        color: gray;
    }
`;
const ContenedorTarjetas = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: auto;

    @media screen and (min-width: 767px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 1287px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

class Categorias extends Component {
    render() {
        const { setInput, date } = this.props;
        return (
            <ContenedorCategorias className="animated fadeIn">
                <Button>
                    <div
                        onClick={() => setInput("currentRound", "fourth")}
                        to="resultados/4taronda"
                    >
                        4ta Ronda
                    </div>
                </Button>
                <Button>
                    <div
                        onClick={() => setInput("currentRound", "quarters")}
                        to="resultados/4tosfinal"
                    >
                        4tos de final
                    </div>
                </Button>
                <Button>
                    <div
                        onClick={() => setInput("currentRound", "semifinal")}
                        to="resultados/semifinal"
                    >
                        SemiFinal
                    </div>
                </Button>
                <Button>
                    <div
                        onClick={() => setInput("currentRound", "final")}
                        to="resultados/final"
                    >
                        Final
                    </div>
                </Button>

                <input
                    placeholder="Fecha del partido"
                    value={date}
                    onChange={e => {
                        setInput("date", e.target.value);
                    }}
                />
            </ContenedorCategorias>
        );
    }
}

class ResultadosPartidos extends Component {
    //Pasar Json de Sets y resultados por props
    //Pasar datos principales por props

    state = {
        currentRound: "fourth",
        date: ""
    };

    setInput = (field, data) => {
        this.setState({
            [field]: data
        });
    };

    render() {
        const { partidos, players } = this.props;
        const { tournamentId } = this.props.location.state;
        console.log(tournamentId);
        console.log(partidos);
        
        
        return (
            <Contenedor>
                <Categorias date={this.state.date} setInput={this.setInput} />

                <ContenedorTarjetas className="animated fadeIn">
                    {partidos &&
                        Object.keys(partidos)
                            .filter(
                                data =>
                                    partidos[data].tournament_id ===
                                        parseInt(tournamentId) &&
                                    partidos[data].round ===
                                        this.state.currentRound &&
                                    partidos[data].started_at.includes(
                                        this.state.date
                                    )
                            )
                            .map((keyName, index) => {
                                const player1 =
                                    players[partidos[keyName]?.player1];
                                const player2 =
                                    players[partidos[keyName]?.player2];

                                return (
                                    index < 31 && (
                                        <TarjetaResultados
                                            banderaJugador1={`${STORAGE_ENDPOINT}/storage/flags/${
                                                player1.country
                                                    .charAt(0)
                                                    .toLowerCase() +
                                                player1.country.slice(1)
                                            }.png`}
                                            banderaJugador2={`${STORAGE_ENDPOINT}/storage/flags/${
                                                player2.country
                                                    .charAt(0)
                                                    .toLowerCase() +
                                                player2.country.slice(1)
                                            }.png`}
                                            jugador1={player1.user.name}
                                            jugador2={player2.user.name}
                                            fecha={
                                                partidos[keyName]?.started_at
                                            }
                                            horaInicio={
                                                partidos[keyName]?.started_at
                                            }
                                            status={"Finalizado"}
                                            imagen1={`${STORAGE_ENDPOINT}/${player1.photo}`}
                                            imagen2={`${STORAGE_ENDPOINT}/${player2.photo}`}
                                            key={index}
                                            id={keyName}
                                        />
                                    )
                                );
                            })}
                </ContenedorTarjetas>
            </Contenedor>
        );
    }
}

const mapStateToProps = state => ({
    partidos: state.tournaments.matches,
    players: state.tournaments.players
});

export default connect(mapStateToProps)(ResultadosPartidos);
