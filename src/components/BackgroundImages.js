import * as React from "react"
import { motion } from "framer-motion"

const BackgroundImages = () => {
  return (
    <motion.div
      className="background-images"
      layoutId="background-images"
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
      aria-hidden="true"
    >
      <div className="ksi-profile"></div>
      <div className="all-over-the-place-cover"></div>
    </motion.div>
  )
}

export { BackgroundImages }
