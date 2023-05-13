import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import {
  removeItem,
  increaseItemCount,
  decreaseItemCount,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseItemCount({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() =>
            amount === 1
              ? dispatch(removeItem(id))
              : dispatch(decreaseItemCount({ id }))
          }
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItems;
