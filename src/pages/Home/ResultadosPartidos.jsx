import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TarjetaResultados from './TarjetaResultados';
import styled from 'styled-components';
import Bandera from '../../assets/banderaBrasil.png';
import Imagen from '../../assets/rogerfederer.png';
import {STORAGE_ENDPOINT} from '../../environment/environment';
import { connect } from "react-redux";

const Contenedor = styled.div`
    width: 100%;
    position: relative;
    height: 100%;
    padding-top: 20px;
    
`;

const ContenedorCategorias = styled.div`
    height: 80px;
    width: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    padding: 10px;
    grid-template-areas: "boton1 boton2 boton3 boton4"
                         "buscador buscador buscador buscador";
    align-items: center;
    
    @media screen and (min-width: 767px){
        grid-template-areas: "boton1 boton2 boton3 boton4 buscador buscador";
    }
    

    button:nth-child(1){
        grid-area: boton1;
    }
    button:nth-child(2){
        grid-area: boton2;
    }
    button:nth-child(3){
        grid-area: boton3;
    }
    button:nth-child(4){
        grid-area: boton4;
    }

    input{
        grid-area: buscador;
        height: 25px;
        border-radius: 10px;
        box-shadow: none;
        padding: 10px;
        outline: none;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
    color: gray;
    cursor: pointer;
    margin: 0 10px;
    padding: 5px 0;
    outline: none;

    &:active,
    &:hover{
        border-bottom: 2px solid var(--verde-1);
        font-size: .9rem;
    }
    a{
        color: gray;
    }
 
`;
const ContenedorTarjetas = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: auto;

    @media screen and (min-width: 767px){
        grid-template-columns: auto auto;
    }
    @media screen and (min-width: 1100px){
        grid-template-columns: auto auto auto;
    }
`;

function Categorias(){
    return(
        <ContenedorCategorias>
            <Button><Link to="resultados/4taronda">4taRonda</Link></Button>
            <Button><Link to="resultados/4tosfinal">4tos de final</Link></Button>
            <Button><Link to="resultados/semifinal">SemiFinal</Link></Button>
            <Button><Link to="resultados/final">Final</Link></Button>

            <input placeholder="Fecha del partido"/>
        </ContenedorCategorias>
    )
}

class ResultadosPartidos extends Component {
    //Pasar Json de Sets y resultados por props
    //Pasar datos principales por props

    render() { 
        const {partidos, players} = this.props;
        return ( 
            <Contenedor>
                <Categorias />
                
                <ContenedorTarjetas>
                    {
                        partidos && Object.keys(partidos).map((keyName,index) => {
                            console.log(partidos)
                            console.log(players)
                            const player1 = players[partidos[keyName]?.player1];
                            const player2 = players[partidos[keyName]?.player2];
                            return index < 30 && (
                                <TarjetaResultados 
                                    banderaJugador1={`${STORAGE_ENDPOINT}/storage/flags/${player1.country.charAt(0).toLowerCase() + player1.country.slice(1)}.png`}
                                    banderaJugador2={`${STORAGE_ENDPOINT}/storage/flags/${player2.country.charAt(0).toLowerCase() + player2.country.slice(1)}.png`}
                                    jugador1={player1.user.name}
                                    jugador2={player2.user.name}
                                    fecha={partidos[keyName]?.started_at}
                                    horaInicio={partidos[keyName]?.started_at}
                                    status={"no supe que poner aqui"}
                                    imagen1={`${STORAGE_ENDPOINT}/${player1.photo}`}
                                    imagen2={`${STORAGE_ENDPOINT}/${player2.photo}`}
                                    key={index}
                                />
                            );
                        })
                    }
                    {/* <TarjetaResultados banderaJugador1={Bandera}
                                    banderaJugador2={Bandera}
                                    jugador1="Roger Federer"
                                    jugador2="Mateo Barrettini"
                                    fecha="Fecha: 20-10-2020"
                                    horaInicio="Hora-inicio: 08:00"
                                    status="Finalizado"
                                    imagen1={Imagen}
                                    imagen2={Imagen}
                    /> */}
                   
                </ContenedorTarjetas>
                
            </Contenedor>
            
        );
    }
}
 
const mapStateToProps = state => ({
    partidos: state.tournaments.matches,
    players: state.tournaments.players
})

export default connect(mapStateToProps)(ResultadosPartidos);
