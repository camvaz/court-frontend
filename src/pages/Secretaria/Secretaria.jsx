import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import EnhancedRoute from "../../components/EnhancedRoute/EnhancedRoute";
import Participante from "./components/participante";
import { JugadoresTorneo } from "./components/jugadoresTorneo";
import { JugadoresFederacion } from "./components/jugadoresPorFerderacion";
import { Federacion } from "./components/Federacion";
import Mensaje, {
    AgregarParticipante
} from "./components/inscribirParticipantes/agregarParticipante";
class Secretaria extends Component {
    render() {
        return (
            <Switch>
                <EnhancedRoute
                    path="/dashboard/secretaria"
                    exact
                    withNavbar
                    withFooter
                    component={AgregarParticipante}
                />
            </Switch>
        );
    }
}

export default Secretaria;
