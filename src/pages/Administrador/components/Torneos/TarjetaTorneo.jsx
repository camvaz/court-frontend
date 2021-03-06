import React, { Component } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../../../../environment/environment";
import fondoTorneo from "../../../../assets/fondoTorneo.jpg";
import "animate.css";
import { connect } from "react-redux";

const FondoVerde = styled.div`
    width: 100%;
    position: absolute;
    background: #74ba5f;
    height: 100%;
    z-index: 99;
    top: 0;
    opacity: 0.5;
    border-radius: 5px;
`;

const ContenedorTarjeta = styled.div`
    width: 100%;
    height: 210px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        margin-top: -10px;
    }
    #contenedorImagen {
        position: relative;
        width: 270px;
        height: 155px;
        border-radius: 10px 10px 0px 0px;

        img {
            position: relative;
            width: 100%;
            border-radius: 10px 10px 0px 0px;
        }

        #opciones {
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

            p:hover {
                color: blue;
            }
        }
    }

    #contenedorImagen:hover {
        #opciones {
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

    #opciones {
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
    width: 250px;
    height: 130px;
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
    border-radius: 5px;
    box-shadow: 3px 3px 3px lightgrey;
`;

class TarjetaTorneo extends Component {
    rightClick() {
        alert("derecho");
    }

    onDelete = async tournament => {
        //const { token } = this.props.userSession.session;
        const response = await fetch(
            `${API_ENDPOINT}/home/tournaments/${tournament}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer`
                }
            }
        );

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
                    <div id="contenedorImagen">
                        <FondoVerde> </FondoVerde>
                        <img src={fondoTorneo} alt="" />
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

const mapStateToProps = state => ({
    userSession: state.userSession.session
});

export default connect(mapStateToProps)(TarjetaTorneo);
