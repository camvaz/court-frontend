import React, { Component } from "react";
import { toast } from "react-toastify";
import { userTypes } from "../../../../constants/userTypes";
import { connect } from "react-redux";
import { setTournaments } from "../../../../Redux/actions";
import { API_ENDPOINT } from "../../../../environment/environment";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import salir from "../../../../assets/cerrar.svg";


const  ContenedorGeneral = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    Blend: Pass Through;
`;

const ContenedorTarjeta = styled.div`    
    h1{
        font-family: roboto;
        font-style: bold;
        font-size: 20px;
        margin: 60px 0px 40px 0px;
    }

    position: absolute;
    text-align: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80%;
    height: 75%;
    margin: auto;
    background: #F5F5F5;
    border-radius: 10px;
    z-index: 1;

    -webkit-box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);
    box-shadow: 0px 0px 5px 0px rgba(176,176,176,1);

    @media screen and (min-width: 767px){
        width: 45%;
        height: 80%;
    }
`;

const ContenedorImagen = styled.form`
    img{
        position: relative;
        float: right;
        margin: 20px;
        width: 20px;
    }

    img:hover{
        cursor: pointer;
    }

    position: relative;
    width: 100%;
`;

const ContenedorFormulario = styled.div`
    label{
        position: relative;
        font-family: Roboto;
        font-style: Regular;
        font-size: 12px;
        color: #1A3748;
        display: block;
        width: 100%;
        float: left;
        margin-left: 20px;
        margin-bottom: 10px;
        text-align: left;
    }


    select{
        margin-bottom: 20px;
        background: none;
        border: none;
        border-bottom: 1px solid #AEBAC3;
        float: left;
        margin-left: 20px;
        font-family: Roboto;
        font-style: Regular;
        font-size: 12px;
        color: #AEBAC3;
        width: 100px;

        @media screen and (min-width: 767px){
            margin-bottom: 30px;
        }
    }

    input{
        margin-bottom: 20px;
        width:90%;  
        height: 20px;
        border: none;
        background: none;
        border-bottom: 2px solid #AEBAC3;
        
        font-family: roboto;
        font-style: regular;
        color: #AEBAC3;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        @media screen and (min-width: 767px){
            margin-bottom: 30px;
        }
    }

    #divCategoria{
        width: 50%;
        display: inline-block;
    }

    #divCompetencia{
        width: 50%;
        display: inline-block;
    }

    #boton{
        font-family: Roboto;
        font-style: Bold;
        font-size: 14px;
        height: 40px;
        background: #1A3748;
        color: white;
        position: relative;
        bottom: 2px;

        @media screen and (min-width: 767px){
            height: 60px
        }
    }

    #boton:hover{
        cursor: pointer;
    } 

    position: relative;
    width: 100%;
