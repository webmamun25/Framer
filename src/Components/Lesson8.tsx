import React from 'react'
import {motion, useCycle} from 'framer-motion'
export const Lesson8 = () => {
    const boxAnimation=[
        {x:0,y:0},
        {x:100,y:100},
        {x:-100,y:100},
        {x:-100,y:-100},
    ]
    const [animate,cycle]=useCycle(...boxAnimation)
    
    
  
    return (
    <div className='border border-red-500 size-[500px] flex flex-col justify-center items-center'>
        
        <motion.div animate={animate} onTap={()=>cycle()} className='size-64 bg-indigo-300 rounded-lg flex flex-wrap gap-5'></motion.div>
    </div>
  )
}