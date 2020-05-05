import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";

const ComponenteCabecera = styled.div`
    width: 100%;
    position: relative;

    @media screen and (min-width: 767px) {
        margin: 0;
        height: 50px;
        margin-bottom: 50px;
    }

    h1 {
        font-size: 1.4rem;
        position: relative;
        width: 200px;
        padding: 10px;

        @media screen and (min-width: 767px) {
            position: absolute;
            top: 0;
            right: 60px;
            text-align: right;
            margin-top: 5px;
        }
    }
    img {
        height: 50px;
        top: 0;
        right: 10px;
        position: absolute;
    }
`;

function Cabecera() {
    return (
        <ComponenteCabecera>
            <h1>CROSS COURT</h1>
            <img src={Logo} alt="Logo" />
        </ComponenteCabecera>
    );
}

export default Cabecera;
