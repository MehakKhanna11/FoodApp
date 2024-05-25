import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import founderimg from "../../assets/vadapavgirl.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Vada Pav Gurl</h4>
          <p>
            We serve the best vada pavs in entire india. The place for most tasty vada pavs on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and Vada Pavs. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={founderimg} alt="Founder" />
              <h3>Chandrika Gera Dixit</h3>
            </div>

            <p>
            Vada Pav Girl’s real name is Chandrika Gera Dixit, and popularly known
          as Delhi’s Vada Pav Girl, Chandrika runs a food cart in Sainik Vihar,
          Pitampura, Delhi, where she serves delicious vada pav—a Mumbai street
          food staple. 
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;