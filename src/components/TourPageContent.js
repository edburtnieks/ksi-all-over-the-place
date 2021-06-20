import * as React from "react"
import { motion } from "framer-motion"

const TourPageContent = (props) => {
  return (
    <motion.main
      className="tour-page-content"
      layoutId="tour-page-content"
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
      {...props}
    >
      <h1>Tour</h1>
    </motion.main>
  )
}

export { TourPageContent }
