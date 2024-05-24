import React from "react";
import { motion } from "framer-motion";
import vadapav from "../../assets/vadapav.jpg";
const Menu = () => {
  const addToCartHandler = (itemNumber) => {};

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNumber={1}
          burgerSrc={vadapav}
          price={60}
          title="Classic Vada pav"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNumber={2}
          burgerSrc={vadapav}
          price={60}
          title="Masala Vada pav"
          handler={addToCartHandler}
          delay={0.2}
        />
        <MenuCard
          itemNumber={3}
          burgerSrc={vadapav}
          price={60}
          title="Cheese Vada pav"
          handler={addToCartHandler}
          delay={0.3}
        />
        {/* <MenuCard
          itemNumber={4}
          burgerSrc={vadapav}
          price={60}
          title="Special Vada pav"
          handler={addToCartHandler}
        />
        <MenuCard
          itemNumber={5}
          burgerSrc={vadapav}
          price={60}
          title="Gopi Vada pav"
          handler={addToCartHandler}
        /> */}
      </div>
    </section>
  );
};
const MenuCard = ({ itemNumber, burgerSrc, price, title, handler,delay }) => {
  return (
    <motion.div className="menuCard"
    initial={{
        x:"-100%",
        opacity:0
    }}
    whileInView={{
        x:0,
        opacity:1
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
