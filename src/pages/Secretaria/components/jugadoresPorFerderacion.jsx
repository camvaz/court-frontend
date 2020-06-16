import React,{Component} from 'react';
import Cabecera from "./../../Home/Cabecera";
import 'bulma/css/bulma.css';
import {Federacion} from './Federacion';
import search from '../../../assets/Search.svg';

export class JugadoresFederacion extends Component
{
    render()
    {
        return(
            <div className="Federaciones">
                <Cabecera/>
                <h1 className="torneo">Jugadores del Torneo Relampago</h1>
                <div className="field">
                    <p className="control has-icons-left">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Nombre jugador o federación"/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-lock"><img src={search} alt="busqueda"/></i>
                        </span>
                    </p>
                </div>

                <div className="Federaciones-list">
                    <div className="Federacion">
                        <Federacion/>
                    </div>
                    <div className="Federacion">
                        <Federacion/>
                    </div>
                    <div className="Federacion">
                        <Federacion/>
                    </div>
                    <div className="Federacion">
                        <Federacion/>
                    </div>
                    <div className="Federacion">
                        <Federacion/>
                    </div>
                </div>
                 

                <div className="ContbtnAgregar">
                    <button className="btnAgregar"></button>
                </div>

            </div>


        )
    }
}
