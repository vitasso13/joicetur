import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../withContext";
import axios from 'axios';

const initState = {
    username: "",
    password: "",
    phone: "",
    name: ""
};


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

    signup = async (e) => {
        e.preventDefault();
        const { username, password, phone, name } = this.state;
        if (!username || !password || !phone || !name) {
            this.setState(        
                { flash: { status: 'is-danger', msg: 'Por favor, complete todos os campos' } }
              );
            
        } else {
            console.log("chegou aqui")


            let thisNewUser = {
                email: username,
                password: password,
                phone: phone,
                name: name
            }
            await axios.post('http://localhost:3001/users', thisNewUser)

            this.setState(
                { flash: { status: 'is-success', msg: 'Cadastro realizado com sucesso' } }
              );

        }

    }

    render() {
        return !this.props.context.user ? (
            <>
                <div className="hero is-primary ">
                    <div className="hero-body container">
                        <h4 className="title">Cadastre-se</h4>
                    </div>
                </div>
                <br />
                <br />
                <form onSubmit={this.signup}>
                    <div className="columns is-mobile is-centered">
                        <div className="column is-one-third">
                            <div className="field">

                                <label className="label">Email: </label>
                                <input
                                    className="input"
                                    type="email"
                                    name="username"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="field">
                                <label className="label">Senha: </label>
                                <input
                                    className="input"
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="field">
                                <label className="label">Telefone: </label>
                                <input
                                    className="input"
                                    type="text"
                                    name="phone"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="field">
                                <label className="label">Nome: </label>
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            {this.state.error && (
                                <div className="has-text-danger">{this.state.error}</div>
                            )}
                            {this.state.flash && (
                                <div className={`notification ${this.state.flash.status}`}>
                                    {this.state.flash.msg}
                                </div>
                            )}
                            <div className="field is-clearfix">
                                <button
                                    className="button is-primary is-outlined is-pulled-right"
                                >
                                    Cadastrar
                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        ) : (
                <Redirect to="/login" />
            );
    }
}

export default withContext(Signup);
