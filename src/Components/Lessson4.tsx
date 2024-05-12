import React from 'react'
import { motion } from "framer-motion"
export const Lesson4 = () => {
    const parents={
        hidden:{opacity:0,scale:0.9,clipPath: "polygon(46% 49%, 0% 100%, 100% 100%)"},
        visible:{
            opacity:1,
            scale:1,
            clipPath:"polygon(0 30%, 0% 100%, 100% 100%)",
            transition:{
                ease:'easeInOut',
                duration:2
            }
        },
        hover:{
            scale:1.1,
            clipPath: "polygon(99% 45%, 0 58%, 100% 100%)",
            transition:{
              duration:  0.5
            }
        },
        tap:{
          scale:1,
          rotate:45  
        }
    }
   
  return (
    <motion.div 
    className='size-64 bg-red-500 border border-yellow-500 px-5 py-5 '
    variants={parents}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    whileTap="tap"
    
    >
      
    </motion.div>
  )
}
