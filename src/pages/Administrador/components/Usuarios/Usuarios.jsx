import React, { Component } from "react";
import { toast } from "react-toastify";
import { userTypes } from "../../../../constants/userTypes";
import { connect } from "react-redux";
import { setUsers } from "../../../../Redux/actions";
import { API_ENDPOINT } from "../../../../environment/environment";
import { ReactComponent as Plus } from "../../../../assets/plus.svg";
import { ReactComponent as Lupa } from "../../../../assets/lupa.svg";
import { ReactComponent as Gear } from "../../../../assets/gear.svg";
import { ReactComponent as Flecha } from "../../../../assets/flecha-azul.svg";
import ImgAdmin from "../../../../assets/userHombre.png";
import Cabecera from "../../../Home/Cabecera";
import "./Usuarios.scss";
import "animate.css";

class Usuarios extends Component {
    state = {
        currentUserType: userTypes.ADMIN_TYPE,
        formData: {
            name: "",
            email: "",
            phone: "",
            role: userTypes.ADMIN_TYPE.role,
            password: ""
        },
        uid: 0,
        searchInput: "",
        slide: false,
        accionEnForm: true
    };

    componentDidMount() {
        this.loadUsers();
    }

    async loadUsers() {
        const { token } = this.props.userSession.session;
        console.log(this.props);
        const response = await fetch(`${API_ENDPOINT}/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        if (response) {
            const res = await response.json();
            this.props.updateUsers(res.data);
        } else {
            this.setState({
                fetchError: true
            });
        }
    }

    resetFormData() {
        this.setState({
            formData: {
                name: "",
                email: "",
                phone: "",
                role: userTypes.ADMIN_TYPE.role,
                password: ""
            }
        });
    }

    onChange = (target, campo) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [campo]: target.value
            }
        });
    };

    onDelete = async user => {
        const { token } = this.props.userSession.session;
        const response = await fetch(`${API_ENDPOINT}/users/${user}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log(response);

        if (response) {
            if (response.status === 202) {
                this.loadUsers();
                toast.success("✔️ Usuario eliminado con éxito", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                });
            }
            const toJson = await response.json();
            console.log(toJson);
        }
    };

    onSubmit = async e => {
        e.preventDefault();
        const { token } = this.props.userSession.session;
        const { name, email, phone, role, password } = this.state.formData;

        if (this.state.accionEnForm) {
            const formData = new FormData();

            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("role", role);
            formData.append("password", password);
            formData.append("c_password", password);

            const response = await fetch(`${API_ENDPOINT}/users`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            if (response) {
                const toJson = await response.json();
                console.log(toJson);
                this.loadUsers();
                toast.success("✔️ Usuario creado con éxito", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                });
                this.setState({
                    slide: false
                });
            }
        } else {
            const formData = new URLSearchParams();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("role", role);
            formData.append("password", password);
            formData.append("c_password", password);
            console.log(formData);
            const response = await fetch(
                `${API_ENDPOINT}/users/${this.state.uid}`,
                {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    redirect: "follow",
                    body: formData
                }
            );

            console.log(response);
            if (response) {
                const toJson = await response.json();
                console.log(toJson);
                this.loadUsers();
                toast.success("✔️ Usuario modificado con éxito", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000
                });
                this.setState({
                    slide: false
                });
            }
        }
    };

    render() {
        const { users } = this.props;
        const {
            currentUserType,
            formData,
            accionEnForm,
            slide,
            searchInput
        } = this.state;
        const { name, email, phone, role, password } = formData;
        return (
            <React.Fragment>
                <Cabecera />
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
                                            currentUserType: userTypes[data],
                                            slide: false
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
                                            value={searchInput}
                                            onChange={e => {
                                                this.setState({
                                                    searchInput: e.target.value
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="user-list">
                                        {Object.keys(users)
                                            .filter(
                                                key =>
                                                    users[key]?.role ===
                                                        currentUserType.role &&
                                                    users[key]?.name
                                                        .toLowerCase()
                                                        .includes(searchInput)
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
                                                                {
                                                                    users[data]
                                                                        ?.name
                                                                }
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
                                                            <p
                                                                onClick={() => {
                                                                    this.onDelete(
                                                                        data
                                                                    );
                                                                    document
                                                                        .getElementById(
                                                                            `admin-user-${index}`
                                                                        )
                                                                        .classList.remove(
                                                                            "show"
                                                                        );
                                                                }}
                                                            >
                                                                Dar de baja
                                                            </p>
                                                            <p
                                                                onClick={() => {
                                                                    this.setState(
                                                                        {
                                                                            slide: true,
                                                                            accionEnForm: false,
                                                                            formData: {
                                                                                name:
                                                                                    users[
                                                                                        data
                                                                                    ]
                                                                                        ?.name,
                                                                                email:
                                                                                    users[
                                                                                        data
                                                                                    ]
                                                                                        ?.email,
                                                                                phone:
                                                                                    users[
                                                                                        data
                                                                                    ]
                                                                                        ?.phone,
                                                                                role:
                                                                                    users[
                                                                                        data
                                                                                    ]
                                                                                        ?.role,
                                                                                password:
                                                                                    ""
                                                                            },
                                                                            uid: data
                                                                        }
                                                                    );
                                                                }}
                                                            >
                                                                Modificar
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                    <div
                                        className="bottom-button"
                                        onClick={() => {
                                            this.resetFormData();
                                            this.setState({
                                                slide: true,
                                                accionEnForm: true
                                            });
                                        }}
                                    >
                                        <Plus />
                                        <h4>Agregar nuevo usuario</h4>
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
                                    <form onSubmit={this.onSubmit}>
                                        {accionEnForm ? (
                                            <h2>Crear Usuario</h2>
                                        ) : (
                                            <h2>Modificar Usuario</h2>
                                        )}
                                        <div className="field">
                                            <label htmlFor="nombre">
                                                Nombre completo
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={e =>
                                                    this.onChange(
                                                        e.target,
                                                        "name"
                                                    )
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="nombre">
                                                Correo
                                            </label>
                                            <input
                                                type="text"
                                                name="email"
                                                value={email}
                                                onChange={e =>
                                                    this.onChange(
                                                        e.target,
                                                        "email"
                                                    )
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="nombre">
                                                Puesto
                                            </label>
                                            <select
                                                name="role"
                                                id="role"
                                                value={role}
                                                onChange={e =>
                                                    this.onChange(
                                                        e.target,
                                                        "role"
                                                    )
                                                }
                                                required
                                            >
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
                                            <input
                                                type="text"
                                                name="phone"
                                                value={phone}
                                                onChange={e =>
                                                    this.onChange(
                                                        e.target,
                                                        "phone"
                                                    )
                                                }
                                                required
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="contraseña">
                                                Contraseña
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={password}
                                                onChange={e =>
                                                    this.onChange(
                                                        e.target,
                                                        "password"
                                                    )
                                                }
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="bottom-button"
                                        >
                                            <h4>Guardar</h4>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.list,
    userSession: state.userSession
});

const mapDispatchToProps = dispatch => {
    return {
        updateUsers: users => dispatch(setUsers(users))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);
