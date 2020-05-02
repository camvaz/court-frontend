import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import imgUsuario from '../../assets/imgUsuario.svg';


const Contenedor = styled.div`
    background: var(--fuerte-1);
    height: 100%;
    z-index: 9;
    position: fixed;
    top: 0px;
    overflow: hidden;
    width: 100%;
    z-index: 91;

    @media screen and (min-width: 767px){
        position: relative;
    }
`;

const ContenedorUsuario = styled.div`
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-areas: "imagen titulo"
                         "imagen puesto";
    align-content: center;
    justify-content: flex-start;
    padding-left: 20px;

    img{
        grid-area: imagen;
        margin: 0;
    }
    h3{
        grid-area: titulo;
        margin: 0;
        padding-left: 10px;
        color: white;
        font-family: "SF Pro Display";
        font-size: 1.2rem;
        margin-top: 10px;
    }
    p{
        position: relative;
        grid-area: puesto;
        color: var(--typo-gris);
        margin: 0;
        padding-left: 10px;
        top: -5px;
        font-size: .9rem;
        
    }
`;
const ContenedorHam = styled.div`
    position: fixed;
    width: 50px; 
    height: 50px;
    z-index: 9999992;
    right: 16px;
    bottom: 20px;

    @media screen and (min-width: 769px){
        display: none;
    }
    .equis{
       background: none;
       
        &::before {
            background: var(--blanco);
            transform: rotate(45deg);
            top: 0;
        } 
        &::after {
            background: var(--blanco);
            transform: rotate(135deg);
            top: 0;
            width: 34px;
        }   
    }
`;

const Icono = styled.div`
        width: 25px;
        height: 3px;
        background: var(--azul-3);
        position: absolute;
        top: 50%;
        transition-duration: 0.5;

        &:before,
        &:after{
          content: "";
          position: absolute;
          height: 3px;
          background: var(--azul-3);
          transition-duration: 0.3s;
        }
        &::before {
            width: 34px;
            top: -10px;
        }
        &::after {
            top: 10px;
            width: 30px;
            background: none;
        } 
`;

const ContenedorMenu = styled.div`
    width: 100%;
    
    ul{
        margin-top: 80px;
        li{
            height: 50px;
            a{
                display: flex;
                align-items: center;
                color: white;
                font-family: var(--fuente-2), sans-serif; 
                width: 100%;
                height: 100%;
                padding-left: 30px;
                font-weight: normal;
                font-size: 1.2rem;
            }
        }
    }
`;


function Usuario(){
    return(
        <ContenedorUsuario>
            <img src={imgUsuario} alt="Usuario"/>
            <h3>David Diaz</h3>
            <p>Administrador de Torneos</p>
        </ContenedorUsuario>
    );
}

function Menu(){
    return(
        <ContenedorMenu>
            <ul>
                <li><a>Inicio</a></li>
                <li><a>Torneos</a></li>
                <li><a>Usuarios</a></li>
                <li><a>Resultados</a></li>
            </ul>
        </ContenedorMenu>
     );
}

const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth; 

function Navbar(){
    const [isToggleOn, setToggleOn] = useState(null);
   
    const ocultar = () => {
        setToggleOn(!isToggleOn);
    };

    //Visualiza el tamaño de la pantalla antes de montarse
    //Si es menor al tamaño de una tablet entonces muestra el menu hamburguesa, si no no
    useEffect(() => {
        getWidth() < 767 ? setToggleOn(false) : setToggleOn(true);
        const handleResize = () => {
            getWidth() < 767 ? setToggleOn(false) : setToggleOn(true);
        };  
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //Agrega la clase equis a nuestro menu hamburguesa para mostrar la equis en lugar del menu
    let equis;
    isToggleOn ? equis="equis" : equis="";
  
    return (
        <React.Fragment>
            <ContenedorHam onClick={ocultar}>
                <Icono className={equis} ></Icono>
            </ContenedorHam>
            
            {isToggleOn ? (
                <Contenedor>
                    <Usuario />
                    <Menu/>
                    
                </Contenedor> 
            ) : ""
            }
        </React.Fragment>
    );

}
export default Navbar;
