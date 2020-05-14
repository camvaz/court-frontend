import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import EnhancedRoute from "./components/EnhancedRoute/EnhancedRoute";
import { adminRoutes } from "./pages/Administrador/administrador.routes";
import { userTypes } from "./constants/userTypes";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Torneos = React.lazy(() => import("./pages/Administrador/components/Torneos/Torneos"));
const VisualizarTorneo = React.lazy(() => import ("./pages/Administrador/components/Torneos/TarjetaVisualizarTorneo"));
const AgregarTorneo = React.lazy(() => import ("./pages/Administrador/components/Torneos/AgregarTorneo"));
const Jugadores= React.lazy(() => import ("./pages/Administrador/components/Torneos/Jugadores"));
const TarjetaJugador= React.lazy(() => import ("./pages/Administrador/components/Torneos/TarjetaJugador"));

toast.configure();

class App extends Component {
    state = {
        user: "n"
    };
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

                            <EnhancedRoute component={NotFound} withNavbar />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    userSession: state.userSession.session
});

export default connect(mapStateToProps)(App);
