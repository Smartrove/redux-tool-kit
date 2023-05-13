import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart, calculateTotalAmount } from "../features/cartSlice";

const CardContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cartItems]);

  if (amount < 1) {
    return (
      <section name="" id="" className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CardContainer;
