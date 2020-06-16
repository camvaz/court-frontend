import React, { Component } from "react";
import { toast } from "react-toastify";
import { API_ENDPOINT } from "../../../../environment/environment";
import { setTournaments } from "../../../../Redux/actions";
import styled from "styled-components";
import fondoTorneo from "../../../../assets/fondoVisualizarWeb.jpg";
import engranaje from "../../../../assets/gear.svg"
import fondoTorneoWeb from "../../../../assets/imgTorneoWeb.png";
import eliminar1 from "../../../../assets/delete.png";
import edit1 from "../../../../assets/edit.png";
import { ReactComponent as Gear } from "../../../../assets/gear.svg";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import "animate.css";
const Cabecera = React.lazy(() => import("../../../Home/Cabecera"));


const ContenedorGeneral = styled.div`
    position: relative;
    width: 100%;
`;

const ContenedorTarjeta = styled.div`
    position: relative;
    width: 90%;
    margin: 30px auto;
    left: 0;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px gray;

    @media screen and (min-width: 1300px) {
        width: 55%;
    }
`;

const ContenedorImagen = styled.div`
    #subcontimg{
        #gear{
            width: 30px;
            height: 30px;
            float: right;
            z-index: 200;
        }
    }
  
    img {
        position: relative;
        width: 100%;
        object-fit: cover;
        height: 100%;
        border-radius: 10px 10px 0px 0px;
    }
    .mobile {
        display: block;
        @media screen and (min-width: 767px) {
            display: none;
        }
    }

    .web {
        display: none;

        @media screen and (min-width: 767px) {
            display: block;
        }
    }
    .fondo-verde {
        width: 100%;
        height: 100%;
        background: #74ba5f;
        opacity: 0.5;
        z-index: 99;
        position: absolute;
    }

    

    position: relative;
    width: 100%;
    height: 15vh;
    margin: 0;
    left: 0;
    background: #d9ffbf;
    border-radius: 5px 5px 0px 0px;

    @media screen and (min-width: 1300px) {
        height: 20vh;
    }
`;

const NombreTorneo = styled.div`
    h1 {
        color: #ffffff;
        font-size: 16px;
        font-weight: normal;
    }

    width: 100%;
    height: 5vh;
    background: #1a3748;
    color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1300px) {
        height: 7vh;
    }
`;

const ContenedorDetalles = styled.div`

    #opciones{
        position: relative;
        z-index: 100;
        background: white;
        width: 100px;
        float: right; 
        text-align: center;

        img{
            margin: 5px;

            &:hover{
                transform: scale(1.1,1.1)
            }
        }

    }

    padding: 20px;

    p {
        position: relative;
        width: 100%;
        margin: 2px 20px 2px 20px;
        padding: 5px;
        color: #797c7d;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 19px;
    }

    position: relative;
    width: 100%;
    text-align: left;
`;

const ContenedorBotones = styled.div`
    padding-bottom: 32px;
    justify-content: space-evenly;
    width: 100%;
    margin: 50px auto 0;
    display: flex;
    
    button {
        outline: none;
        width: 130px;
        padding: 5px 0;
        border: none;
        background: #1a3748;
        color: white;
        border-radius: 20px;
        border: 1px solid var(--azul-3);
        transition: 0.1s ease-in-out;

        cursor: pointer;
        &:hover{
            transform: scale(1.1,1.1)
        }
    }
    /* button:nth-child(1) {
        grid-column-start: 0;
        grid-column-end: 1;
        margin-left: 16px;
    }
    button:nth-child(2) {
        grid-column-start: 3;
        grid-column-end: 4;
    }
    button:nth-child(3) {
        grid-column-start: 4;
        grid-column-end: 5;
        margin-left: auto;
    }

    button:hover {
        background: white;
        border: 1px solid #1a3748;
        color: #1a3748;
        cursor: pointer;
        font-weight: bold;
    } */
`;
export default class TarjetaVisualizarTorneo extends Component {

