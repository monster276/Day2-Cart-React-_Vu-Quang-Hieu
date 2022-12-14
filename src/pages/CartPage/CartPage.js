import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { AiOutlineDelete } from "react-icons/ai";

import "./CartPage.css";
const Cart = (props) => {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const cartBody =
    cart &&
    cart.map((cartItem, index) => {
      const {id, name, price, img, quantity } = cartItem;
      return (
        <tr>
          <th scope="row">1</th>
          <td>{name}</td>
          <td>
            <img
              src={img}
              style={{ width: "36px", height: "100%" }}
              alt={name}
            />
          </td>
          <td className="d-flex">
            <button
              onClick={() => dispatch({
                type: 'MINUS_QUANTITY',
                payload: id
              })}
              className="btn btn-primary">-     
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-primary"
              onClick={() => dispatch({
                type: 'PLUS_QUANTITY',
                payload: id,
               })}
            >+</button>
          </td>
          <td>{quantity * Number(price)}</td>
          <td>
            <button
              onClick={() => dispatch({
                type: 'DELETE_CART_ITEM',
                payload: id
              })}
              className="btn btn-danger rounded-circle">
              <AiOutlineDelete />
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div className="container">
      <h4 className="mb-4">Cart</h4>
      <div className="cart-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">...</th>
            </tr>
          </thead>
          <tbody>{cartBody}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
