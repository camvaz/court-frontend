import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styled, {css} from 'styled-components';


const Derecho = styled.div`
        
    @media screen and (min-width: 767px){
        grid-column-start: 1;
        grid-column-end: 3;
    }
`;

const Contenedor = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: auto; 
   
    @media screen and (min-width: 767px){
        grid-template-columns: 30% 70%;
        
        .aplicarGrid{
            grid-column-start: 2;
            grid-column-end: 3;
        }
 
    }
    @media screen and (min-width: 1100px){  
       grid-template-columns: 25% 75%;  
    }

    
`;

export default class EnhancedRoute extends Component {
    render() {
        const { path, exact, withNavbar, withFooter, component } = this.props;
        let clase = "";
        withNavbar === true ? clase = "aplicarGrid" : clase = "";
        
        return (
                <Route
                    path={path}
                    exact={exact}
                    render={props => (
                        <>
                            <Contenedor>
                                {withNavbar && <Navbar/>}
                                <Derecho className={clase}>
                                    {React.createElement(component, props)}
                                </Derecho>
                            </Contenedor>
                            {withFooter && <Footer />}
                        </>
                    )}
                ></Route>
           
        );
    }
}