    async loadTournaments() {
        console.log(this.props);
        const response = await fetch(`${API_ENDPOINT}/all/tournaments`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer`
            }
        });
        if (response) {
            const res = await response.json();
            this.props.updateTournaments(res.data);
        } else {
            this.setState({
                fetchError: true
            });
        }
    }

    confirm(){
        confirmAlert({
            title: 'Confirma tu solicitud',
            message: 'Estás seguro de eliminar este torneo?',
            buttons: [
                {
                label: 'Si',
                onClick: () => {
                    this.onDelete(this.props.location.state.tournamentId)
                }
                },
                {
                label: 'No',
                // onClick: () => alert('Click No')
                }
            ]
        });
    }

    onDelete = async tournament => {
        //const { token } = this.props.userSession.session;
        console.log("Deleting")
        console.log(this.props.location.state.tournamentId);
        const response = await fetch(`${API_ENDPOINT}/home/tournaments/${tournament}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer`
            }
        });

        console.log(response);

        if (response) {
            if (response.status === 202) {
                this.loadTournaments();
                toast.success("✔️ Usuario eliminado con éxito", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                });
            }
            const toJson = await response.json();
            console.log(toJson);
            window.location.reload(false);
        }
    };

    showOptions(){
        console.log("alertaa")
    }

    render() {
        return (
            <ContenedorGeneral className="animated fadeIn">
                <Cabecera />
                <ContenedorTarjeta>
                    <ContenedorImagen>
                    <div id = "subcontimg">
                        <div className="fondo-verde">

                        <img
                            className="mobile"
                            src={fondoTorneo}
                            alt="Imagen Torneo"
                        />
                        <img
                            className="web"
                            src={fondoTorneoWeb}
                            alt="imagen Torneo"
                        />
                        </div>

                        
                    </div>
                    </ContenedorImagen>
                    <NombreTorneo>
                        <h1>{this.props.location.state.data.name}</h1>
                    </NombreTorneo>
                    <ContenedorDetalles>
                        <div id = "opciones">
                            <Link
                                to={{
                                    pathname: "/torneos/modificar",
                                    state:{
                                        formData:{
                                            nombre: this.props.location.state.data.name,
                                            date: this.props.location.state.data.date,
                                            category: this.props.location.state.data.category,
                                            competition: this.props.location.state.data.competition,
                                            nRounds: this.props.location.state.data.nRounds,
                                            location: this.props.location.state.data.location,
                                        },
                                        uid: this.props.location.state.tournamentId
                                    },
                                    
                                }}
                            >
                                <img src={edit1} alt="Editar"/>
                            </Link>


                            <Link
                                to={{
                                    pathname: "/torneos",
                                    uid: this.props.location.state.tournamentId
                                    //formdata: this.props.location.state.data
                                }}
                            >

                                <img
                                onClick={() => this.confirm()}
                                src={eliminar1}
                                alt="Eliminar"
                                >
                                </img>
                            </Link>
                            
                        </div>

                        <p>Fecha: {this.props.location.state.data.date}</p>
                        <p>Lugar: {this.props.location.state.data.location}</p>
                        <p>Numero de equipos: 10</p>
                        <p>
                            Categoria: {this.props.location.state.data.category}
                        </p>
                        <p>
                            Descripcion:{" "}
                            {this.props.location.state.data.competition}
                        </p>
                    </ContenedorDetalles>
                    <ContenedorBotones>
                        <Link
                            to={{
                                pathname: "/torneos/bracket",
                                state: {
                                    tournamentId: this.props.location.state
                                        .tournamentId
                                }
                            }}
                        >
                            <button type="button"> Ver Bracket </button>
                        </Link>
                        <Link
                            to={{
                                pathname: "/torneos/partidos",
                                state: {
                                    tournamentId: this.props.location.state
                                        .tournamentId
                                }
                            }}
                        >
                            <button type="button"> Ver Partidos </button>
                        </Link>
                        <Link
                            to={{
                                pathname: "/torneos/jugadores",
                                state: {
                                    tournamentId: this.props.location.state
                                        .tournamentId
                                }
                            }}
                        >
                            <button type="button" id="verJugadores">
                                Ver Jugadores
                            </button>
                        </Link>

                        <button type="button" id="cancelar">
                            Realizar Sorteo
                        </button>
                    </ContenedorBotones>
                </ContenedorTarjeta>
            </ContenedorGeneral>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTournaments: tournaments => dispatch(setTournaments(tournaments))
    };
};
