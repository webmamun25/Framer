import React, { useRef } from 'react'
import { motion } from "framer-motion"
export const Lesson6 = () => {
    const parents={
        hidden:{opacity:0,x:0,y:0},
        visible:{
            opacity:1,
            x:[0,300,-300,0],
            y:[0,300,-300,0],
            
            
            transition:{
                ease:'linear',
                duration:5,
                repeat:Infinity,
                opacity:{
                    duration:0.2
                }
            }
        },
        hover:{
            opacity:1
           
           
        }
       
    }

    const parentref=useRef(null)
   
  return (
    <div ref={parentref} className='size-[300px] border border-b-slate-500'>


    <motion.div 
    className='size-64 border border-yellow-600 '
    variants={parents}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    drag
    // dragConstraints={{left:0,right:200}}
    dragConstraints={parentref}
    dragSnapToOrigin
    dragElastic={0.7}
    

    
    >
      
    </motion.div>
    </div>
  )
}
