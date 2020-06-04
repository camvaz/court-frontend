import React from "react";
import Match from "./Match";
import styled from "styled-components";

const RoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    width: fit-content;
    justify-content: space-around;
    .match-container {
        margin-bottom: 72px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export default function Round({ matches, round }) {
    return (
        <RoundContainer>
            {matches.map((data, index) => (
                <Match key={index} round={round} matchId={data} />
            ))}
        </RoundContainer>
    );
}
