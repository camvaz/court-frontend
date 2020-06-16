import React, { Component } from "react";
import styled from "styled-components";
import salir from "../../../../assets/salirBlanco.svg";
import { connect } from "react-redux";
import { Participante } from "../../../Secretaria/components/participante";
import "animate.css";

const ContenedorGeneral = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    text-align: center;
`;

const SubHeader = styled.div`
    margin: 72px auto 0;
    width: 85%;
    display: flex;
    flex-direction: column;
    padding: 0 50px ;
    
    #titulo {
        margin-top: 35px;
        font-family: SF Pro Display;
        font-style: Bold;
        font-size: 16px;
        color: #1a3748;
        text-align: left;
        @media screen and (min-width: 767px) {
            position: relative;
            margin-top: 0px;
            font-size: 25px;
        }
    }
    input {
        margin: 16px 0px;
        border: 1px solid #acb5bd;
        width: 80%;
        height: 20px;
        border-radius: 5px;
        padding: 8px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        @media screen and (min-width: 767px) {
            height: 30px;
        }
    }

    @media screen and (min-width: 767px) {
    }
`;

const ContenedorJugadores = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 24px;
    padding: 24px 0;
    margin: auto;
    position: relative;
    width: 85%;

    #imagen {
        position: relative;
        width: 100%;
        height: 40px;
        background: #1a3748;
        margin: 0px;

        img {
            position: relative;
            float: right;
            margin: 20px;
            width: 20px;
            margin: 9px;
        }
    }
`;

class Jugadores extends Component {
    state = {
        search: ""
    };

    filterSearch = e => {
        if (e) {
            e.persist();
            this.setState({
                search: e.target.value
            });
        }
    };

    render() {
        const { inscriptions, participants, players } = this.props;
        const { tournamentId } = this.props.location.state;
        const { search } = this.state;

        return (
            <ContenedorGeneral className="animated fadeIn">
                <SubHeader>
                    <h1 id="titulo">Jugadores del torneo</h1>
                    <input
                        type="text"
                        placeholder="Buscar Jugador"
                        value={search}
                        onChange={e => this.filterSearch(e)}
                    />
                </SubHeader>

                <ContenedorJugadores>
                    {Object.keys(inscriptions)
                        .filter(data => {
                            const { participant_id } = inscriptions[data];
                            const { player_id } = participants[participant_id];

                            return (
                                inscriptions[data].tournament_id ===
                                    parseInt(tournamentId) &&
                                players[player_id]?.user?.name.includes(search)
                            );
                        })
                        .map((dato, index) => {
                            const { participant_id } = inscriptions[dato];
                            const { player_id } = participants[participant_id];
                            return (
                                <Participante
                                    key={index}
                                    player={players[player_id]}
                                />
                            );
                        })}
                </ContenedorJugadores>

            </ContenedorGeneral>
        );
    }
}

const mapStateToProps = state => ({
    inscriptions: state.tournaments.inscriptions,
    participants: state.tournaments.participants,
    players: state.tournaments.players
});

export default connect(mapStateToProps)(Jugadores);
