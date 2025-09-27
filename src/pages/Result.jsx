import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react' 
import { AppContext } from '../context/AppContext'

const Result = () => {
  const [image, setimage] = useState(assets.sample_img_1)
  const [isImageLoaded, setisImageLoaded] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [input, setinput] = useState('')

  const { generateImage } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (input) {
        const generatedImage = await generateImage(input)
        console.log("Generated Image:", generatedImage) // 👈 check what backend returns
        if (generatedImage) {
          setisImageLoaded(true)
          setimage(generatedImage) // ya phir "data:image/png;base64," + generatedImage
        }
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form 
      onSubmit={onSubmitHandler}
      className='flex flex-col min-h-[90vh] justify-center items-center py-10'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm rounded' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${Loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}></span>
        </div>
        <p className={!Loading ? 'hidden' : ''}>Loading...</p>
      </div>

      {!isImageLoaded && (
        <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
          <input 
            onChange={e => setinput(e.target.value)} 
            value={input}  
            type="text" 
            placeholder='Describe you want to generate' 
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 ph-color' 
          />
          <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'>
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p 
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer' 
            onClick={() => { setisImageLoaded(false) }}
          >
            Generate Another
          </p>
          <a 
            href={image} 
            download 
            className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  )
}

export default Result
