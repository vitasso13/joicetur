import React, { useRef, useState } from "react";

const CartItem = props => {
  const { cartItem, cartKey } = props;


  let { product, amount } = cartItem;
  const [am, setAm] = useState(amount);
  useRef(() => {
    amount = am;
    console.log(amount);
  }, [am])
  function incAmount() {
    setAm(am + 1);

  }
  function decAmount() {
    if (am > 0)
      setAm(am - 1);
    else { props.removeFromCart(cartKey) }
  }
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

            <div className="buttons are-small has-addons">
              <button className="button is-danger is-selected" onClick={() => decAmount()}>-</button>
              <small className="button" style={{borderStyle: "solid"}}>{`  ${am}  `} </small>
              <button className="button is-success" onClick={() => incAmount()}>+</button>
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
