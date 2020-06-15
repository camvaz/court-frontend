import React from "react";
import styled from "styled-components";
import Roger from "../../../../../assets/rogerfederer.png";
import { STORAGE_ENDPOINT } from "../../../../../environment/environment";

const TarjetaContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 24px 8px 16px;
    width: 330px;
    background: #ebebeb;
    border-radius: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &.loser {
        opacity: 0.5;
    }
    img {
        width: 50px;
    }
    p {
        font-size: 16px;
        &.score {
            margin-left: auto;
        }
        &.won {
            font-weight: 600;
        }
    }
`;

export default function Tarjeta({ score, playerName, photo, winner }) {
    return (
        <TarjetaContainer className={`${winner ? "" : "loser"}`}>
            <img src={`${STORAGE_ENDPOINT}/${photo}`} alt="" />
            <p>{playerName}</p>
            <p className={`score ${winner ? "won" : ""}`}>{score}</p>
        </TarjetaContainer>
    );
}
