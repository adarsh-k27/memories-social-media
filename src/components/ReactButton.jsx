import React from 'react'
import { motion } from 'framer-motion'
import {NORMAL_BTN_BODY} from '../styles'
function ReactButton ({text,animate}) {
  const ButtonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: 10,
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      variants={animate && ButtonVariants}
      whileHover={'hover'}
      className={`${NORMAL_BTN_BODY} bg-sky-700`}
    >
      {text}
    </motion.div>
  )
}

export default ReactButton
