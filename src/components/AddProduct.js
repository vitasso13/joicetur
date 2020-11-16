import React, { Component } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";
import axios from 'axios';

const initState = {
  name: "",
  price: "",
  stock: "",
  img: "",
  id: "",
  shortDesc: "",
  description: ""
};



class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }
  
  save = async (e) => {
    console.log(this.state)
    e.preventDefault();
    const { name, price, stock, img, shortDesc, description } = this.state;

    if (name && price) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post(
        'http://localhost:3001/products',
        { id, name, price, stock, img, shortDesc, description },
      )
        
      this.props.context.addProduct(
        {
          name,
          price,
          img,
          shortDesc,
          description,
          stock: stock || 0
        },
        () => this.setState(initState)
      );
      this.setState(
        { flash: { status: 'is-success', msg: 'Pacote adicionado com sucesso' } }
      );

    } else {
      this.setState(        
        { flash: { status: 'is-danger', msg: 'Por favor, adicione um nome e preço' } }
      );
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    const { name, price, stock, img, shortDesc, description } = this.state;
    const { user } = this.props.context;

    return !(user && user.accessLevel < 1) ? (
      <Redirect to="/" />
    ) : (
        <>
          <div className="hero is-primary ">
            <div className="hero-body container">
              <h4 className="title">Adicionar Produto</h4>
            </div>
          </div>
          <br />
          <br />
          <form onSubmit={this.save}>
            <div className="columns is-mobile is-centered">
              <div className="column is-one-third">
                <div className="field">
                  <label className="label">Foto do produto </label>
                  <input
                    className="input"
                    type="text"
                    name="img"
                    value={img}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label className="label">Nome do Pacote: </label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label className="label">Preço: </label>
                  <input
                    className="input"
                    type="number"
                    name="price"
                    value={price}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <label className="label">Quantas vagas no estoque: </label>
                  <input
                    className="input"
                    type="number"
                    name="stock"
                    value={stock}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label className="label">Descrição curta: </label>
                  <input
                    className="input"
                    type="text"
                    name="shortDesc"
                    value={shortDesc}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label className="label">Descrição completa: </label>
                  <textarea
                    className="textarea"
                    type="text"
                    rows="2"
                    style={{ resize: "none" }}
                    name="description"
                    value={description}
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.flash && (
                  <div className={`notification ${this.state.flash.status}`}>
                    {this.state.flash.msg}
                  </div>
                )}
                <div className="field is-clearfix">
                  <button
                    className="button is-primary is-outlined is-pulled-right"
                    type="submit"
                    onClick={this.save}
                  >
                    Adicionar
                </button>
                </div>
              </div>
            </div>
          </form>
        </>
      );
  }
}

export default withContext(AddProduct);
