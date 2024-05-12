
import {motion} from 'framer-motion'
export const Img = () => {
    const parent={
        hidden:{opacity:0,scale:0.9},
        visible:{
            opacity:1,
            scale:1,
            clipPath:"polygon(0 30%, 0% 100%, 100% 100%)",
            transition:{
                ease:'easeInOut',
                duration:2
            }
        },
        hover:{
            scale:1.1,
            clipPath: "polygon(99% 45%, 0 58%, 100% 100%)",
            transition:{
              duration:  0.5
            }
        },
    }
  return (
    <div>
        <motion.img className="rounded-md"
        
    variants={parent}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
    >
        </motion.img>
    </div>
  )
}
