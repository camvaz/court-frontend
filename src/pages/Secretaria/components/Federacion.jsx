import React,{Component} from 'react';
import './Federacion.scss'
import imgUsuario from '../../../assets/imgUsuario.svg'


export class Federacion extends Component 
{
    render()
    {
        return(
            <div className="ContenedorFederacion">
                    <div className="jugadorPorFed">
                        <p><img id="imguser" src={imgUsuario} alt="Usuario"/></p>
                        <p>Jason Smith</p>

                    </div>
                    <div className="jugadorPorFed">
                        <p><img id="imguser" src={imgUsuario} alt="Usuario"/></p>
                        <p>Jason Smith</p>
                    </div>
                    <div className="jugadorPorFed">
                        <p><img id="imguser" src={imgUsuario} alt="Usuario"/></p>
                        <p>Jason Smith</p>
                    </div>

                <button className="botonFed">Mexico</button>
                    
            </div>
        )
    }
}