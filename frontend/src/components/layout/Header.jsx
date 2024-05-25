import React from 'react'
import {IoFastFoodOutline} from "react-icons/io5"
import {FiShoppingCart,FiLogIn} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import {motion} from "framer-motion"

const Header = ({isAuthenticated=true}) => {
  return (
    <nav>
        <motion.div className='logo' initial={{x:"-100%"}} whileInView={{x:0}}>
            <IoFastFoodOutline/>
        </motion.div>
        <div className="">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
            <a href="/cart"><FiShoppingCart/></a>
            <a href={isAuthenticated?"/me":"/login"}>{isAuthenticated?<FaUser/>:<FiLogIn/>}</a>
        </div>
    </nav>
  )
}

export default Header
