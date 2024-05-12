import React from 'react'
import {motion, useAnimate} from 'framer-motion'
export const Lesson10 = () => {
const [scope,animate]=useAnimate()
  const handleClick=()=>{
    // animate(scope.current,{rotate:45})
    animate([
        [scope.current,{rotate:45}],
        [scope.current,{opacity:0}],
        [scope.current,{rotate:90}],
        [scope.current,{opacity:1}],
    ])
  }
    return (
    <div className='border border-red-500 size-[500px] flex flex-col justify-center items-center'>
        
        <div   
        ref={scope}
        onClick={handleClick}
        className='size-64 bg-indigo-300 rounded-lg flex flex-wrap gap-5'></div>
    </div>
  )
}