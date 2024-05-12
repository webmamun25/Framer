import {AnimatePresence, motion} from 'framer-motion'
import { useState } from 'react'
export const Lesson15 = () => {
    const [visible,setVisible]=useState(true)
    const box={
        hidden:{opacity:0,scale:0.8},
        visible:{opacity:1,scale:1,
            transition:{
                duration:1.5
            },
        },
        exit:{
            opacity:0,
            scale:0.5,
            y:100,
            transition:{
                duration:2
            },
        },
       
      
    }
 
    return (
    <div className='border border-red-500 size-[500px] flex flex-col justify-center items-center'>
         <AnimatePresence>
        <motion.button onClick={()=>setVisible(!visible)}>Toggle</motion.button>
     
      {
        visible &&   <motion.div   
        variants={box}
        initial="hidden"
        animate="visible"
        exit="exit"
        className='size-64 bg-indigo-300 rounded-lg flex flex-wrap gap-5'></motion.div>
        
     }
      </AnimatePresence>
    </div>
  )
}