import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, CaretLeft, MusicNotesSimple } from "phosphor-react"

import { Tab } from "../components/Tab"

import * as tabStyles from "../styles/components/tab.module.scss"

const Tabs = ({ tabIndex, ...rest }) => {
  return (
    <motion.div
      className="tabs"
      layoutId="tabs"
      animate={{ opacity: 1 }}
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
      {...rest}
    >
      <Tab
        className="tour-dates-link"
        link="/tour"
        leftIcon={<Calendar size={24} weight="bold" aria-hidden="true" />}
        rightIcon={<CaretLeft size={16} weight="bold" className={tabStyles.caretIcon} aria-hidden="true" />}
        tabIndex={tabIndex}
      >
        Tour Dates
      </Tab>
      <Tab
        className="songs-link"
        link="/"
        leftIcon={<MusicNotesSimple size={24} weight="bold" aria-hidden="true" />}
        tabIndex={tabIndex}
      >
        Songs
      </Tab>
    </motion.div>
  )
}

export { Tabs }