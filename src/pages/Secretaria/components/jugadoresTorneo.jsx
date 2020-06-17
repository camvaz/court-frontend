import React,{Component} from 'react';
import Cabecera from "./../../Home/Cabecera";
import 'bulma/css/bulma.css';
import search from '../../../assets/Search.svg';
import './jugadoresTorneo.scss';
import {Participante} from './participante';

export class JugadoresTorneo extends Component {
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <div className="ContenedorJugadores">
                <Cabecera/>
                <h1 className="torneo">Jugadores del Torneo Relampago</h1>
                <div className="field">
                    <p className="control has-icons-left">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Nombre jugador"/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-lock"><img src={search} alt="busqueda"/></i>
                        </span>
                    </p>
                </div>
                
                <div className="jugadoresFederacion">
                    <div className="nomFederacion">
                        <p>Nombre de Federación</p>
                    </div>
                    <div className="participanteTorneo">
                        <Participante/>
                    </div>
                </div>
            </div>

        )
    }
}
