import React,{Component} from 'react';
import './agregarParticipant.scss'
import plus from '../../../../assets/plus2.svg'
import 'bulma/css/bulma.css';

export class AgregarParticipante extends Component
{

    render()
    {

        return(
            <div className="ContAddParticipantes">
                <div  id="contbtX"><button className="btnX">X</button></div>
                <h1 className="cargar">Cargar Archivo Excel</h1>
                
                <div className="file has-name is-boxed">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume"/>
                        <span className="cargarFile">
                        <span className="file-label">
                        <i className="im"><img className="im" src={plus} alt="add"/> &nbsp; Buscar archivo</i>
                        </span>
                        <span className="file-name">
                            Aqui va el nombre del archivo
                         </span>
                        </span>
                    </label>
                 </div>
                    
                <div className="file has-name is-boxed">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume"/>
                        <span className="cargarFile2">
                        <span className="file-label">
                            Arrastar archivo
                        </span>
                        <span className="file-name">
                            Aqui va el nombre del archivo
                         </span>
                        </span>
                    </label>
                </div>
                <div className="contbtnCargar">
                    <button className="btcCargar"> CARGAR </button>
                </div>

            </div>
        )
    }
}