import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Bandera from '../../assets/banderaBrasil.png';
import Imagen from '../../assets/rogerfederer.png';

const Contenedor = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 20px 0;
`;
const ContenedorTarjeta = styled.div`
    position: relative;
    width: 333px;
    background: white;
    cursor: pointer;
    margin: 20px;

    &:hover .componente-tarjeta, &:active .componente-tarjeta{
        top: -5px;
        box-shadow: 3px 3px 20px gray;
    }
`;

const ComponenteTarjeta = styled.div`
    position: relative;
   
    border-radius: 10px;
    box-shadow: 3px 3px 10px gray;
    padding: 0 20px;

    .fecha-hora-status{
        position: relative;
        margin-top: 10px;
        p{
            font-size: .8rem;
        }

        .fecha-hora,
        .status{
            display: inline-block;
            width: 50%;
        }
       
        .status{
            position: relative;
            text-align: right;
            height: 50px;
            top: -10px;
            color: #EB5757;
        }
      
    }

`;
const ComponenteJugadores = styled.div`
    position: relative;
    width: 100%; 

`;
const NombreJugador = styled.div` 
    position: relative;
    width: 50%;
    display: inline-block;
    margin: 0;
    padding: 10px 0;
    
    img{
        width: 20px;
        height: 20px;
        display: inline-block;
        margin: 0px 5px;
        position: relative;
        top: 5px;
    }
    h3{
        display: inline-block;
        font-size: .9rem;
        font-weight: bold;
       
    }
`;


const DatosEstadistica = styled.div`
    position: relative;
    width: 100%;
    p{
        font-size: .8rem;
        margin: 10px 0;
    }
    
    p:nth-child(1),
    p:nth-child(3)
    {
        width: 10%;
        display: inline-block;
        text-align: center;

    }
    p:nth-child(2){
        width: 80%;
        text-align: center;
        display: inline-block;
    }
`;

const ComponenteDatos = styled.div`

`;



const Sets = styled.div`
    width: 100%;
    position: relative;
    padding: 5px 0;
    border-bottom:1px solid #EFEFEF;
    margin-top: -20px ;
`;

const PuntajeJugador = styled.div`
    p{
        font-size: .7rem;
    }
    .nombre-jugador{
        width: 50%;
        display: inline-block;
    }
    .sets{
        width: 50%;
        display: inline-block;
        text-align: right;

        p{  
            text-align: center;
            width: 20px;
            display: inline-block;
        }
    }
`;

const ComponenteImagenesJugadores = styled.div`

    img{
        width: 40%;
        position: relative;
        left: 50%;
        transform: translateX(-100%);
        
    }
    h2{
        position: absolute;
        top: 30px;
        left: 50%;
        transform:translateX(-50%);
        font-weight: bold;
    }
   
   
`;

function Estadistica(props){
    return(
        <DatosEstadistica>
            <p>{props.resultadoJugador1}</p>
            <p>{props.caracteristica}</p>
            <p>{props.resultadoJugador2}</p>
        </DatosEstadistica>
    )
}

function Puntaje(props){
    //En el div con la clase sets se desglozara tantos p como sets sean

    return(
    <PuntajeJugador>
        <p className="nombre-jugador">{props.jugador}</p>
        <div className="sets">
            <p>1</p> 
            <p>2</p> 
            <p>3</p>
            <p>3</p> 
        </div>
    </PuntajeJugador>
    )
}

function ComponenteSets(props){
    return(
        <Sets>
            <Puntaje jugador={props.jugador1}></Puntaje> 
            <Puntaje jugador={props.jugador2}></Puntaje> 
        </Sets>
    )
}

function ComponenteResultados(props){
    return(
        <ComponenteDatos>
            <ComponenteSets jugador1={props.jugador1}
                            jugador2={props.jugador2} />


            <Estadistica resultadoJugador1="15" caracteristica="Aces" resultadoJugador2="15" />
            <Estadistica resultadoJugador1="15" caracteristica="Dobles faltas" resultadoJugador2="15" />
            <Estadistica resultadoJugador1="15" caracteristica="% de primer servicio" resultadoJugador2="15" />
            <Estadistica resultadoJugador1="15" caracteristica="Puntos de servicio ganados" resultadoJugador2="15" />
            <Estadistica resultadoJugador1="15" caracteristica="Tiebreaks" resultadoJugador2="15" />
            <Estadistica resultadoJugador1="15" caracteristica="Aces" resultadoJugador2="15" />
        </ComponenteDatos>
    )
}
function Jugadores(props){
    return (
        <ComponenteJugadores>
            <NombreJugador>
                <img src={props.banderaJugador1} alt="Bandera"/>
                <h3>{props.jugador1}</h3> 
            </NombreJugador>

            <NombreJugador>
                <h3>{props.jugador2}</h3> 
                <img src={props.banderaJugador2} alt="Bandera"/>
            </NombreJugador>

        </ComponenteJugadores>
    )
}

function TarjetaResultados(props){
    const [estaDesplegado, setDesplegado] = useState(false);
 
    return (
        <ContenedorTarjeta onClick={()=> setDesplegado(!estaDesplegado)}>
            <ComponenteImagenesJugadores>
                <img className="img-jugador1" src={props.imagen1} />
                <h2>VS</h2>
                <img className="img-jugador2" src={props.imagen2} />
            </ComponenteImagenesJugadores>
            <ComponenteTarjeta className="componente-tarjeta"> 
            <Jugadores banderaJugador1={props.banderaJugador1}
                        banderaJugador2={props.banderaJugador2}
                        jugador1={props.jugador1}
                        jugador2={props.jugador2}
            />
                <div className="fecha-hora-status">
                    <div className="fecha-hora">
                        <p>{props.fecha}</p>
                        <p>{props.horaInicio}</p>
                        
                    </div>
                    
                    <p className="status"> {props.status}</p>
                </div>
                {estaDesplegado && 
                    <ComponenteResultados jugador1={props.jugador1}
                                        jugador2={props.jugador2}
                    />
                }    
                
            </ComponenteTarjeta>
        </ContenedorTarjeta>
    )
}

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