import React, { Component } from "react";
import styled from "styled-components";
import agregar from "../../../../assets/botonMas.png";
import { connect } from "react-redux";
const Cabecera = React.lazy(() => import("../../../Home/Cabecera"));
const TarjetaTorneo = React.lazy(() => import("./TarjetaTorneo"));
const AgregarTorneo = React.lazy(() => import("./AgregarTorneo"));

const ContenedorHome = styled.div`
    overflow-y: auto;
    #divagrega {
        display: none;
    }

    AgregarTorneo {
        display: none;
        visibility: hidden;
    }

    #contenedorAgregar {
        position: fixed;
        bottom: 20px;
        left: 10px;
        width: 100%;
        float: left;

        img {
            position: relative;
            width: 50px;
            float: left;
        }

        img:hover {
            cursor: pointer;
        }
    }

    position: relative;
    width: 100%;
    height: 100vh;
    margin: auto;
    text-align: center;

    @media screen and (min-width: 767px) {
        text-align: center;
        #contenedorAgregar {
            bottom: 20px;
            right: 20px;
            width: 100%;
            float: right;

            img {
                position: relative;
                width: 50px;
                float: right;
                right: 40px;
            }
        }
    }

    @media screen and (min-width: 1425px) {
        text-align: left;
    }
`;

const ContenedorBuscador = styled.div`
    input {
        position: relative;
        border: 1px solid gray;
        border-radius: 5px;
        width: 400px;
        height: 25px;
        padding: 0px 10px 0px 10px;
        margin: 0px 10px 0px 10px;

        @media only screen and (max-width: 819px) {
            margin: 32px auto;
            width: 80%;
        }
    }

    #anios {
        width: 100px;
        height: 25px;
        background: #74ba5f;
        border-radius: 20px;
        border: 1px solid #74ba5f;
        margin: 0px 10px 0px 10px;
        color: white;
        display: none;

        @media screen and (min-width: 1200px) {
            display: inline;
        }
    }

    button {
        width: 100px;
        height: 25px;
        background: #74ba5f;
        margin: 0px 10px 0px 10px;
        border-radius: 8px;
        border: 1px solid #74ba5f;
        color: white;
        display: none;

        @media screen and (min-width: 1200px) {
            display: inline;
        }
    }

    position: relative;
    width: 100%;
    text-align: center;

    @media screen and (min-width: 800px) {
        margin-bottom: 50px;
    }

    @media screen and (min-width: 1425px) {
        margin-bottom: 60px;
    }
`;

const ContenedorTorneos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 24px;
    width: 100%;
    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 819px) {
        grid-template-columns: 1fr;
        margin-top: 24px;
    }
`;

class Torneos extends Component {
    render() {
        const { tournaments } = this.props.tournaments;
        return (
            <ContenedorHome>
                <Cabecera />
                <div id="divagrega">
                    <AgregarTorneo id="agrega" />
                </div>

                <ContenedorBuscador>
                    <select id="anios">
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </select>
                    <button>Individuales</button>
                    <button>Dobles</button>
                    <input
                        type="text"
                        name="nombre"
                        size="40"
                        placeholder="Buscar torneo"
                    />
                </ContenedorBuscador>
                <ContenedorTorneos>
                    {Object.keys(tournaments).map((data, index) => (
                        <TarjetaTorneo
                            key={index}
                            nombreTorneo={tournaments[data].name}
                            fechaTorneo={tournaments[data].date}
                            data={tournaments[data]}
                            tournamentId={data}
                        />
                    ))}
                    <div id="contenedorAgregar">
                        <img src={agregar} id="agregar" alt="" />
                    </div>
                </ContenedorTorneos>

                {/* <TarjetaVisualizarTorneo 
                titulo = "Torneo relampago"
                fecha = "20/10/2020"
                lugar = "Ciudad Universitaria"
                equipos = "20"
                categoria = "Mixto"
                descripcion = "Este torneo esta creado por la asiciacion estudiantil de la facultad de computacion, todo el dinero recaudado se donara a la fundacion de niños con cancer"
                /> */}
            </ContenedorHome>
        );
    }
}

const mapStateToProps = state => ({
    tournaments: state.tournaments
});

export default connect(mapStateToProps)(Torneos);
