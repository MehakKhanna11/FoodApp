import React from "react";
import { motion } from "framer-motion";
import founderimg from "../../assets/vadapavgirl.webp";
const options={
    initial:{
        x:"-100%",
        opacity:0

    },
    whileInView:{
        x:0,
        opacity:1
    }
}
const Founder = () => {
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={founderimg} alt="founder-image" height={200} width={200} />
        <h3>Chandrika Gera Dixit</h3>
        <p>
          Vada Pav Girl’s real name is Chandrika Gera Dixit, and popularly known
          as Delhi’s Vada Pav Girl, Chandrika runs a food cart in Sainik Vihar,
          Pitampura, Delhi, where she serves delicious vada pav—a Mumbai street
          food staple. <br/>
          she has become an internet sensation due to her unique
          journey. Chandrika gained overnight fame after a video of her serving
          street food was posted by food vlogger Amit Jindal.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
