import React, { Component } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import fondoTorneo from "../../../../assets/fondoTorneo.jpg";

const ContenedorTarjeta = styled.div`
    position: relative;
    width: 300px;
    height: 210px;
    margin: auto;
    left:0;
    margin-top: 30px;

    @media screen and (min-width: 767px){ 
        display: inline-block;   
        margin: 15px;
    }
`;
const ContenedorImagen = styled.div`
    img{
        position: relative;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
    }

    position: relative;
    left: 20px;
    width: 270px;
    height: 155px;
    border-radius: 10px 10px 0px 0px;
`;
const ContenedorTitulo = styled.div`
    p{
        position: relative;
        width: 200px;
        margin: 0;
        padding: 0;
        color: white;
    }
    #nombre{
        font-family: Roboto;
        font-style: Medium;
        font-size: 16px;
        text-align: left;
        margin-left: 20px;
        height: 20px;
    }
    #fecha{
        font-family: Roboto;
        font-style: Regular;
        font-size: 12px;
        text-align: left;
        margin-left: 20px
    }    

    position: relative;
    width: 100%;
    height: 50px;
    background: #1A3748;
`;

export default class TarjetaTorneo extends Component{
    tarjetaWasClicked(){
        //alert("Tarjeta clickeada");
    }

    render(){
        return(
            <ContenedorTarjeta onClick={this.tarjetaWasClicked}>
                <Link to="/torneos/visualizar">
                    <ContenedorImagen>
                        <img src={fondoTorneo} alt=""/>
                    </ContenedorImagen>
                    <ContenedorTitulo>
                        <p id="nombre">{this.props.nombreTorneo}</p>
                        <p id="fecha">{this.props.fechaTorneo}</p>
                    </ContenedorTitulo>
                </Link>
            </ContenedorTarjeta>
        )
    }
}