`;
class ModificarTorneo extends Component{
    state = {
        currentUserType: userTypes.ADMIN_TYPE,
        formData: {
            name: "",
            date: "",
            category: "",
            competition: "",
            nRounds: "",
            location: ""
        },
        uid: 0,
        searchInput: "",
        slide: false,
        accionEnForm: true
    };

    async loadTournaments() {
        const { token } = this.props.userSession.session;
        const {uid} = this.props.location;

        console.log(this.props);
        const response = await fetch(`${API_ENDPOINT}/all/tournaments`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        if (response) {
            const res = await response.json();
            this.props.updateTournaments(res.data);
        } else {
            this.setState({
                fetchError: true
            });
        }
    }

    resetFormData() {
        const { nombre, date, category, competition, nRounds, location } = this.props.location.state.formData;
        this.setState({
            formData: {
                name: nombre,
                date: date,
                category: category,
                competition: competition,
                nRounds: nRounds,
                location: location
            }
        });
        console.log("Datadatadata");
        console.log(this.state.formData)
    }

    onChange = (target, campo) => {
        
        if(campo == "date"){
            var dt= target.value+":48.000"
            console.log(dt);

            this.setState({
                formData: {
                    ...this.state.formData,
                    [campo]: dt
                }
            });
        }
        else{
            this.setState({
                formData: {
                    ...this.state.formData,
                    [campo]: target.value
                }
            });
        }
    };

    onSubmit = async e => {
        var myHeaders = new Headers();
        myHeaders.append("_method", "PUT");

        e.preventDefault();
        const { token } = this.props.userSession.session;
        const { name, date, category, competition, nRounds, location} = this.state.formData;
        const formData = new FormData();
        const {uid} = this.props.location.state.uid;

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", name);
        urlencoded.append("date", date);
        urlencoded.append("category", category);
        urlencoded.append("competition", competition);
        urlencoded.append("nRounds", nRounds);
        urlencoded.append("location", location);

        console.log("Data a agregar");
        console.log(urlencoded);

        const response = await fetch(
            `${API_ENDPOINT}/home/tournaments/update/${this.props.location.state.uid}`,
            {
                method: "PUT",
                headers: myHeaders,
                // headers: {
                //     Accept: "application/json",
                //     //Authorization: `Bearer`
                // },
                body: urlencoded,
                redirect: 'follow'
            }
        );

        console.log(response);
        if (response) {
            const toJson = await response.json();
            console.log(toJson);
            this.loadTournaments();
            toast.success("✔️ Torneo modificado con éxito", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000
            });
            this.setState({
                slide: false
            });
        }
        
    };

    render(){
        const {
            formData,
            accionEnForm,
            slide,
            searchInput
        } = this.state;
        const { nombre, date, category, competition, nRounds, location } = this.props.location.state.formData;

        return(
            <ContenedorGeneral>
            {/* {this.resetFormData()}; */}
                <ContenedorTarjeta>
                    <ContenedorImagen>
                        <Link
                            to={{
                                pathname: "/torneos",
                            }}
                            >
                                <img src={salir}alt=""/>
                        </Link>
                        
                    </ContenedorImagen>
                    <form onSubmit={this.onSubmit}>
                        <h1>Modificar Torneo</h1>  
                        <ContenedorFormulario>
                            <label htmlFor="nombre">Nombre:</label>
                            <input 
                                type="text" 
                                id="nombre"
                                placeholder={this.props.location.state.formData.nombre}
                                onChange={e =>
                                    this.onChange(
                                        e.target,
                                        "name"
                                    )
                                }
                                //required
                            />

                            <label htmlFor="fecha">Fecha:</label>
                            <input 
                                type="datetime-local" 
                                id="fecha"
                                maxlength = "50"
                                placeholder={date}
                                onChange={e =>
                                    this.onChange(
                                        e.target,
                                        "date"
                                    )
                                }
                                //required
                            />

                            <div id="divCategoria">
                                <label htmlFor="categoria" class="selector">Categoría:</label>
                                <select 
                                    name = "categoria"
                                    id="Categoria"
                                    placeholder={category}
                                    onChange={e =>
                                        this.onChange(
                                            e.target,
                                            "category"
                                        )
                                    }
                                    //required
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Mixed">Mixed</option>
                                </select>
                            </div>    
                            
                            <div id="divCompetencia">
                                <label htmlFor="Competencia" class="selector">Competencia:</label>
                                <select 
                                    id="Competencia"
                                    placeholder={competition}
                                    onChange={e =>
                                        this.onChange(
                                            e.target,
                                            "competition"
                                        )
                                    }
                                    //required
                                >
                                    <option value="Singles">Singles</option>
                                    <option value="Doubles">Doubles</option>
                                </select>
                            </div>    
                            
                            <label htmlFor="NumeroRondas" id="rondasLabel">Numero de rondas:</label>
                            <input
                                type="text" 
                                id="NumeroRondas"
                                placeholder={nRounds}
                                onChange={e =>
                                    this.onChange(
                                        e.target,
                                        "nRounds"
                                    )
                                }
                                //required
                            />

                            <label htmlFor="lugar">Lugar:</label>
                            <input
                                type="text" 
                                id="lugar"
                                placeholder={location}
                                onChange={e =>
                                    this.onChange(
                                        e.target,
                                        "location"
                                    )
                                }
                                //required
                            />


                            <div>
                                <input type="submit" value="GUARDAR" id="boton"/>
                            </div>
                        </ContenedorFormulario>
                    </form>
                    
                    
                </ContenedorTarjeta>    
            </ContenedorGeneral>
               
        )
    }
}

const mapStateToProps = state => ({
    tournaments: state.tournaments,
    userSession: state.userSession
});

const mapDispatchToProps = dispatch => {
    return {
        updateTournaments: tournaments => dispatch(setTournaments(tournaments))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModificarTorneo);