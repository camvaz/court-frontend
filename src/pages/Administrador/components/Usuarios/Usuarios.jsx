import React, { Component } from "react";
import { userTypes } from "../../../../constants/userTypes";
import { connect } from "react-redux";
import { setUsers } from "../../../../Redux/actions";
import { API_ENDPOINT } from "../../../../environment/environment";
import { ReactComponent as Plus } from "../../../../assets/plus.svg";
import { ReactComponent as Lupa } from "../../../../assets/lupa.svg";
import { ReactComponent as Gear } from "../../../../assets/gear.svg";
import { ReactComponent as Flecha } from "../../../../assets/flecha-azul.svg";
import ImgAdmin from "../../../../assets/imagen-admin.png";
import "./Usuarios.scss";
import "animate.css";

class Usuarios extends Component {
    state = {
        currentUserType: userTypes.ADMIN_TYPE,
        currentUserToModify: {
            nombre: "",
            correo: "",
            puesto: "",
            telefono: "",
            contraseña: ""
        },
        userToCreate: {
            nombre: "",
            correo: "",
            puesto: "",
            telefono: "",
            contraseña: ""
        },
        slide: false,
        accionEnForm: true,
        userToDelete: {}
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
        const { currentUserType, accionEnForm, slide } = this.state;
        return (
            <main id="dashboard-admin">
                <section className="line" />
                <section className="user-types">
                    <h5>Tipo de usuario</h5>
                    <div className="types-list">
                        {Object.keys(userTypes).map((data, index) => (
                            <div
                                className={`type ${
                                    currentUserType === userTypes[data]
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => {
                                    this.setState({
                                        currentUserType: userTypes[data]
                                    });
                                }}
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
                        <div
                            className="wrapper"
                            style={{
                                transform: `translate(${
                                    slide ? "-50" : "0"
                                }%, 0%)`
                            }}
                        >
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
                                                className="user animated fadeIn"
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
                                                    <Gear
                                                        className="gear"
                                                        onClick={() => {
                                                            document
                                                                .getElementById(
                                                                    `admin-user-${index}`
                                                                )
                                                                .classList.add(
                                                                    "show"
                                                                );
                                                        }}
                                                    />
                                                    <div
                                                        className="menu"
                                                        id={`admin-user-${index}`}
                                                        onMouseLeave={() => {
                                                            document
                                                                .getElementById(
                                                                    `admin-user-${index}`
                                                                )
                                                                .classList.remove(
                                                                    "show"
                                                                );
                                                        }}
                                                    >
                                                        <p>Dar de baja</p>
                                                        <p>Modificar</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div
                                    className="bottom-button"
                                    onClick={() => {
                                        this.setState({ slide: true });
                                    }}
                                >
                                    <Plus />
                                    <h4>
                                        {accionEnForm
                                            ? "Crear Usuario"
                                            : "Modificar usuario"}
                                    </h4>
                                </div>
                            </div>
                            <div className="user-cu">
                                <div className="flecha-container">
                                    <Flecha
                                        onClick={() => {
                                            this.setState({ slide: false });
                                        }}
                                    />
                                </div>
                                <form>
                                    <h2>Crear Usuario</h2>
                                    <div className="field">
                                        <label htmlFor="nombre">
                                            Nombre completo
                                        </label>
                                        <input type="text" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="nombre">Correo</label>
                                        <input type="text" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="nombre">Puesto</label>
                                        <select name="puesto" id="">
                                            {Object.keys(userTypes).map(
                                                (data, index) => (
                                                    <option
                                                        value={
                                                            userTypes[data]
                                                                ?.role
                                                        }
                                                        key={index}
                                                    >
                                                        {
                                                            userTypes[data]
                                                                ?.description
                                                        }
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="telefono">
                                            Telefono
                                        </label>
                                        <input type="text" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="img">Foto</label>
                                        <input type="file" />
                                    </div>
                                </form>
                                <div className="bottom-button">
                                    <h4>Guardar</h4>
                                </div>
                            </div>
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
