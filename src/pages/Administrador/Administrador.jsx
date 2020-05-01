import React, { Component } from "react";
import { userTypes } from "../../constants/userTypes";
import { connect } from "react-redux";
import { setUsers } from "../../Redux/actions";
import { API_ENDPOINT } from "../../environment/environment";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import ImgAdmin from "../../assets/imagen-admin.png";
import NotFound from "../NotFound/NotFound";
import "./Administrador.scss";

class Administrador extends Component {
    state = {
        currentUserType: userTypes.ADMIN_TYPE,
        fetchError: false
    };

    componentDidMount() {
        this.loadUsers();
    }

    async loadUsers() {
        const response = await fetch(`${API_ENDPOINT}/api/all/users`);

        if (response) {
            const res = await response.json();
            this.props.updateUsers(res);
        } else {
            this.setState({
                fetchError: true
            });
        }
    }

    render() {
        const { users, fetchError } = this.props;
        const { currentUserType } = this.state;

        return fetchError ? (
            <NotFound />
        ) : (
            <main id="dashboard-admin">
                <section className="line" />
                <section className="user-types">
                    <h1>Tipo de usuario</h1>
                    <div className="types-list">
                        {Object.keys(userTypes).map((data, index) => (
                            <div className="type" key={index}>
                                <div className="linea"></div>
                                <p>{userTypes[data]?.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="user-section">
                    <div className="user-section-carousel">
                        <div className="wrapper">
                            <div className="users">
                                <input type="text" />
                                <div className="user-list">
                                    {Object.keys(users)
                                        .filter(
                                            key =>
                                                users[key]?.role ===
                                                currentUserType.role
                                        )
                                        .map((data, index) => (
                                            <div key={index} className="user">
                                                <div className="linea" />
                                                <div className="user-info">
                                                    <img
                                                        src={ImgAdmin}
                                                        alt="Foto de Administrador."
                                                    />
                                                    <div className="user-data">
                                                        <h2>
                                                            {users[data]?.name}
                                                        </h2>
                                                        <p>
                                                            {
                                                                currentUserType.description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="agregar-contacto">
                                    <Plus />
                                    <h4>Agregar contacto</h4>
                                </div>
                            </div>
                            <div className="create-user"></div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.list
});

const mapDispatchToProps = dispatch => {
    return {
        updateUsers: users => dispatch(setUsers(users))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Administrador);
