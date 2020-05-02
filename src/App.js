import React, { Suspense, Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import EnhancedRoute from "./components/EnhancedRoute/EnhancedRoute";
import { adminRoutes } from "./pages/Administrador/AdministradorRoutes";
import { connect } from "react-redux";
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));

class App extends Component {
    render() {
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
                            {adminRoutes.map((data, index) => (
                                <EnhancedRoute
                                    key={index}
                                    withNavbar
                                    exact
                                    path={data.route}
                                    component={data.component}
                                />
                            ))}
                            
                            <EnhancedRoute component={NotFound} />
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
