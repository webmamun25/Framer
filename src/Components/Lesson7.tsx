import React from 'react'
import {motion, useAnimationControls} from 'framer-motion'
export const Lesson7 = () => {
    const controls=useAnimationControls()
    
    const handleForward=()=>{
        controls.start({x:200})
    }
  
    return (
    <div className='border border-red-500 size-[500px] flex flex-col justify-center items-center'>
        <button className='bg-green-500 px-2 py-3 mb-10' onClick={handleForward}>Forward</button>
        <motion.div animate={controls} className='size-64 bg-indigo-300 rounded-lg flex flex-wrap gap-5'></motion.div>
    </div>
  )
}
