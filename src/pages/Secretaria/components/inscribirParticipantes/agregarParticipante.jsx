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
        formData.append("archivo", this.state.file);

        const response = await fetch(`${API_ENDPOINT}/subir`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZTRkNzAzMzA4ZTVkY2ZlNGQ3OTVhZGFlMjc4ZjQ5MTY1NzkzMzQyNzFjYzk1YTQxNTViYTdjMzM2YzI3MGMwOWU5MWQyYjU0ZTQ4YjZiYjkiLCJpYXQiOjE1OTA3MjU3NjUsIm5iZiI6MTU5MDcyNTc2NSwiZXhwIjoxNjIyMjYxNzY1LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.UrSTGKt-7RGcnFiK4wro8tams8AYaGnf7id_gsHzPaQeR6sJNLvbjxML3u99EsbGSo1L3bvrfQ0JdldOfJ_Yf68H-prZBERCkkNO2bXGAcHwiBbJ0oJZLiBlp6T6OZ6glaHl5C9fllVATaK-85v-g3-Um43WrVHzv1nSftxfZ_18Cceq1qPxsicyapZnJ0MiivOuQqnU-XY2HP_JZkv_liXSsnXUFRtD-D8L9w1sAgHHbQDj2Bv8DRN_ElNK4e29nCNWT6azJxkU3Jg3TXTfsTbOR_KWRnuJ27PTdwTxCzJZVD4hNIJDzfBNLFOXABJTCCXYKF515ClGyH0RRXIutR3NhGeaAcheqJlPD10HBSmxWlx1mV71EuIg1peJPc1Dywz8lg2B3Q7x-A8QsLw3517AB8rk7IFR3Zpl_yzdjWlzEjhMpPdG9zDlrTQZjPbrMXgSm2osr8E__Hxy4qiacU16KsM6bxRsOwv7zEzPgypGgQfMoOuSO8tM1khl4oqONFG8LDpgbb2tHLHKYDO5sC5SeJBhEp238o7oLOY0og8pL6XruF265K5zuvhzuNOQ6coLB-mTLAfx39Z926MdQrqlJ5iceGiQWh8bi9ysQjiLwaxYGvmGGE2L3fFZwP7LcY9OCrQHML5FcwSZZMeqMyNbPcQplggFaSvVKDDJ_RQ`
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
        return (
            <div className="ContAddParticipantes">
                <form onSubmit={this.handleSubmit}>
                    <div id="contbtX">
                        <button className="btnX">X</button>
                    </div>
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

export default connect(null, mapDispatchToProps)(AgregarParticipante);
