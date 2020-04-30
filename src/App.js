import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import EnhancedRoute from "./components/EnhancedRoute/EnhancedRoute";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const DashboardSingleton = React.lazy(() =>
    import("./components/DashboardSingleton/DashboardSingleton")
);

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Suspense fallback={<div>Aqui va el loading component.</div>}>
                    <Switch>
                        <EnhancedRoute
                            path="/"
                            exact
                            withNavbar
                            withFooter
                            component={Home}
                        ></EnhancedRoute>
                        <EnhancedRoute
                            path="/login"
                            exact
                            component={Login}
                        ></EnhancedRoute>
                        <EnhancedRoute
                            path="/dashboard/:user"
                            exact
                            withNavbar={true}
                            withFooter={false}
                            component={DashboardSingleton}
                        ></EnhancedRoute>
                    </Switch>
                </Suspense>
            </ScrollToTop>
        </Router>
    );
}

export default App;
