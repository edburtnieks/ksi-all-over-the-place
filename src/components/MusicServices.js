import * as React from "react"

import { MusicService } from "./MusicService"

const MusicServices = ({ musicServices, className = "", tabIndex }) => {
  return (
    <ul className={className}>
      {musicServices.map((musicService) => {
        return (
          <li key={musicService.id}>
            <MusicService musicService={musicService} tabIndex={tabIndex} />
          </li>
        )
      })}
    </ul>
  )
}

export { MusicServices }
