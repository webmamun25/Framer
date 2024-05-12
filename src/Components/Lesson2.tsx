import React from 'react'
import { motion } from "framer-motion"
export const Lesson2 = () => {
    const parents={
        initial:{rotate:0},
        animate:{rotate:360}
    }
   
  return (
    <motion.div 
    className='size-64 bg-red-500 border border-yellow-500 px-5 py-5 '
    variants={parents}
    initial="initial"
    animate="animate"
    transition={{ease:'linear', 
    repeat:Infinity,
    repeatType:'reverse'
    ,duration: 2}}
    >
      
    </motion.div>
  )
}
