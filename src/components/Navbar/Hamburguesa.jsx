import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from '../Navbar/Navbar';

const ContenedorHam = styled.div`
    position: fixed;
    width: 50px; 
    z-index: 999;
    right: 16px;
    @media screen and (min-width: 769px){
        display: none;
    }
    .equis{
       background: none;
       
        &::before {
            background: var(--blanco);
            transform: rotate(45deg);
            top: 0;
        }
        &::after {
            background: var(--blanco);
            transform: rotate(135deg);
            top: 0;
            width: 34px;
        }   
    }
`;

const Icono = styled.div`
        width: 25px;
        height: 5px;
        background: var(--rosa-1);
        position: absolute;
        top: 40%;
        left: 40%;
        transform: translate(-50%, -50%);
        transition-duration: 0.5;
        &:before,
        &:after {
          content: "";
          position: absolute;
          height: 5px;
          background: var(--rosa-1);
          transition-duration: 0.3s;
        }
        &::before {
            width: 34px;
            top: -10px;
        }
        &::after {
            top: 10px;
            width: 30px;
        } 
`;
class Hamburguesa extends Component {
    constructor(props){
        super(props); 
    }
  
    render() {         
        var estado = this.props.estado;   
        let equis, visible;

        if(estado){
            equis = "equis";  
            visible = <Menu otra={this.props.otra} mostrar linkMenu={ this.props.linkMenu }></Menu>  
        }else{
            equis = "";
            visible = <Menu ocultar></Menu>  
        }
        
        return(
            <React.Fragment>  
                <ContenedorHam onClick={this.props.desplegarMenu}>
                    <Icono className={equis}></Icono>
                </ContenedorHam>
                {/* Si es visible entonces muestra el menu, de lo contrario lo oculta*/}
                {visible} 
                
            </React.Fragment>
        );

    }
}