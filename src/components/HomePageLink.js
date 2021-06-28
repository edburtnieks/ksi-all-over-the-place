import * as React from "react"
import { motion } from "framer-motion"
import { House, CaretRight } from "phosphor-react"

import { Tab } from "../components/Tab"

import * as tabStyles from "../styles/components/tab.module.scss"

const HomePageLink = ({ tabIndex, ...rest }) => {
  return (
    <motion.div
      className="home-page-link"
      layoutId="home"
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
      {...rest}
    >
      <Tab
        link="/"
        leftIcon={<House className={tabStyles.houseIcon} size={24} weight="bold" aria-hidden="true" />}
        rightIcon={<CaretRight size={16} weight="bold" className={tabStyles.caretIcon} aria-hidden="true" />}
        tabIndex={tabIndex}
      >
        Back Home
      </Tab>
    </motion.div>
  )
}

export { HomePageLink }
