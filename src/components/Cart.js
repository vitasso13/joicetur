import React from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Meu Carrinho</h4>
        </div>
      </div>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning "
                >
                  Limpar carrinho de compras
                </button>{" "}
                <button
                  className="button is-success"
                  onClick={props.context.checkout}
                >
                  Finalizar pedido
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">Carrinho de compras vazio!</div>
          </div>
        )}
      </div>
    </>
  );
};

export default withContext(Cart);
