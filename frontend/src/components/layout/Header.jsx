import React from 'react'
import {IoFastFoodOutline} from "react-icons/io5"
import {FiShoppingCart,FiLogIn} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const Header = ({isAuthenticated=true}) => {
  return (
    <nav>
        <motion.div className='logo' initial={{x:"-100%"}} whileInView={{x:0}}>
            <IoFastFoodOutline/>
        </motion.div>
        <div>
            <Link to="/">Home</Link>
            <a href="/contact">Contact</a>
            <a to="/about">About</a>
            <Link to="/cart"><FiShoppingCart/></Link>
            <a href={isAuthenticated?"/me":"/login"}>{isAuthenticated?<FaUser/>:<FiLogIn/>}</a>
        </div>
    </nav>
  )
}

export default Header
