import React from 'react';
import Boton from '../../components/Elements/Boton';
import tenista from '../../assets/tenista.svg';
import styled from 'styled-components';
import Cabecera from './Cabecera';

const ContenedorHome = styled.div `
    width: 100%;
    height: 100vh;
   
`;

const Contenido = styled.div `
    position: relative;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    height: 400px;
    margin-top: 80px;
    
    @media screen and (min-width: 425px){
        width: 70%;
    }
    @media screen and (min-width: 680px){
        width: 60%;
    }
    @media screen and (min-width: 767px){
        width: 70%;
    }
    @media screen and (min-width: 950px){
        width: 80%;
    }

    p{
        position: relative;
        width: 60%;
        left: 40%;
        top: 20px;

        @media screen and (min-width: 950px){
            width: 30%;
            font-size: 1.5rem;
            top: 150px;
            left: 50%;
        }
    }
    img{
      position: absolute;
      top: 50px;
      
      @media screen and (min-width: 950px){
          width: 50%;
          left: 0px;
      }


    }
    .btn{
        position: relative;
        left: 40%;
        top: 100px;

        @media screen and (min-width: 950px){
          left: 55%;
          top: 200px;
        }  
    }
    
`;

function Home(){
    return(
        <ContenedorHome>
            <Cabecera/>
            <Contenido>
                <img src={tenista} alt="Imagen ilustracion Tennis"/>
                <p>Podrás visualizar los mejores partidos de tenis y ver los resultados al momento</p>
                <Boton className="btn">Iniciar Sesión</Boton>
            </Contenido>
        </ContenedorHome>
    );
}

export default Home;