import * as React from "react"

import * as navigationStyles from "../styles/components/navigation.module.scss"

const NavigationLink = ({ song }) => {
  const [features, setFeatures] = React.useState([])
  const [songProps, setSongProps] = React.useState({})

  React.useEffect(() => {
    const parsedFeatures = song.features.map((feature, index) => {
      return (
        <span key={index}>
          {feature}
          {song.features.length - 1 !== index && " & "}
        </span>
      )
    })

    setFeatures(parsedFeatures)

    if (!song.active) {
      setSongProps({ "data-disabled": true })
    }
  }, [song])

  return (
    <div
      className={`${navigationStyles.songLink} flow`}
      {...songProps}
    >
      <span className={navigationStyles.songTitle}>
        {song.title}
      </span>
      {features.length
        ? <span className={navigationStyles.features}>
            (Ft. {features})
          </span>
        : ""
      }
    </div>
  )
}

export { NavigationLink }
