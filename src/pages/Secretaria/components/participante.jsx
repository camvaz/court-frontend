import React,{Component} from 'react';
import imgUsuario from '../../../assets/imgUsuario.svg';
import cup from '../../../assets/cup.svg';
import './participante.scss';


export class Participante extends Component
{
    state= {
        nombre:"",
        edad:"",
        nacionalidad:"",
        correo:"",
        copas:""

    };
    render()
    {
        const {participante} = this.props;

        return(
        <div className="Contparticipante">
            <p><img id="imguser" src={imgUsuario} alt="Usuario"/></p>
            <h3>Jason Smith</h3>
            <p>Edad:años</p>
            <p>Nacionalidad:</p>
            <p>correo: </p>
                <p id="cups">
                    
                        <img src={cup} alt="copa"/>
                        5
                        <i className="contenedorBoton">
                            <button id="btnDlete"> Eliminar </button>
                        </i>
                
                </p>
        </div>
        )

    }

}

