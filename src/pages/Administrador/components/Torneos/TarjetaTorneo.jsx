import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import fondoTorneo from "../../../../assets/fondoTorneo.jpg";

const ContenedorTarjeta = styled.div`
    width: 100%;
    height: 210px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin: auto;
    }

    @media screen and (min-width: 767px) {
        display: inline-block;
    }
`;
const ContenedorImagen = styled.div`
    img {
        position: relative;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
    }

    position: relative;
    width: 270px;
    height: 155px;
    border-radius: 10px 10px 0px 0px;
`;
const ContenedorTitulo = styled.div`
    p {
        position: relative;
        width: 200px;
        margin: 0 0 0 16px;
        padding: 0;
        color: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #nombre {
        margin-top: 8px;
        font-family: Roboto;
        font-style: Medium;
        font-size: 16px;
        text-align: left;
    }
    #fecha {
        margin-bottom: 8px;
        font-family: Roboto;
        font-style: Regular;
        font-size: 12px;
        text-align: left;
    }

    position: relative;
    width: 100%;
    height: 63px;
    background: #1a3748;
`;

export default class TarjetaTorneo extends Component {
    tarjetaWasClicked() {
        //alert("Tarjeta clickeada");
    }

    render() {
        return (
            <ContenedorTarjeta onClick={this.tarjetaWasClicked}>
                <Link
                    to={{
                        pathname: "/torneos/visualizar",
                        state: {
                            data: this.props.data,
                            tournamentId: this.props.tournamentId
                        }
                    }}
                >
                    <ContenedorImagen>
                        <img src={fondoTorneo} alt="" />
                    </ContenedorImagen>
                    <ContenedorTitulo>
                        <p id="nombre">{this.props.nombreTorneo}</p>
                        <p id="fecha">{this.props.fechaTorneo}</p>
                    </ContenedorTitulo>
                </Link>
            </ContenedorTarjeta>
        );
    }
}
