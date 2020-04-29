import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default class EnhancedRoute extends Component {
    render() {
        const { path, exact, withNavbar, withFooter, children } = this.props;
        return (
            <Route path={path} exact={exact}>
                {withNavbar && <Navbar />}
                {children}
                {withFooter && <Footer />}
            </Route>
        );
    }
}
