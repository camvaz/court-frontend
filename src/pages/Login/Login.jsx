import React, { Component } from "react"
import iconousuario from '../../assets/icono-usuario.svg'
import url from './url'
import Boton from '../../components/Elements/Boton';
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            user_id: '',
            user_token: '',
            form: {
                email:'',
                password:''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit(e){
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('description',this.state.form.description)
            formData.append('amount',this.state.form.amount)
            formData.append('wallet_id',this.state.form.wallet_id)
        } catch (error) {
            this.setState({
                error
            })
        }
    }
    handleChange(e){
        this.setState({
            form:{ 
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return(
            <div className="container">
               <h3>Iniciar sesión</h3>
               <img width="120px" src={iconousuario} alt="Imagen ilustracion Tennis"/>
               <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Correo electrónico
                        <input 
                            type="text"
                            placeholder="correo@example.com"
                            name="email"
                            value={this.state.form.email}
                           
                            onChange={this.handleChange}
                        />
                        </label>
                    </div>
                    <div>
                        <label>
                            Contraseña
                        <input 
                            type="text"
                            placeholder="pa$$w0rd"
                            name="password"
                            value={this.state.form.password}
                            onChange={this.handleChange}
                        />
                        </label>
                    </div>
                    <Boton className="btn" type="submit">Iniciar Sesión</Boton>
                </form>
            </div>
        );
    }
}
