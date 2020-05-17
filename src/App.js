import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import EnhancedRoute from "./components/EnhancedRoute/EnhancedRoute";
import { adminRoutes } from "./pages/Administrador/administrador.routes";
import { userTypes } from "./constants/userTypes";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {AgregarParticipante} from './pages/Secretaria/components/inscribirParticipantes/agregarParticipante';
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
           <AgregarParticipante/>
            /*
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

                            <EnhancedRoute component={NotFound} withNavbar />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Router>*/
        );
    }
}

const mapStateToProps = state => ({
    userSession: state.userSession.session
});

export default connect(mapStateToProps)(App);
