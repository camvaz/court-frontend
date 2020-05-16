import React,{Component} from 'react';
import './mensajes.scss'

export class Mensaje extends Component
{
    render()
    {
        return(
            <div className="ContenedorMensaje">
                 <div  id="contbtX"><button className="btnX">X</button></div>
                 <h2>Inscripcion exitosa</h2>
                 <p className="msn">Todos los jugadores fueron registrados correctamente</p>
                 <button className="btcCargar"> ACEPTAR </button>
            </div>
        )
    }
}