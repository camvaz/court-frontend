import React, { Component } from "react";
import styled from 'styled-components';
import salir from "../../../../assets/salirBlanco.svg";
const Cabecera = React.lazy(() => import("../../../Home/Cabecera"));
const TarjetaJugador = React.lazy(() => import("./TarjetaJugador"));


const ContenedorGeneral = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    text-align: center;
`;

const SubHeader = styled.div`
    #titulo{
        margin-top: 35px;
        font-family: SF Pro Display;
        font-style: Bold;
        font-size: 16px;
        color: #1A3748;
        float: left;
        @media screen and (min-width: 767px){ 
            margin-top: 0px;
            font-size: 25px;
        }
    }
    input{
        margin: 15px 0px 15px;
        border: 1px solid #ACB5BD;
        width: 80%;
        height: 20px;
        border-radius: 3px;
        float: left;
        padding: 8px;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        @media screen and (min-width: 767px){ 
            height: 30px;
        }
    }

    position: relative;
    left: 8%;
    width: 80%;
    height: 130px;
    // position: relative;
    // width: 80%;
    // left: 30px;

    @media screen and (min-width: 767px){ 
    }
`;

const ContenedorJugadores = styled.div`
    #imagen{
        position: relative;
        width: 100%;
        height: 40px;
        background: #1A3748;
        margin:0px;

        img{
            position: relative;
            float: right;
            margin: 20px;
            width: 20px;
            margin: 9px;
        }
    }
    padding: 0;
    margin: auto;
    position: relative;
    width: 85%;
    height: 540px;
    //background: red;

    -webkit-box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
    box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
`;

export default class Jugadores extends Component {
    render(){
        return(
            <ContenedorGeneral>
                <Cabecera/>
                <SubHeader>
                    <h1 id="titulo">Jugadores del torneo</h1>
                    <input type="text" placeholder="Buscar Jugador"/>
                </SubHeader>
                <ContenedorJugadores>
                    <div id = "imagen">
                        <img src={salir} alt=""/>
                    </div>
                    {/* <TarjetaJugador/> */}
                </ContenedorJugadores>
            </ContenedorGeneral>


        )
    }
}