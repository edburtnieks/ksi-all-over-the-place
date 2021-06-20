import * as React from "react"

import KSIAlbumStoreLogo from "../assets/ksi-album-store.svg"
import SpotifyLogo from "../assets/spotify.svg"
import AppleLogo from "../assets/apple.svg"
import DeezerLogo from "../assets/deezer.svg"

import * as musicServiceStyles from "../styles/components/music-service.module.scss"

const logoTypes = {
  ksiAlbumStore: KSIAlbumStoreLogo,
  spotify: SpotifyLogo,
  apple: AppleLogo,
  deezer: DeezerLogo,
}

const MusicService = ({ musicService, tabIndex }) => {
  const Logo = logoTypes[musicService.logo]

  return (
    <a
      href={musicService.link}
      className={musicServiceStyles.musicService}
      aria-label={musicService.name}
      tabIndex={tabIndex}
    >
      <Logo aria-hidden="true" />
    </a>
  )
}

export { MusicService }
