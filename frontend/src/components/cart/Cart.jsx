import React, { useEffect } from "react";
import vadapav from "../../assets/vadapav.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  calculatePrice,
  cheeseVPDecrement,
  cheeseVPIncrement,
  specialVPDecrement,
  specialVPIncrement,
  vegVPDecrement,
  vegVPIncrement,
} from "../../redux/reducers/cartReducer"; 
const Cart = () => {
  const {
    cartItems: {
      cheeseVadapav: { quantity: cheeseVadapav },
      vegVadapav: { quantity: vegVadapav },
      specialVadapav: { quantity: specialVadapav },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);
  const { cartItems: orderItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch(cheeseVPIncrement());
        dispatch(calculatePrice());
        break;
      case 2:
        dispatch(vegVPIncrement());
        dispatch(calculatePrice());
        break;
      case 3:
        dispatch(specialVPIncrement());
        dispatch(calculatePrice());
        break;
    }
  };
  const decrement = (item) => {
    switch (item) {
      case 1:
        if (cheeseVadapav === 0) break;
        dispatch(cheeseVPDecrement());
        dispatch(calculatePrice());
        break;
      case 2:
        if (vegVadapav === 0) break;
        dispatch(vegVPDecrement());
        dispatch(calculatePrice());
        break;
      case 3:
        if (specialVadapav === 0) break;
        dispatch(specialVPDecrement());
        dispatch(calculatePrice());
        break;
    }
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem("cartPrices",JSON.stringify({subTotal,tax,shippingCharges,total}))
  }, [orderItems,subTotal,tax,shippingCharges,total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          value={cheeseVadapav}
          title={"Cheese Vada Pav"}
          img={vadapav}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          value={vegVadapav}
          title={"Veggie Vada Pav"}
          img={vadapav}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          value={specialVadapav}
          title={"Fusion Vada Pav"}
          img={vadapav}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Delivery charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};
const CartItem = ({ value, title, img, increment, decrement }) => {
  return (
    <>
      <div className="cartItem">
        <div>
          <img src={img} alt={title} image />
          <h4>{title}</h4>
        </div>
        <div>
          <button onClick={decrement}>-</button>
          <input type="number" readOnly value={value} />
          <button onClick={increment}>+</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
