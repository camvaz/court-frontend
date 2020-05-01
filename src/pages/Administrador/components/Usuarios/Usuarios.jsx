import React, { Component } from "react";
import { userTypes } from "../../../../constants/userTypes";
import { connect } from "react-redux";
import { setUsers } from "../../../../Redux/actions";
import { API_ENDPOINT } from "../../../../environment/environment";
import { ReactComponent as Plus } from "../../../../assets/plus.svg";
import { ReactComponent as Lupa } from "../../../../assets/lupa.svg";
import { ReactComponent as Gear } from "../../../../assets/gear.svg";
import ImgAdmin from "../../../../assets/imagen-admin.png";
import "./Usuarios.scss";

class Usuarios extends Component {
    state = {
        currentUserType: userTypes.ADMIN_TYPE
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
        const { users } = this.props;
        const { currentUserType } = this.state;

        return (
            <main id="dashboard-admin">
                <section className="line" />
                <section className="user-types">
                    <h5>Tipo de usuario</h5>
                    <div className="types-list">
                        {Object.keys(userTypes).map((data, index) => (
                            <div
                                className={`type ${
                                    index === 0 ? "selected" : ""
                                }`}
                                key={index}
                            >
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
                                <div className="input">
                                    <Lupa />
                                    <input
                                        type="text"
                                        placeholder="Nombre de usuario"
                                    />
                                </div>
                                <div className="user-list">
                                    {Object.keys(users)
                                        .filter(
                                            key =>
                                                users[key]?.role ===
                                                currentUserType.role
                                        )
                                        .map((data, index) => (
                                            <div
                                                key={index}
                                                className="user selected"
                                            >
                                                <div className="linea" />
                                                <div className="user-info">
                                                    <img
                                                        src={ImgAdmin}
                                                        alt="Foto de Administrador."
                                                    />
                                                    <div className="user-data">
                                                        <h5>
                                                            {users[data]?.name}
                                                        </h5>
                                                        <p>
                                                            {
                                                                currentUserType.description
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="engrane-container">
                                                    <Gear className="gear" />
                                                    <div className="menu">
                                                        <p>Dar de baja</p>
                                                        <p>Modificar</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="agregar-contacto">
                                    <Plus />
                                    <h4>Agregar nuevo usuario</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
