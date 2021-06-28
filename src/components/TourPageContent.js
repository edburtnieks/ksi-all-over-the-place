import * as React from "react"
import { motion } from "framer-motion"

import { Event } from "./event/Event"

import eventsData from "../data/events"

const TourPageContent = ({ tabIndex, ...rest }) => {
  return (
    <motion.main
      className="tour-page-content"
      layoutId="tour-page-content"
      transition={{ ease: [0.83, 0, 0.17, 1], duration: 1 }}
      {...rest}
    >
      <ul className="flow">
        {eventsData.map((date) => {
          return (
            <li className="flow" key={date.id}>
              <div>{date.text}</div>
              <ul className="events flow">
                {date.events.map((event) => {
                  return (
                    <li key={event.id}>
                      <Event tabIndex={tabIndex} event={event} />
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </motion.main>
  )
}

export { TourPageContent }
