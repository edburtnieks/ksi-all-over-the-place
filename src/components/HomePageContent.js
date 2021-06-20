import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import { Navigation } from "./Navigation"
import { MusicServices } from "./MusicServices"

import Logo from "../assets/all-over-the-place-logo.svg"

import navigationData from "../data/navigation"
import musicServicesData from "../data/music-services"

const HomePageContent = ({ tabIndex, ...rest }) => {
  return (
    <motion.div
      className="home-page-content"
      layoutId="home-page-content"
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
      {...rest}
    >
      <div className="album-logo">
        <Link to="/" tabIndex={tabIndex}>
          <Logo />
        </Link>
      </div>
      <main className="main-content flow">
        <h1>
          <span>Out on&nbsp;</span>
          <span className="text-brand-600">July 16th, 2021</span>
        </h1>
        <p className="pre-order text-light-50-80">Pre-order</p>
        <MusicServices className="music-services" musicServices={musicServicesData} tabIndex={tabIndex} />
      </main>
      <Navigation className="navigation" songs={navigationData} />
    </motion.div>
  )
}

export { HomePageContent }
