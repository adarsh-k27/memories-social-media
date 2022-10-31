import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LINK_BTN_BODY } from '../styles'
function Button ({ to }) {
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
    <Link to={to} className='w-full h-auto  '>
      <motion.div
        variants={ButtonVariants}
        whileHover={'hover'}
        className={` ${LINK_BTN_BODY} bg-sky-700`}
      >
        Sign In
      </motion.div>
    </Link>
  )
}

export default Button
