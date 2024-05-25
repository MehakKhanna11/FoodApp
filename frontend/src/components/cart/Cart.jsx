import React from "react";
import vadapav from "../../assets/vadapav.jpg";
import {Link} from "react-router-dom"
const Cart = () => {
    const increment=(item)=>{};
    const decrement=(item)=>{};


  return (
    <section className="cart">
      <main>
        <CartItem value={0} title={"Cheese Vada Pav"} img={vadapav} increment={()=>increment(1)} decrement={()=>decrement(1)}/>
        <CartItem value={0} title={"Veggie Vada Pav"} img={vadapav} increment={()=>increment(1)} decrement={()=>decrement(1)}/>
        <CartItem value={0} title={"Fusion Vada Pav"} img={vadapav} increment={()=>increment(1)} decrement={()=>decrement(1)}/>
        <article>
        <div>
          <h4>Sub Total</h4>
          <p>₹483</p>
        </div>
        <div>
          <h4>Tax</h4>
          <p>₹{483*0.18}</p>
        </div>
        <div>
          <h4>Delivery charges</h4>
          <p>₹{50}</p>
        </div>
        <div>
          <h4>Total</h4>
          <p>{520}</p>
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
        <input type="number" readOnly value={value}/>
        <button onClick={increment}>+</button>
      </div>
      </div>

    </>
  );
};
export default Cart;
