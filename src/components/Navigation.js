import * as React from "react"

import { NavigationLink } from "./NavigationLink"

const Navigation = ({ songs, className = "" }) => {
  return (
    <div className={`${className} text-light-50-80`}>
      <ul>
        {songs.map((song) => {
          return (
            <li key={song.id}>
              <NavigationLink song={song} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { Navigation }