import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'motion/react'
import { testimonialsData } from '../../assets/assets'

const Testinomials = () => {
    return (
        <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-8'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2' >Customer Testinomials</h1>
            <p className='text-gray-500 mb-8'>What our users are saying</p>
            <div className='flex flex-wrap gap-6 '>
                {testimonialsData.map((testinomial, index) => {
                    return (
                        <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-500' >
                            <div className='flex flex-col items-center'>
                                <img src={testinomial.image} alt="" className='rounded-full w-14' />
                                <h2 className='text-xl font-semibold mt-3'>{testinomial.name}</h2>
                                <p className='text-gray-500 mb-4'>{testinomial.role}</p>
                                <div className='flex mb-8'>
                                    {Array(testinomial.stars).fill().map((item, index) => (
                                        <img key={index} src={assets.rating_star} alt='' />
                                    ))}
                                </div>
                                <p className='text-center text-sm text-gray-600'>{testinomial.text}</p>
                            </div>
                        </div>)
                })}
            </div>
        </motion.div>
    )
}

export default Testinomials
