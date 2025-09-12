import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


export default function Reveal({children}){
  const ref = useRef(null)
  const isInView = useInView(ref, {once: false})
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView){
      mainControls.start("visible")
    }
  }, [isInView])


  return(
    <div ref={ref} className="w-full flex flex-col items-center justify-center">
      <motion.div
        className="w-full flex items-center justify-center"
        variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity: 1, y: 0}
        }}
        initial="hidden" 
        animate={mainControls}
        transition={{duration: .7, delay: .3}}
      >
        {children}
      </motion.div>
    </div>
  )
}