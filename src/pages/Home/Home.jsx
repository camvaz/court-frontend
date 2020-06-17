import React from "react";
import Boton from "../../components/Elements/Boton";
import tenista from "../../assets/tenista.svg";
import styled , {keyframes} from "styled-components";
import Cabecera from "./Cabecera";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const efectoCuadro1 = keyframes`
    0%{
        transform: rotate(120deg);
    }

    100%{
        transform: rotate(0deg);
    }
`;
const efectoCuadro2 = keyframes`
    0%{
        transform: rotate(150deg);
    }

    100%{
        transform: rotate(360deg);
    }
`;

const ContenedorHome = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0;
    left: 0;
    .cuadro{
        display: none;
    }
    @media screen and (min-width: 767px){
        .cuadro{
            display: block;
            position: absolute;
            width: 290px;
            height: 250px;
            border: 2px solid #F0F0F0;
        
        }
        .cuadro1{
            transform: rotate(120deg);
            top: 200px;
            left: 300px;
            animation: ${efectoCuadro1} 20s linear infinite;
        }
        .cuadro2{
            transform: rotate(150deg);
            top: 300px;
            left: 150px;
            animation: ${efectoCuadro2} 20s linear infinite;
        }
    }
    
`;

const Contenido = styled.div`
    position: relative;
    width: 90%;
    left: 55%;
    transform: translateX(-50%);

    margin-top: 100px;

    @media screen and (min-width: 767px) {
        margin-top: 200px;
    }

    img {
        position: absolute;
        top: 30px;
        @media screen and (min-width: 550px) {
            top: 0;
            width: 70%;
        }
        @media screen and (min-width: 767px) {
            top: 0;
            width: 60%;
            left: 0px;
        }

        @media screen and (min-width: 1200px) {
            top: -60px;
            width: 50%;
            left: 100px;
        }
    }

    p {
        position: relative;
        width: 200px;
        left: 55%;
        transform: translateX(-30%);
        text-align: left;

        @media screen and (min-width: 767px) {
            font-size: 1.5rem;
            width: 300px;
            top: 0px;
            line-height: 25px;
            text-align: center;
        }
    }
    .btn {
        position: relative;
        left: 55%;
        margin-top: 50px;
        transform: translateX(-30%);

        @media screen and (min-width: 550px) {
            margin-top: 100px;
        }
        a {
            position: relative;
            text-decoration: none;
            color: white;
            padding: 15px 30px;
        }
    }
`;

function Home({ userSession }) {
    return (
        <ContenedorHome>
            <div className="cuadro cuadro1" />
            <div className="cuadro cuadro2" />
            <Cabecera />
            <Contenido>
                <img src={tenista} alt="Imagen ilustracion Tennis" />
                <p>
                    Podrás visualizar los mejores partidos de tenis y ver los
                    resultados al momento
                </p>
                {!userSession.user.role ? (
                    <Boton className="btn">
                        <Link to="/login"> Iniciar Sesión </Link>
                    </Boton>
                ) : null}
            </Contenido>
        </ContenedorHome>
    );
}

const mapStateToProps = state => ({
    userSession: state.userSession.session
});

export default connect(mapStateToProps)(Home);
