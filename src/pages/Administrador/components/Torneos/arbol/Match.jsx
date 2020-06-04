import React, { useState, useEffect } from "react";
import Tarjeta from "./Tarjeta";
import styled from "styled-components";
import { toast } from "react-toastify";
import { API_ENDPOINT } from "../../../../../environment/environment";
const MatchContainer = styled.div`
    display: flex;
    align-items: center;
    .game-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.quarters {
            .card-container {
                position: relative;
                bottom: 32px;
                &:last-child {
                    bottom: auto;
                    top: 29px;
                }
                .vertical-line {
                    height: 110px;
                    bottom: 54px;
                }
                &:first-child {
                    .vertical-line {
                        top: 54px;
                    }
                }
            }
        }
        &.semifinal {
            .card-container {
                position: relative;
                bottom: 83px;
                &:last-child {
                    bottom: auto;
                    top: 83px;
                }
                .vertical-line {
                    height: 221px;
                    bottom: 109px;
                }
                &:first-child {
                    .vertical-line {
                        top: 109px;
                    }
                }
            }
        }
        &.final {
            .card-container {
                position: relative;
                bottom: 390px;
                &:last-child {
                    bottom: auto;
                    top: 390px;
                }
            }
        }

        .card-container {
            display: flex;
            align-items: center;
            .card-line {
                width: 43px;
                height: 3px;
                background-color: #aebac3;
                &.winner {
                    background-color: #4d8af0;
                }
            }
            .vertical-line {
                height: 49.7px;
                position: relative;
                width: 3px;
                background-color: #aebac3;
                bottom: 23.3px;
                &.winner {
                    background-color: #4d8af0;
                }
            }
            &:first-child {
                .vertical-line {
                    top: 23.2px;
                }
                margin-bottom: 48px;
            }
        }
    }
    .horizontal-line {
        width: 46px;
        position: relative;
        height: 3px;
        right: 3px;
        background-color: #4d8af0;
    }
`;

export default function Match({ round, matchId }) {
    const [matchData, setMatchData] = useState({});

    const fetchMatchData = async () => {
        const response = await fetch(`${API_ENDPOINT}/matches/${matchId}`)
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
        fetchMatchData();
        return () => {};
    }, []);

    const getScore = () => {
        if (!matchData.sets) return {};
        let score1 = 0;
        let score2 = 0;
        matchData.sets.forEach(data => {
            if (data.player1Score > data.player2Score) ++score1;
            else ++score2;
        });
        return {
            score1,
            score2
        };
    };

    return (
        <MatchContainer className="match-container">
            <div className={`game-container ${round}`}>
                <div className="card-container">
                    <Tarjeta
                        score={getScore().score1}
                        playerName={matchData?.participant1?.player?.user?.name}
                        photo={matchData?.participant1?.player?.photo}
                        winner={matchData.winner_id === matchData.player1}
                    />
                    {round !== "final" && (
                        <div
                            className={`card-line ${
                                matchData.winner_id === matchData.player1
                                    ? "winner"
                                    : ""
                            }`}
                        ></div>
                    )}
                    {round !== "final" && (
                        <div
                            className={`vertical-line ${
                                matchData.winner_id === matchData.player1
                                    ? "winner"
                                    : ""
                            }`}
                        ></div>
                    )}
                </div>
                <div className="card-container">
                    <Tarjeta
                        score={getScore().score2}
                        playerName={matchData?.participant2?.player?.user?.name}
                        photo={matchData?.participant2?.player?.photo}
                        winner={matchData.winner_id === matchData.player2}
                    />
                    {round !== "final" && (
                        <div
                            className={`card-line ${
                                matchData.winner_id === matchData.player2
                                    ? "winner"
                                    : ""
                            }`}
                        ></div>
                    )}
                    {round !== "final" && (
                        <div
                            className={`vertical-line ${
                                matchData.winner_id === matchData.player2
                                    ? "winner"
                                    : ""
                            }`}
                        ></div>
                    )}
                </div>
            </div>
            {round !== "final" && (
                <div
                    className={`horizontal-line ${
                        matchData.winner_id ? "winner" : ""
                    }`}
                ></div>
            )}
        </MatchContainer>
    );
}
