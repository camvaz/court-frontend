import React, { Component } from "react";
import styled from 'styled-components';

const ContenedorGeneral = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
    text-align: center;
`;

const ContenedorTarjeta = styled.div`
    margin: auto;
    vertical-align: middle;
    width: 200px;
    height: 300px;
    border: 1px solid gray;
`;

export default class TarjetaJugador extends Component{
    render(){
        return(
            <ContenedorGeneral>
                <ContenedorTarjeta>

                </ContenedorTarjeta>
            </ContenedorGeneral>
        )
    }
}