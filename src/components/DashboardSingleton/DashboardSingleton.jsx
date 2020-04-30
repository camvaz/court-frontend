import React, { Component } from "react";

export default class DashboardSingleton extends Component {
    render() {
        const { user } = this.props.match.params;
        switch (user) {
            case "admin": {
                return <div>{this.props.match.params.user}</div>;
            }
            default: {
                return <div>Aqui va un 404 component</div>;
            }
        }
    }
}
