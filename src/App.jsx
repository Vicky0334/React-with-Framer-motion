
import { motion, useScroll } from 'framer-motion'
import React from 'react'

const App = () => {
  // const anim={
  //   initial:{
  //       opacity: 0,
  //       scale: 0.2,
        
  //      },
  //   final:{
  //     x:1000,
  //     opacity: 1,
  //     scale: 1,
  //     rotate:360,
  //     borderRadius: "30px",
  //     transition: {
  //       duration:2,
  //       delay:0.7,
  //       ease: 'easeOut',
  //     },
  //   }
  // }
  
 
  return (
    <div>
      <motion.div id="box"
      // variants={anim}
      // initial='initial'
      // animate='final'
       drag
       whileHover={{
         scale: 1.2,
         rotate: 360,
         transition: {
           duration:0.5,
           ease: 'easeOut',
         },
       }}
       dragConstraints={{ left: 0, right:900, top:0, bottom:50 }}
    
      >
     </motion.div>
    </div>
  )
}

export default App
