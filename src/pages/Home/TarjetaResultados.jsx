import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { API_ENDPOINT } from "../../environment/environment";
import { toast } from "react-toastify";
import "animate.css";
import { connect } from "react-redux";

const ContenedorTarjeta = styled.div`
    position: relative;
    width: 100%;
    background: white;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    &:hover .componente-tarjeta,
    &:active .componente-tarjeta {
        top: -5px;
        box-shadow: 3px 3px 20px gray;
    }
`;

const ComponenteTarjeta = styled.div`
    position: relative;
    width: 300px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px gray;
    padding: 0 20px;
    transition: 300ms ease-in-out;
    top: 0;

    .btn-wrapper {
        margin: 24px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        button.editar {
            background: var(--azul-3);
            border: none;
            outline: none;
            padding: 6px 48px 8px;
            border-radius: 10px;
            color: var(--blanco);
            margin: auto;
            cursor: pointer;
        }
    }

    .fecha-hora-status {
        position: relative;
        margin-top: 10px;
        p {
            font-size: 0.7rem;
        }

        .fecha-hora,
        .status {
            display: inline-block;
            width: 50%;
        }

        .status {
            position: relative;
            text-align: right;
            height: 50px;
            top: -10px;
            color: var(--verde-3);
        }
    }
`;

const ComponenteJugadores = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const NombreJugador = styled.div`
    display: flex;
    align-items: center;
    margin: 16px 0;

    img {
        width: 20px;
        display: inline-block;
        margin: 0px 5px;
    }
    h3 {
        display: inline-block;
        font-size: 0.7rem;
        font-weight: bold;
    }
`;

const DatosEstadistica = styled.div`
    position: relative;
    width: 100%;
    p,
    input {
        font-size: 0.7rem;
        margin: 10px 0;
    }

    p:nth-child(1),
    p:nth-child(3) {
        width: 10%;
        display: inline-block;
        text-align: center;
    }
    p:nth-child(2) {
        width: 80%;
        text-align: center;
        display: inline-block;
    }
    input:nth-child(1),
    input:nth-child(3) {
        width: 10%;
        display: inline-block;
        text-align: center;
    }
    input:nth-child(2) {
        width: 80%;
        text-align: center;
        display: inline-block;
    }
`;

const ComponenteDatos = styled.div``;

const Sets = styled.div`
    width: 100%;
    position: relative;
    padding: 5px 0;
    border-bottom: 1px solid #efefef;
    margin-top: -20px;
`;

const PuntajeJugador = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p,
    input {
        font-size: 0.7rem;
    }
    .nombre-jugador {
        display: inline-block;
    }
    .sets {
        display: inline-block;
        text-align: right;

        p,
        input {
            text-align: center;
            width: 20px;
            display: inline-block;
        }
    }
`;

const ComponenteImagenesJugadores = styled.div`
    img {
        width: 40%;
        position: relative;
        left: 50%;
        transform: translateX(-100%);
    }
    h2 {
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-weight: bold;
    }
