import React,{Component} from 'react';
import './agregarParticipant.scss'
import plus from '../../../../assets/plus.svg'

export class Mensaje extends Component
{
    render()
    {
        return(
            <div className="ContAddParticipantes">
                <div  id="contbtX"><button className="btnX">X</button></div>
                <h1 className="cargar">Cargar Archivo Excel</h1>
                <div id="cargas">
                    <p><input type="file" className="cargarFile"/></p>
                    <p><input type="file" className="cargarFile2"/></p>
                </div>
                <button className="btcCargar"> CARGAR </button>

            </div>
        )
    }
}