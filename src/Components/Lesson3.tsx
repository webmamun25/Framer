import React from 'react'
import { motion } from "framer-motion"
export const Lesson3 = () => {
    const parents={
        initial:{opacity:0,scale:0.9},
        animate:{opacity:1,scale:1.5}
    }
    const child={
        initial:{opacity:0,scale:0.9},
        animate:{opacity:1,scale:1.5}
    }
   
  return (
    <motion.div 
    className='size-80 bg-red-500 border p-8 border-yellow-500 flex flex-wrap gap-20 justify-center '
    variants={parents}
    initial="initial"
    animate="animate"
    transition={{ease:'easeInOut', 
    duration:1.5,
    delayChildren:1,
    staggerChildren:1    
}}
    >
        <motion.div
        className='size-20  bg-cyan-400 rounded-md'
        variants={child}
        >

        </motion.div>
        <motion.div
        className='size-20 bg-cyan-400 rounded-md'
        variants={child}
        >

        </motion.div>
        <motion.div
        className='size-20 bg-cyan-400 rounded-md'
        variants={child}
        >

        </motion.div>
        <motion.div
        className='size-20 bg-cyan-400 rounded-md'
        variants={child}
        >

        </motion.div>
      
    </motion.div>
  )
}

