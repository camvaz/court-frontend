import React, { Component } from "react";
import { userTypes } from "../../constants/userTypes";
import { Switch } from "react-router-dom";
import EnhancedRoute from "../EnhancedRoute/EnhancedRoute";
const Administrador = React.lazy(() =>
    import("../../pages/Administrador/Administrador")
);

export default class DashboardSingleton extends Component {
    render() {
        const { ADMIN_TYPE } = userTypes;
        return (
            <Switch>
                <EnhancedRoute
                    path={`/dashboard/${ADMIN_TYPE}`}
                    exact
                    withNavbar
                    component={Administrador}
                />
            </Switch>
        );
    }
}
