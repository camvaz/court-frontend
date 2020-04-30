import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class EnhancedRoute extends Component {
    render() {
        const { path, exact, withNavbar, withFooter, component } = this.props;
        return (
            <Route
                path={path}
                exact={exact}
                render={props => (
                    <>
                        {withNavbar && <Navbar />}
                        {React.createElement(component, props)}
                        {withFooter && <Footer />}
                    </>
                )}
            ></Route>
        );
    }
}
