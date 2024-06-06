import React from "react";
import { motion } from "framer-motion";
import vadapav from "../../assets/vadapav.jpg";
import { useDispatch } from "react-redux";
import { calculatePrice, cheeseVPIncrement, specialVPIncrement, vegVPIncrement } from "../../redux/reducers/cartReducer";
import toast from "react-hot-toast";
const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNumber) => {
    switch (itemNumber) {
      case 1:
        dispatch(cheeseVPIncrement());
        dispatch(calculatePrice());
        toast.success("Added to Cart");
        break;
      case 2:
        dispatch(vegVPIncrement());
        dispatch(calculatePrice());
        toast.success("Added to Cart");
        break;
      case 3:
        dispatch(specialVPIncrement);
        dispatch(calculatePrice());

        toast.success("Added to Cart");
        break;
    }
  };

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNumber={1}
          burgerSrc={vadapav}
          price={100}
          title="Cheese Vada pav"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNumber={2}
          burgerSrc={vadapav}
          price={80}
          title="Veggie Vada pav"
          handler={addToCartHandler}
          delay={0.2}
        />
        <MenuCard
          itemNumber={3}
          burgerSrc={vadapav}
          price={120}
          title="Special Vada pav"
          handler={addToCartHandler}
          delay={0.3}
        />
      </div>
    </section>
  );
};
const MenuCard = ({ itemNumber, burgerSrc, price, title, handler, delay }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div>Item {itemNumber}</div>
      <main>
        <img src={burgerSrc} alt={itemNumber} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button onClick={() => handler(itemNumber)}>Add to Cart</button>
      </main>
    </motion.div>
  );
};
export default Menu;
