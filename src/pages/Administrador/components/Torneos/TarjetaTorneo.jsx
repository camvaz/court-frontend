import React, { Component } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../../../../environment/environment";
import fondoTorneo from "../../../../assets/fondoTorneo.jpg";
import "animate.css";

const ContenedorTarjeta = styled.div`
    width: 100%;
    height: 210px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    #contenedorImagen{
        position: relative;
        width: 270px;
        height: 155px;
        border-radius: 10px 10px 0px 0px;

        img {
            position: relative;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
        }

        #opciones{
            width: 100px;
            height: 80px;
            text-align: center;
            background: white;
            color: black;
            position: absolute;
            z-index: 3;
            border: 1px solid gray;
            border-radius: 5px;
            float: right;
            right: 2px;
            display: none;

            p:hover{
                color: blue;
            }
        }
    }

    #contenedorImagen:hover{
        #opciones{
            display: block;
        }
    }

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        margin: auto;
    }

    @media screen and (min-width: 767px) {
        display: inline-block;
    }
`;
const ContenedorImagen = styled.div`
    img {
        position: relative;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
    }

    #opciones{
            width: 100px;
            height: 80px;
            text-align: center;
            background: white;
            color: black;
            position: absolute;
            z-index: 3;
            border: 1px solid gray;
            border-radius: 5px;
            float: right;
            right: 2px;
    }

    position: relative;
    width: 270px;
    height: 155px;
    border-radius: 10px 10px 0px 0px;
`;
const ContenedorTitulo = styled.div`
    p {
        position: relative;
        width: 200px;
        margin: 0 0 0 16px;
        padding: 0;
        color: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #nombre {
        margin-top: 8px;
        font-family: Roboto;
        font-style: Medium;
        font-size: 16px;
        text-align: left;
    }
    #fecha {
        margin-bottom: 8px;
        font-family: Roboto;
        font-style: Regular;
        font-size: 12px;
        text-align: left;
    }

    position: relative;
    width: 100%;
    height: 63px;
    background: #1a3748;
`;

export default class TarjetaTorneo extends Component {
    
    rightClick(){
        alert("Izquierdo");
    }

    onDelete = async tournament => {
        //const { token } = this.props.userSession.session;
        const response = await fetch(`${API_ENDPOINT}/home/tournaments/${tournament}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer`
            }
        });

        console.log(response);

        if (response) {
            if (response.status === 202) {
                this.loadUsers();
                toast.success("✔️ Usuario eliminado con éxito", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                });
            }
            const toJson = await response.json();
            console.log(toJson);
        }
    };

    render() {
        return (
            <ContenedorTarjeta
                className="animated fadeIn"
                onContextMenu={this.rightClick}
            >
                <Link
                    to={{
                        pathname: "/torneos/visualizar",
                        state: {
                            data: this.props.data,
                            tournamentId: this.props.tournamentId
                        }
                    }}
                >
                    {/* <ContenedorImagen>
                        <div id = "opciones">
                            <p>Modificar</p>
                            <p>Eliminar</p>
                        </div>
                        <img src={fondoTorneo} alt=""/>                            
                    </ContenedorImagen> */}

                     <div id = "contenedorImagen">
                        <div id = "opciones">
                            <p>Modificar</p>

                            <p
                                onClick={() => {
                                    this.onDelete(
                                        this.props.data
                                    );
                                    // document
                                    //     .getElementById(
                                    //         `admin-user-${index}`
                                    //     )
                                    //     .classList.remove(
                                    //         "show"
                                    //     );
                                }}
                            >
                            Eliminar
                            
                            </p>

                        </div>
                        <img src={fondoTorneo} alt=""/>                            
                    </div>


                    <ContenedorTitulo>
                        <p id="nombre">{this.props.nombreTorneo}</p>
                        <p id="fecha">{this.props.fechaTorneo}</p>
                    </ContenedorTitulo>
                </Link>
            </ContenedorTarjeta>
        );
    }
}
