import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';

const ComponenteCabecera = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: flex-end;
    padding: 15px 0;
    background: white;
    margin-bottom: 50px;
    @media screen and (min-width: 767px){
       
    }

    h1{
        position:relative;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        left: 20px;
    }
    img{
        width: 50px; 
        position: relative;
        right: 20px;
    }
`;

function Cabecera(){

    return(
        <ComponenteCabecera>
            <h1>CROSS COURT</h1>
            <img src={Logo} />
        </ComponenteCabecera>
    );
}

export default Cabecera;