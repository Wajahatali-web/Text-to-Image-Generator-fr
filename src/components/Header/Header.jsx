import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {user,setshowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = ()=>{
        if(user){
            navigate('/result')
        }
        else{
            setshowLogin(true)
        }
    }
    return (
        <motion.div className='flex flex-col justify-center items-center text-center my-20'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <motion.div className='text-stone-500 inline-flex rounded-full text-sm gap-2 bg-white px-6 py-1 border border-neutral-500'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}>
                <p>Text to Image generator</p>
                <img src={assets.star_icon} alt="" />
            </motion.div>
            <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}>
                Turn text into <span className='text-gray-500'>image</span>,in seconds</motion.h1>
            <motion.p className='text-center max-w-xl mx-auto mt-5'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}>
                Just type your imagination, and our AI will bring it to life — from realistic photos to creative digital art in seconds</motion.p>
            <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.8 }, opacity: 0.8, duration: 1 }}>
                Generate Image
                <img src={assets.star_group} alt="" className='h-6' />
            </motion.button>
            <motion.div className='flex flex-wrap justify-center mt-16 gap-3'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}>
                {Array(6).fill('').map((item, index) => (
                    <motion.img className='rounded hover:scale-105 transition-all cursor-pointer max-sm:w-10' whileHover={{ scale: 1.05, duration: 0.1 }} src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1} alt='' key={index} width={70} />
                ))}
            </motion.div>
            <motion.p className='mt-2 text-neutral-600'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}>Generated Image from Imagify</motion.p>
        </motion.div>
    )
}

export default Header