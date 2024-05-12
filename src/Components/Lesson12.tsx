import React from 'react'
import {motion,  useDragControls} from 'framer-motion'
export const Lesson12 = () => {

    const controls=useDragControls()
    return (
    <div className='border border-red-500 size-[500px] flex flex-col justify-center items-center'>
        
        <div   
        onPointerDown={(e)=>controls.start(e)}
        className='size-10 bg-indigo-300 rounded-lg flex flex-wrap gap-5'></div>
        
        <motion.div   
        drag='x'
        dragControls={controls}
        className='size-64 bg-indigo-300 rounded-lg flex flex-wrap gap-5'></motion.div>
    </div>
  )
}