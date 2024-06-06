import React, { useEffect, useState } from 'react'
import {delay, motion} from "framer-motion"
import gurl from "../../assets/vadapavgirl.webp"
import toast from "react-hot-toast"





import {useDispatch, useSelector} from "react-redux"
import { uploadContactInfo } from '../../redux/actions/user'
import { clearError, clearMessage } from '../../redux/reducers/userReducer'
const Contact = () => {
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [messagefeild,setMessageFeild]=useState("");

    const contactSubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(uploadContactInfo(name,email,messagefeild));
    }
    const {message,error}=useSelector((state)=>state.auth);

    useEffect(()=>{
        if(message){
            toast.success(message);
            dispatch(clearMessage());
        }
        if(error){
            toast.error(error);
            dispatch(clearError());
        }
    },[message,error,dispatch]);

  return (
    <section className='contact'>
        <motion.form 
        onSubmit={(e)=>{contactSubmitHandler(e)}}
        initial={{
            x:"-100vw",
            opacity:0
        }}
        animate={{
            x:0,
            opacity:1,
        }}
        transition={{delay:0.2}}
        >
            <h2>Contact Us</h2>
            <input type="text" placeholder='Name' value={name}  onChange={(e)=>{setName(e.target.value)}} />
            <input type="email"  placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <textarea placeholder='message' id="" cols="30" rows="10" value={messagefeild} onChange={(e)=>{setMessageFeild(e.target.value)}} ></textarea>
            <button type="submit">Send</button>
        </motion.form>

        <motion.div className='formBorder'
        initial={{
            x:"100vw",
            opacity:0
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{delay:0.2}}
        >
            <motion.div
            initial={{
                x:"-50%",
                y:"-100vh",
                opacity:0
            }}
            animate={{
                x:"50%",
                y:"-50%",
                opacity:1
            }}
            transition={{delay:1}}
            >
                <img src={gurl} alt="Vadapavgirl" />
            </motion.div>

        </motion.div>


    </section>

  )
}

export default Contact
