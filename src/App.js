import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import EnhancedRoute from "./components/EnhancedRoute/EnhancedRoute";
import { adminRoutes } from "./pages/Administrador/administrador.routes";
import { userTypes } from "./constants/userTypes";
import { connect } from "react-redux";
import {
    setTournaments,
    setInscriptions,
    setParticipants,
    setPlayers,
    setMatches,
    setUserSession
} from "./Redux/actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AgregarParticipante from "./pages/Secretaria/components/inscribirParticipantes/agregarParticipante";
import Secretaria from "./pages/Secretaria/Secretaria";
import { API_ENDPOINT } from "./environment/environment";
import { Participante } from "./pages/Secretaria/components/participante";
import Tarjeta from "./pages/Administrador/components/Torneos/arbol/Tarjeta";
import Match from "./pages/Administrador/components/Torneos/arbol/Match";
import Round from "./pages/Administrador/components/Torneos/arbol/Round";
import Tournament from "./pages/Administrador/components/Torneos/arbol/Tournament";
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Torneos = React.lazy(() =>
    import("./pages/Administrador/components/Torneos/Torneos")
);
const VisualizarTorneo = React.lazy(() =>
    import("./pages/Administrador/components/Torneos/TarjetaVisualizarTorneo")
);
const AgregarTorneo = React.lazy(() =>
    import("./pages/Administrador/components/Torneos/AgregarTorneo")
);
const ModificarTorneo = React.lazy(() =>
    import("./pages/Administrador/components/Torneos/ModificarTorneo")
);
const Jugadores = React.lazy(() =>
    import("./pages/Administrador/components/Torneos/Jugadores")
);
const TarjetaJugador = React.lazy(() =>
    import("./pages/Administrador/components/Torneos/TarjetaJugador")
);

const ResultadosPartidos = React.lazy(() =>
    import("./pages/Home/ResultadosPartidos")
);

toast.configure();

class App extends Component {
    state = {
        user: "n"
    };

    componentDidMount() {
        this.getTournaments();
        this.keepSession();
    }

    keepSession() {
        const localStorageData = localStorage.getItem("courtUserData");

        if (localStorageData) {
            const parsedStorage = JSON.parse(localStorageData);
            parsedStorage.token && this.props.setUserSession(parsedStorage);
        }
    }

    async getTournaments() {
        const tournaments = await fetch(`${API_ENDPOINT}/all/tournaments`)
            .then(res => {
                console.log(res)
                return res.json();})
                .then(x => {console.log(x); return x})
            .catch(e => console.log(e));

        const matches = await fetch(`${API_ENDPOINT}/all/matches`)
            .then(res => res.json())
            .catch(e => console.log(e));

        const inscriptions = await fetch(`${API_ENDPOINT}/all/inscriptions`)
            .then(res => res.json())
            .catch(e => console.log(e));

        const participants = await fetch(`${API_ENDPOINT}/all/participants`)
            .then(res => res.json())
            .catch(e => console.log(e));

        const players = await fetch(`${API_ENDPOINT}/all/players`)
            .then(res => res.json())
            .catch(e => console.log(e));

        console.log(tournaments) 


        if (tournaments && inscriptions && participants && players && matches) {
            this.props.setTournaments(tournaments);
            this.props.setPlayers(players);
            this.props.setParticipants(participants);
            this.props.setInscriptions(inscriptions);
            this.props.setMatches(matches);
        }
    }

    render() {
        const { role } = this.props.userSession.user;
        return (
            <Router>
                <ScrollToTop>
                    <Suspense
                        fallback={<div>Aqui va el loading component.</div>}
                    >
                        <Switch>
                            <EnhancedRoute
                                path="/"
                                exact
                                withNavbar
                                withFooter
                                component={Home}
                            />
                            <EnhancedRoute
                                path="/torneos"
                                exact
                                withNavbar
                                withFooter
                                component={Torneos}
                            />
                            <EnhancedRoute
                                path="/torneos/visualizar"
                                exact
                                withNavbar
                                withFooter
                                component={VisualizarTorneo}
                            />
                            <EnhancedRoute
                                path="/torneos/agregar"
                                exact
                                withNavbar
                                withFooter
                                component={AgregarTorneo}
                            />
                            <EnhancedRoute
                                path="/torneos/modificar"
                                exact
                                withNavbar
                                withFooter
                                component={ModificarTorneo}
                            />
                            <EnhancedRoute
                                path="/torneos/jugadores"
                                exact
                                withNavbar
                                withFooter
                                component={Jugadores}
                            />
                            <EnhancedRoute
                                path="/torneos/TarjetaJugador"
                                exact
                                withNavbar
                                withFooter
                                component={TarjetaJugador}
                            />
                            <EnhancedRoute
                                path="/torneos/partidos"
                                exact
                                withNavbar
                                withFooter
                                component={ResultadosPartidos}
                            />
                            <EnhancedRoute
                                path="/login"
                                exact
                                component={Login}
                            />
                            {role === userTypes.ADMIN_TYPE.role &&
                                adminRoutes.map((data, index) => (
                                    <EnhancedRoute
                                        key={index}
                                        withNavbar
                                        exact
                                        path={data.route}
                                        component={data.component}
                                    />
                                ))}

                            <EnhancedRoute
                                path="/agregar-participantes"
                                exact
                                withNavbar
                                withFooter
                                component={AgregarParticipante}
                            />
                            <EnhancedRoute
                                path="/torneos/bracket"
                                exact
                                withNavbar
                                withFooter
                                component={Tournament}
                            />
                            <EnhancedRoute component={NotFound} withNavbar />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    userSession: state.userSession.session,
    tournaments: state.tournaments
});

const mapDispatchToProps = dispatch => {
    return {
        setUserSession: userSession => dispatch(setUserSession(userSession)),
        setTournaments: users => dispatch(setTournaments(users)),
        setInscriptions: inscriptions =>
            dispatch(setInscriptions(inscriptions)),
        setParticipants: participants =>
            dispatch(setParticipants(participants)),
        setPlayers: players => dispatch(setPlayers(players)),
        setMatches: matches => dispatch(setMatches(matches))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
