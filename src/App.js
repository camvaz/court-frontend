import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import EnhancedRoute from "./components/EnhancedRoute/EnhancedRoute";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Suspense fallback={<div>Aqui va el loading component.</div>}>
                    <Switch>
                        <EnhancedRoute
                            path="/"
                            exact={true}
                            withNavbar={true}
                            withFooter={true}
                        >
                            <Home />
                        </EnhancedRoute>
                        <EnhancedRoute
                            path="/login"
                            exact={true}
                            withNavbar={false}
                            withFooter={false}
                        >
                            <Login />
                        </EnhancedRoute>
                    </Switch>
                </Suspense>
            </ScrollToTop>
        </Router>
    );
}

export default App;
