import React from 'react'
import { motion } from "framer-motion"
export const Lesson1 = () => {
    const initial={rotate:0}
    const animate={rotate:360}
  return (
    <motion.div 
    className='size-64 bg-red-500 border border-yellow-500 px-5 py-5 '
    initial={initial}
    animate={animate}
    transition={{type:'spring', duration: 0.5 }}
    >
      
    </motion.div>
  )
}
