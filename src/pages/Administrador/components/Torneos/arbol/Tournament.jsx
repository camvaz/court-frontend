import React from "react";
import styled from "styled-components";
import Round from "./Round";
import { connect } from "react-redux";

const GridContainer = styled.div`
    padding: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    h1 {
        text-align: left;
        font-size: 32px;
        width: 100%;
        margin-bottom: 48px;
    }
`;

const TournamentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 422px);
    &:last-child {
        min-height: 1683px;
    }
    h1 {
        font-size: 24px;
    }
`;

function Tournament(props) {
    const { matches } = props;
    const { tournamentId } = props.location.state;
    return (
        <GridContainer>
            <h1> Árbol de partidos</h1>
            <TournamentContainer>
                <h1>4ta ronda.</h1>
                <h1>Cuartos de final</h1>
                <h1>Semifinal</h1>
                <h1>Final</h1>
            </TournamentContainer>
            <TournamentContainer>
                <Round
                    round="fourth"
                    matches={Object.keys(matches)
                        .filter(
                            keyName =>
                                matches[keyName].round === "fourth" &&
                                matches[keyName].tournament_id ===
                                    parseInt(tournamentId)
                        )
                        .map(data => data)}
                />
                <Round
                    matches={Object.keys(matches)
                        .filter(
                            keyName =>
                                matches[keyName].round === "quarters" &&
                                matches[keyName].tournament_id ===
                                    parseInt(tournamentId)
                        )
                        .map(data => data)}
                    round="quarters"
                />
                <Round
                    matches={Object.keys(matches)
                        .filter(
                            keyName =>
                                matches[keyName].round === "semifinal" &&
                                matches[keyName].tournament_id ===
                                    parseInt(tournamentId)
                        )
                        .map(data => data)}
                    round="semifinal"
                />
                <Round
                    matches={Object.keys(matches)
                        .filter(
                            keyName =>
                                matches[keyName].round === "final" &&
                                matches[keyName].tournament_id ===
                                    parseInt(tournamentId)
                        )
                        .map(data => data)}
                    round="final"
                />
            </TournamentContainer>
        </GridContainer>
    );
}

const mapStateToProps = state => ({
    matches: state.tournaments.matches
});

export default connect(mapStateToProps)(Tournament);
