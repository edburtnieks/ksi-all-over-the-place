import * as React from "react"

import { Clock, MapPin, Ticket } from "phosphor-react"

const Event = ({ tabIndex, event }) => {
  return (
    <article>
      <a href={event.link} className={`event ${event.isSoldOut ? 'sold-out text-light-50' : 'text-light-50-80'}`} tabIndex={tabIndex || event.isSoldOut ? '-1' : 0}>
        <div className="time-wrapper bg-dark-900">
          <Clock className="clock-icon" size={16} weight="bold" />
          <div className="flow">
            <div>{event.day}</div>
            <div className="date text-light-50">{event.month} <span className={!event.isSoldOut ? 'text-brand-600' : undefined}>{event.date}</span></div>
            <div>{event.year}</div>
          </div>
        </div>
        <div className="place-wrapper">
          <div className="place-inner">
            <div className="city">
              <MapPin size={16} weight="bold" />
              <span className="text">{event.city}</span>
            </div>
            <div className="place text-light-50">{event.place}</div>
          </div>
          <div className={`button ${!event.isSoldOut ? 'text-brand-600' : undefined}`}>
            <Ticket size={16} weight="bold" />
            <span>{event.isSoldOut ? 'Sold Out' : 'Tickets'}</span>
          </div>
        </div>
      </a>
    </article>
  )
}

export { Event }
