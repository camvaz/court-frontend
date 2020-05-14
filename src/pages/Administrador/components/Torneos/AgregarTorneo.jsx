import React, { Component } from "react";
import styled from 'styled-components';
import salir from "../../../../assets/cerrar.svg";

// const  ContenedorGeneral = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     Opacity: 50%;
//     Blend: Pass Through;
//     background: red;
// `;

const ContenedorTarjeta = styled.div`    
    h1{
        font-family: roboto;
        font-style: bold;
        font-size: 20px;
        margin: 60px 0px 40px 0px;
    }

    position: absolute;
    text-align: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80%;
    height: 75%;
    margin: auto;
    background: #F5F5F5;
    border-radius: 10px;
    z-index: 1;

    -webkit-box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
    box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);

    @media screen and (min-width: 767px){
        width: 45%;
        height: 80%;
    }
`;

const ContenedorImagen = styled.form`
    img{
        position: relative;
        float: right;
        margin: 20px;
        width: 20px;
    }

    img:hover{
        cursor: pointer;
    }

    position: relative;
    width: 100%;
`;

const ContenedorFormulario = styled.div`
    label{
        position: relative;
        font-family: Roboto;
        font-style: Regular;
        font-size: 12px;
        color: #1A3748;
        display: block;
        width: 100%;
        float: left;
        margin-left: 20px;
        margin-bottom: 10px;
        text-align: left;
    }

    input{
        margin-bottom: 20px;
        width:90%;  
        height: 20px;
        border: none;
        background: none;
        border-bottom: 2px solid #AEBAC3;
        
        font-family: roboto;
        font-style: regular;
        color: #AEBAC3;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        @media screen and (min-width: 767px){
            margin-bottom: 30px;
        }
    }

    textarea{
        margin-top: 10px;
        margin-bottom: 20px;
        width:90%;   
        height: 120px;
        padding: 10px;
        border: none;
        background: white;

        font-family: roboto;
        font-style: regular;
        color: #AEBAC3;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        -webkit-box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
        box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
        
        @media screen and (min-width: 767px){
            margin-bottom: 30px;
        }
    }

    div{
        backgroung: blue;
    }

    #boton{
        font-family: Roboto;
        font-style: Bold;
        font-size: 14px;
        height: 40px;
        background: #1A3748;
        color: white;

        @media screen and (min-width: 767px){
            height: 60px
        }
    }

    #boton:hover{
        cursor: pointer;
    } 

    position: relative;
    width: 100%;
`;
export default class AgregarTorneo extends Component{
    render(){
        return(
                <ContenedorTarjeta>
                    <ContenedorImagen>
                        <img src={salir}alt=""/>
                    </ContenedorImagen>
                    <h1>Crear Torneo</h1>  
                    <ContenedorFormulario>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre"/>
                        <label htmlFor="fecha">Fecha:</label>
                        <input type="date" id="fecha"/>
                        <label htmlFor="lugar">Lugar:</label>
                        <input type="text" id="lugar"/>
                        <label htmlFor="descripcion">Descripción:</label>
                        <textarea id="descripcion"></textarea>
                        <div>
                            <input type="submit" value="GUARDAR" id="boton"/>
                        </div>
                    </ContenedorFormulario>
                    
                </ContenedorTarjeta>    
        )
    }
}