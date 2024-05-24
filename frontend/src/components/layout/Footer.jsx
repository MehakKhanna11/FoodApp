import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Vada Pav Girl</h2>
            <p>Offering the best services with affordable price</p>
            <br />
            <em>We serve the best Vada pavs.</em>
            <strong>All rights reserved @vadapavgurl</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://instagram.com"><AiFillInstagram/></a>
            <a href="https://youtube.com"><AiFillYoutube/></a>
            <a href="https://github.com"><AiFillGithub/></a>

        </aside>
    </footer>

  )
}

export default Footer
