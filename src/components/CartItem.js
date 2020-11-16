import React from "react";

const CartItem = props => {
  const { cartItem, cartKey } = props;

  const { product, amount } = cartItem;
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">

            <img className="image is-64x64"
              src={product.img}
              alt={product.shortDesc}
            />

          </div>
          <div className="media-content">



            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">R${product.price}</span>
            </b>
            <div>{product.shortDesc}</div>

            <small>{`${amount} no carrinho`} </small>
            <div className="buttons are-small has-addons">
              <button className="button is-danger is-selected" >-</button>
              <button className="button is-success">+</button>
            </div>
          </div>
          <div
            className="media-right"
            onClick={() => props.removeFromCart(cartKey)}
          >
            <span className="delete is-large"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
