import React from 'react'
import {motion,  useDragControls, useMotionValue, useTransform} from 'framer-motion'
export const Lesson11 = () => {

    const x=useMotionValue(0)
    const opacity=useTransform(x,[0,100],[1,0])
    const scale=useTransform(x,[-200,200],[0.5,1.5])
    return (
    <div className='border border-red-500 size-[500px] flex flex-col justify-center items-center'>
        
      
        <motion.div   
        style={{x,scale}}
        drag='x'
        className='size-64 bg-indigo-300 rounded-lg flex flex-wrap gap-5'></motion.div>
    </div>
  )
}