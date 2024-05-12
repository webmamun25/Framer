import React, { useEffect, useRef } from 'react'
import {inView, motion, useCycle,ElementOrSelector, useInView} from 'framer-motion'
export const Lession9 = () => {
 
   const ref=useRef<HTMLDivElement>(null)
    const inView=useInView(ref)
    console.log(inView)
    // useEffect(()=>{
    //     inView(ref.current as ElementOrSelector,(info)=>{
    //         console.log("Info",info)
    //     })
    // },[])
  
    return (
    <div className='border border-red-500 size-[500px] flex flex-col justify-center items-center'>
        
        <motion.div ref={ref} animate={inView ?{opacity:1,x:0}:{opacity:0,x:-500}}  className='size-64 bg-indigo-300 rounded-lg flex flex-wrap gap-5'></motion.div>
    </div>
  )
}