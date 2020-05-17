import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import EnhancedRoute from "../../components/EnhancedRoute/EnhancedRoute";
import Participante from "./components/participante";
import { JugadoresTorneo } from "./components/jugadoresTorneo";
import { JugadoresFederacion } from "./components/jugadoresPorFerderacion";
import { Federacion } from "./components/Federacion";
import Mensaje from "./components/inscribirParticipantes/agregarParticipante";
class Secretaria extends Component {
    render() {
        return (
            <Switch>
                <EnhancedRoute
                    path="/secretaria/participante"
                    exact
                    withNavbar
                    withFooter
                    component={Participante}
                />
                <EnhancedRoute
                    path="/secretaria/jugadores-torneo"
                    exact
                    withNavbar
                    withFooter
                    component={JugadoresTorneo}
                />
                <EnhancedRoute
                    path="/secretaria/jugadores-federacion"
                    exact
                    withNavbar
                    withFooter
                    component={JugadoresFederacion}
                />
                <EnhancedRoute
                    path="/secretaria/federacion"
                    exact
                    withNavbar
                    withFooter
                    component={Federacion}
                />
                <EnhancedRoute
                    path="/secretaria"
                    exact
                    withNavbar
                    withFooter
                    component={Mensaje}
                />
            </Switch>
        );
    }
}

export default Secretaria;
