import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import EnhancedRoute from "./components/EnhancedRoute/EnhancedRoute";
import { adminRoutes } from "./pages/Administrador/administrador.routes";
import { userTypes } from "./constants/userTypes";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { JugadoresFederacion } from "./pages/Secretaria/components/jugadoresPorFerderacion";
import Secretaria from "./pages/Secretaria/Secretaria";
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));

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

                            <Route path="/dashboard/secretaria">
                                <Secretaria />
                            </Route>

                            <Route path="/dashboard/secretaria/jugadores">
                                <JugadoresFederacion />
                            </Route>

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
