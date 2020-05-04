import React, { Component } from "react"
import iconousuario from '../../assets/icono-usuario.svg'
import url from './url'
import Boton from '../../components/Elements/Boton';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const ContenedorLogin = styled.div`
    position: relative;
    background: #FBFBFB;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
   
    

    @media screen and (min-width: 767px){
        width: 30%;
        box-shadow: 4px 4px 25px gray;
        margin-top: 50px;
    }
`;


const ContenedorInfo = styled.div`
    h3{
        text-align: center;
        font-size: 1.5rem;
        color: #1A3748;
    }
    img{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .formulario{
        width: 70%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 20px;

        @media screen and (min-width: 767px){
            width: 60%;
        }
         
        
        label, 
        input{
            width: 100%;
            position: relative;
            display: block;
            padding: 5px 0;
            color: #1A3748;
            font-size: .9rem;
        }
        input{
            border: none;
            background: none;
            border-bottom: 1px solid var(--azul-1);
           
        }
        .btn{
            width: 100%;
            margin: 50px 0;
        }
        

    }

`;

const IrAtras = styled.button`
  padding: 10px;
  border: none;
  background: none;

  a{
      color: var(--typo-gris);
      text-decoration: none;
      font-weight: bold;
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 40px;

      
  }


`;


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
            <ContenedorLogin>
                <ContenedorInfo>
                    <IrAtras>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.399597 11.5286L9.42798 2.50001C9.6857 2.24229 10.0292 2.10083 10.3954 2.10083C10.7621 2.10083 11.1054 2.2425 11.3631 2.50001L12.1828 3.31993C12.4403 3.57724 12.5822 3.92094 12.5822 4.2874C12.5822 4.65365 12.4403 5.00894 12.1828 5.26625L6.9158 10.5449H23.6494C24.4039 10.5449 25 11.1355 25 11.8902V13.0493C25 13.804 24.4039 14.4542 23.6494 14.4542H6.85605L12.1826 19.7623C12.4401 20.02 12.582 20.3543 12.582 20.7208C12.582 21.0869 12.4401 21.4261 12.1826 21.6836L11.3629 22.5009C11.1052 22.7586 10.7619 22.899 10.3952 22.899C10.029 22.899 9.6855 22.7568 9.42777 22.499L0.399393 13.4707C0.141062 13.2121 -0.00100899 12.867 7.62939e-06 12.5001C-0.000804901 12.132 0.141062 11.7867 0.399597 11.5286Z" fill="#1A3748"/>
                    </svg>
 
                        <Link to="/"></Link> 
                    </IrAtras>
                    <h3>Iniciar sesión</h3>
                    <img width="120px" src={iconousuario} alt="Imagen ilustracion Tennis"/>

                    <form className="formulario" onSubmit={this.handleSubmit}>
                  
                        <label>Nombre del usuario o correo </label>
                        <input 
                            type="text"
                            placeholder="correo@example.com"
                            name="email"
                            value={this.state.form.email}
                        
                            onChange={this.handleChange}
                        />
           
                        <label>Contraseña</label>
                        <input 
                            type="text"
                            placeholder="*********************"
                            name="password"
                            value={this.state.form.password}
                            onChange={this.handleChange}
                        />
                        
                  
                        <Boton className="btn" type="submit">Ingresar</Boton>
                    </form>
                </ContenedorInfo>
            </ContenedorLogin>
        );
    }
}
