import React, { Component } from "react";
import "./agregarParticipant.scss";
import plus from "../../../../assets/plus2.svg";
import "bulma/css/bulma.css";
import { toast } from "react-toastify";
import { API_ENDPOINT } from "../../../../environment/environment";
import {
    setTournaments,
    setInscriptions,
    setParticipants,
    setPlayers
} from "../../../../Redux/actions";
import { connect } from "react-redux";

class AgregarParticipante extends Component {
    state = {
        nombreArchivo: "",
        file: {}
    };

    fileSelectedHandler = event => {
        this.setState({
            nombreArchivo: event.target.files[0].name,
            file: event.target.files[0]
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        toast.info("Subiendo archivo...");
        const formData = new FormData();
        formData.append("file", this.state.file);

        const response = await fetch(`${API_ENDPOINT}/subir`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${this.props.userSession.token}`
            },
            body: formData
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .catch(e => console.log(e));
        toast.success("Archivo subido con éxito.");
        console.log(response);
        this.getTournaments();
    };

    async getTournaments() {
        const tournaments = await fetch(`${API_ENDPOINT}/all/tournaments`)
            .then(res => res.json())
            .catch(e => console.log(e));

        const inscriptions = await fetch(`${API_ENDPOINT}/all/inscriptions`)
            .then(res => res.json())
            .catch(e => console.log(e));

        const participants = await fetch(`${API_ENDPOINT}/all/participants`)
            .then(res => res.json())
            .catch(e => console.log(e));

        const players = await fetch(`${API_ENDPOINT}/all/players`)
            .then(res => res.json())
            .catch(e => console.log(e));

        if (tournaments && inscriptions && participants && players) {
            this.props.setTournaments(tournaments);
            this.props.setPlayers(players);
            this.props.setParticipants(participants);
            this.props.setInscriptions(inscriptions);
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="ContAddParticipantes">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="cargar">Cargar Archivo Excel</h1>

                    <div className="file has-name is-boxed">
                        <label className="file-label">
                            <input
                                className="file-input"
                                type="file"
                                name="resume"
                                onChange={this.fileSelectedHandler}
                            />
                            <span className="cargarFile">
                                <span className="file-label">
                                    <i className="im">
                                        <img
                                            className="im"
                                            src={plus}
                                            alt="add"
                                        />{" "}
                                        &nbsp; Buscar archivo
                                    </i>
                                </span>
                            </span>
                        </label>
                    </div>

                    <div className="file has-name is-boxed">
                        <label className="file-label">
                            <input
                                className="file-input"
                                type="file"
                                name="resume"
                                onChange={this.fileSelectedHandler}
                            />
                            <span className="cargarFile2">
                                <span className="file-label">
                                    Arrastar archivo
                                </span>
                                <span className="file-name">
                                    {this.state.nombreArchivo}
                                </span>
                            </span>
                        </label>
                    </div>
                    <div className="contbtnCargar">
                        <button type="submit" className="btcCargar">
                            CARGAR
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTournaments: users => dispatch(setTournaments(users)),
        setInscriptions: inscriptions =>
            dispatch(setInscriptions(inscriptions)),
        setParticipants: participants =>
            dispatch(setParticipants(participants)),
        setPlayers: players => dispatch(setPlayers(players))
    };
};

const mapStateToProps = state => ({
    userSession: state.userSession.session
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AgregarParticipante);
