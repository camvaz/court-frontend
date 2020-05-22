import React,{Component} from 'react';
import './mensajes.scss'

export class MensajeError extends Component
{
    render()
    {
        return(
            <div className="ContenedorMensaje2">
                 <div  id="contbtX"><button className="btnX">X</button></div>
                 <h2>Inscripcion fallida</h2>
                 <div className="jugadoresError">
                     <ul>
                         <li>Angel Genis de la Rosa</li>
                         <li>Manuel Gomez</li>
                         <li>Angel Genis de la Rosa</li>
                         <li>Manuel Gomez</li>
                         
                     </ul>
                 </div>
                 <p className="msn">Estos participantes no pudieron ser inscritos al torneo</p>
                 <button className="btcCargar"> ACEPTAR </button>
            </div>
        )
    }
}