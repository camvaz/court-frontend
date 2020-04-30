import React, { Component } from "react";

export default class DashboardSingleton extends Component {
    render() {
        return <div>{this.props.match.params.user}</div>;
    }
}
