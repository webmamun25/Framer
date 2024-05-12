import React from 'react'
import {motion,  useDragControls, useMotionValue, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
export const Lesson14 = () => {

   const {scrollY,scrollYProgress}=useScroll()
    
   useMotionValueEvent(scrollY,'change',(e)=>{
    console.log(e)
   })
   
   return (
  
      
        <motion.div   
        style={{ scaleX:scrollYProgress }}
      
        className='h-10 w-full fixed top-0 bg-green-500'></motion.div>

  )
}