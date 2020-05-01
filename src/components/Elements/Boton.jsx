import React from 'react';
import styled, {css} from 'styled-components';

const BotonAzul = styled.button`
  /* font */
  font-size: 0.78em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-block; 

  cursor: pointer;
  outline: none;
  border: none;

  padding: 15px 0;
  width: 180px;
  border-radius: 8px;

  color: var(--blanco);
  background: var(--fuerte-3);

  transition: all 0.15s;

  &:hover, &:active{
    background: var(--fuerte-1);
    transform: translateY(-2px);    
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16);
  }
  &:active{
    opacity: 0.5;
  }

`

const BotonVerde = styled(BotonAzul)`
  background: var(--verde-2);
  &:hover, &:active{
    background: var(--verde-3);
  }
`
const BotonTransparente = styled(BotonAzul)`
  background: none;
  color: var(--typo-negro);
  border: 1px solid var(--fuerte-3);
  &:hover, &:active{
    background: none;
    color: var(--typo-negro);
  }
  &:hover{
    border: 1px solid var(--typo-negro);
  }
`

function Boton ({className, children, color, botonHeader, onClick}){
  if (color === "verde")
    return( <BotonVerde className={className} onClick={onClick}>{children}</BotonVerde>);
  else if (color === "transparente")
    return( <BotonTransparente className={className} onClick={onClick}>{children}</BotonTransparente>);
  else
    return( <BotonAzul className={className} botonHeader={botonHeader} onClick={onClick}>{children}</BotonAzul>);
}

export default Boton;