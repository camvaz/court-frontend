import React, { Component, useState } from 'react';
import TarjetaResultados from './TarjetaResultados';
import styled from 'styled-components';
import Bandera from '../../assets/banderaBrasil.png';
import Imagen from '../../assets/rogerfederer.png';

const Contenedor = styled.div`
    position: relative;
    width: 100%;
    
`;

class ResultadosPartidos extends Component {
    //Pasar Json de Sets y resultados por props
    //Pasar datos principales por props

    render() { 

        return ( 
            <Contenedor>
                <TarjetaResultados banderaJugador1={Bandera}
                                   banderaJugador2={Bandera}
                                   jugador1="Roger Federer"
                                   jugador2="Mateo Barrettini"
                                   fecha="Fecha: 20-10-2020"
                                   horaInicio="Hora-inicio: 08:00"
                                   status="Finalizado"
                                   imagen1={Imagen}
                                   imagen2={Imagen}
                />
            </Contenedor>
        );
    }
}
 
export default ResultadosPartidos;