`;

function Estadistica(props) {
    return !props.editingState ? (
        <DatosEstadistica>
            <p>{props.resultadoJugador1}</p>
            <p>{props.caracteristica}</p>
            <p>{props.resultadoJugador2}</p>
        </DatosEstadistica>
    ) : (
        <DatosEstadistica>
            <input
                onClick={e => e.stopPropagation()}
                type="text"
                value={props.resultadoJugador1}
                onChange={e => {
                    e.persist();
                    props.editStat(`${props.statField}P1`, e.target.value);
                }}
            />
            <p>{props.caracteristica}</p>
            <input
                onClick={e => e.stopPropagation()}
                type="text"
                value={props.resultadoJugador2}
                onChange={e => {
                    e.persist();
                    props.editStat(`${props.statField}P2`, e.target.value);
                }}
            />
        </DatosEstadistica>
    );
}

function Puntaje(props) {
    //En el div con la clase sets se desglozara tantos p como sets sean

    return (
        <PuntajeJugador>
            <p className="nombre-jugador">{props.jugador}</p>
            <div className="sets">
                {props.sets.map((data, index) =>
                    !props.editingState ? (
                        <p key={index}>
                            {props.player === 1
                                ? data.player1Score
                                : data.player2Score}
                        </p>
                    ) : (
                        <input
                            onClick={e => e.stopPropagation()}
                            type="text"
                            key={index}
                            value={
                                props.player === 1
                                    ? data.player1Score
                                    : data.player2Score
                            }
                            onChange={e => {
                                e.persist();
                                props.editSetData(
                                    props.player === 1
                                        ? "player1Score"
                                        : "player2Score",
                                    index,
                                    e.target.value
                                );
                            }}
                        />
                    )
                )}
            </div>
        </PuntajeJugador>
    );
}

function ComponenteSets(props) {
    return (
        <Sets>
            <Puntaje
                jugador={props.jugador1}
                sets={props.sets}
                editingState={props.editingState}
                editSetData={props.editSetData}
                player={1}
            ></Puntaje>
            <Puntaje
                jugador={props.jugador2}
                sets={props.sets}
                editSetData={props.editSetData}
                editingState={props.editingState}
                player={2}
            ></Puntaje>
        </Sets>
    );
}

function ComponenteResultados(props) {
    return (
        <ComponenteDatos>
            <ComponenteSets
                sets={props.sets}
                jugador1={props.jugador1}
                jugador2={props.jugador2}
                editingState={props.editingState}
                editSetData={props.editSetData}
            />

            <Estadistica
                resultadoJugador1={props.stats.acesP1}
                caracteristica="Aces"
                resultadoJugador2={props.stats.acesP2}
                editingState={props.editingState}
                editStat={props.editStat}
                statField="aces"
            />
            <Estadistica
                resultadoJugador1={props.stats.doubleFaultP1}
                caracteristica="Dobles faltas"
                resultadoJugador2={props.stats.doubleFaultP2}
                editingState={props.editingState}
                editStat={props.editStat}
                statField="doubleFault"
            />
            <Estadistica
                resultadoJugador1={props.stats.firstServicePercentageP1}
                caracteristica="% de primer servicio"
                resultadoJugador2={props.stats.firstServicePercentageP2}
                editingState={props.editingState}
                editStat={props.editStat}
                statField="firstServicePercentage"
            />
            <Estadistica
                resultadoJugador1={props.stats.servicePointsWonP1}
                caracteristica="Puntos de servicio ganados"
                resultadoJugador2={props.stats.servicePointsWonP2}
                editingState={props.editingState}
                editStat={props.editStat}
                statField="servicePointsWon"
            />
            <Estadistica
                resultadoJugador1={props.stats.tiebreaksWonP1}
                caracteristica="Tiebreaks"
                resultadoJugador2={props.stats.tiebreaksWonP2}
                editingState={props.editingState}
                editStat={props.editStat}
                statField="tiebreaksWon"
            />
            <Estadistica
                resultadoJugador1={props.stats.serverGamesWonP1}
                caracteristica="Juegos ganados al servicio"
                resultadoJugador2={props.stats.serverGamesWonP2}
                editingState={props.editingState}
                editStat={props.editStat}
                statField="serverGamesWon"
            />
            {props.user.role && (
                <div className="btn-wrapper">
                    <button
                        className="editar"
                        onClick={e => {
                            e.stopPropagation();
                            props.setEditing(!props.editingState);
                            props.setDesplegado(true);
                            if (!props.editingState) {
                                toast.info("Modo de edición activado");
                            } else {
                                toast.info("Guardando cambios...");
                                props.submitMatchChanges();
                            }
                        }}
                    >
                        {props.editingState ? "Guardar" : "Editar"}
                    </button>
                </div>
            )}
        </ComponenteDatos>
    );
}
function Jugadores(props) {
    return (
        <ComponenteJugadores>
            <NombreJugador>
                <img src={props.banderaJugador1} alt="" />
                <h3>{props.jugador1}</h3>
            </NombreJugador>

            <NombreJugador>
                <h3>{props.jugador2}</h3>
                <img src={props.banderaJugador2} alt="" />
            </NombreJugador>
        </ComponenteJugadores>
    );
}

function TarjetaResultados(props) {
    const [estaDesplegado, setDesplegado] = useState(false);
    const [editing, setEditing] = useState(false);
    const [matchData, setMatchData] = useState({});

    const fetchPartidoById = async () => {
        const response = await fetch(`${API_ENDPOINT}/matches/${props.id}`)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .catch(e => toast.error("Error de red"));

        if (response && response.success) {
            setMatchData(response.data);
        }
    };

    useEffect(() => {
        if (firstMountRef.current) {
            fetchPartidoById();
            firstMountRef.current = false;
        }
        return () => {};
    }, [matchData, fetchPartidoById]);

    const firstMountRef = useRef(true);

    const editSetData = (setField, setIndex, data) => {
        const setArray = matchData.sets;
        setArray[setIndex][setField] = data;

        setMatchData(state => ({
            ...state,
            sets: setArray
        }));
    };

    const editStat = (statField, data) => {
        setMatchData(state => ({
            ...state,
            stat: {
                ...state.stat,
                [statField]: data
            }
        }));
    };

    const submitMatchChanges = async () => {
        const setFormData = new URLSearchParams();
        const statFormData = new URLSearchParams();
        let setArray = [];

        matchData.sets.forEach((data, index) => {
            setArray.push({});
            // setArray[index]["nSet"] = (index + 1).toString();
            // setArray[index]["player1Score"] = data.player1Score.toString();
            // setArray[index]["player2Score"] = data.player2Score.toString();

            setFormData.append(`sets[${index}][nSet]`, (index + 1).toString());
            setFormData.append(
                `sets[${index}][player1Score]`,
                data.player1Score.toString()
            );
            setFormData.append(
                `sets[${index}][player2Score]`,
                data.player2Score.toString()
            );
        });
        console.log(setArray);
        // setFormData.append("sets", setArray);

        statFormData.append("acesP1", parseInt(matchData.stat.acesP1));
        statFormData.append("acesP2", parseInt(matchData.stat.acesP2));

        statFormData.append(
            "doubleFaultP1",
            parseInt(matchData.stat.doubleFaultP1)
        );
        statFormData.append(
            "doubleFaultP2",
            parseInt(matchData.stat.doubleFaultP2)
        );
        statFormData.append(
            "firstServicePercentageP1",
            parseInt(matchData.stat.firstServicePercentageP1)
        );
        statFormData.append(
            "firstServicePercentageP2",
            parseInt(matchData.stat.firstServicePercentageP2)
        );
        statFormData.append(
            "servicePointsWonP1",
            parseInt(matchData.stat.servicePointsWonP1)
        );
        statFormData.append(
            "servicePointsWonP2",
            parseInt(matchData.stat.servicePointsWonP2)
        );
        statFormData.append(
            "tiebreaksWonP1",
            parseInt(matchData.stat.tiebreaksWonP1)
        );
        statFormData.append(
            "tiebreaksWonP2",
            parseInt(matchData.stat.tiebreaksWonP2)
        );
        statFormData.append(
            "serverGamesWonP1",
            parseInt(matchData.stat.serverGamesWonP1)
        );
        statFormData.append(
            "serverGamesWonP2",
            parseInt(matchData.stat.serverGamesWonP2)
        );
        console.log(setFormData);

        const responseSetUpdate = await fetch(
            `${API_ENDPOINT}/sets/${matchData.id}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${props.userSession.token}`
                },
                body: setFormData
            }
        )
            .then(res => {
                console.log(res);
                return res.json();
            })
            .catch(e => toast.error("Error de red"));
        console.log(responseSetUpdate);

        const responseStatUpdate = await fetch(
            `${API_ENDPOINT}/stats/${matchData.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${props.userSession.token}`
                },
                body: statFormData
            }
        )
            .then(res => {
                console.log(res);
                return res.json();
            })
            .catch(e => toast.error("Error de red"));
        console.log(responseStatUpdate);

        toast.success("Cambios actualizados con éxito.");
    };

    return (
        <ContenedorTarjeta
            className="animated fadeIn"
            onClick={() => setDesplegado(!estaDesplegado)}
        >
            <ComponenteImagenesJugadores>
                <img className="img-jugador1" src={props.imagen1} />
                <h2>VS</h2>
                <img className="img-jugador2" src={props.imagen2} />
            </ComponenteImagenesJugadores>
            <ComponenteTarjeta className="componente-tarjeta">
                <Jugadores
                    banderaJugador1={props.banderaJugador1}
                    banderaJugador2={props.banderaJugador2}
                    jugador1={props.jugador1}
                    jugador2={props.jugador2}
                />
                <div className="fecha-hora-status">
                    <div className="fecha-hora">
                        <p>{props.fecha}</p>
                        <p>{props.horaInicio}</p>
                    </div>

                    <p className="status"> {props.status}</p>
                </div>
                {estaDesplegado && (
                    <ComponenteResultados
                        user={props.userSession.user}
                        editSetData={editSetData}
                        editStat={editStat}
                        setEditing={setEditing}
                        editingState={editing}
                        stats={matchData.stat}
                        sets={matchData.sets}
                        jugador1={props.jugador1}
                        jugador2={props.jugador2}
                        setDesplegado={setDesplegado}
                        submitMatchChanges={submitMatchChanges}
                    />
                )}
                {/* {
                    props.userSession.user.role && (

                    )
                } */}
            </ComponenteTarjeta>
        </ContenedorTarjeta>
    );
}

const mapStateToProps = state => ({
    userSession: state.userSession.session
});

export default connect(mapStateToProps)(TarjetaResultados);
