import * as React from "react"
import { motion } from "framer-motion"

import allOverThePlaceCoverAvif from "../images/all-over-the-place-cover.avif"
import allOverThePlaceCoverWebP from "../images/all-over-the-place-cover.webp"
import allOverThePlaceCoverJpg from "../images/all-over-the-place-cover.jpg"
import ksiProfileAvif from "../images/ksi-profile.avif"
import ksiProfileWebP from "../images/ksi-profile.webp"
import ksiProfileJpg from "../images/ksi-profile.jpg"

const BackgroundImages = () => {
  return (
    <motion.div
      className="background-images"
      layoutId="background-images"
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
      aria-hidden="true"
    >
      <div className="ksi-profile">
        <picture>
          <source srcSet={ksiProfileAvif} type="image/avif" />
          <source srcSet={ksiProfileWebP} type="image/webp" />
          <img src={ksiProfileJpg} alt="" />
        </picture>
      </div>
      <div className="all-over-the-place-cover">
        <picture>
          <source srcSet={allOverThePlaceCoverAvif} type="image/avif" />
          <source srcSet={allOverThePlaceCoverWebP} type="image/webp" />
          <img src={allOverThePlaceCoverJpg} alt="" />
        </picture>
      </div>
    </motion.div>
  )
}

export { BackgroundImages }
