
import { delay, motion } from 'framer-motion'
import React from 'react'

const App = () => {
  const anim={
    initial:{
        opacity: 0,
        scale: 0.2,
        
       },
    final:{
      x:1000,
      opacity: 1,
      scale: 1,
      rotate:360,
      borderRadius: "30px",
      transition: {
        duration:2,
        delay:0.7,
        ease: 'easeOut',
      },
    }
  }
  
  return (
    <div>
      <motion.div id="box"
      variants={anim}
      initial='initial'
      animate='final'
      >
     </motion.div>
    </div>
  )
}

export default App
