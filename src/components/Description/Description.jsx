import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
    return (
        <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-8'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2' >Create Ai Image</h1>
            <p className='text-gray-500 mb-8'>Turn your image into visual</p>

            <div className='flex flex-col md:flex-row items-center gap-5 md:gap-14 mx-20 mt-8'>
                <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
                <div>
                    <h1 className='text-3xl font-medium max-w-lg mb-4'>Introducing Ai Powered Text to Image Generator</h1>
                    <p className='text-gray-600 mb-4'>Our AI-powered text-to-image generator lets you turn words into visually striking images within seconds. Just type your idea, and advanced artificial intelligence instantly brings it to life with realistic, creative, and high-quality visuals. Whether you need designs for projects, artwork for inspiration, or unique content for social media, this tool makes imagination visible—effortlessly and instantly</p>
                    <p className='text-gray-600 mb-4'>"An AI-powered text-to-image generator that transforms written prompts into stunning, high-quality visuals. Simply describe what you imagine, and the AI creates unique images in seconds—perfect for creativity, design, and inspiration."</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description
