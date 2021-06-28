import * as React from "react"
import { navigate } from "gatsby"
import { useMediaQuery } from "@react-hook/media-query"

import { Seo } from "../components/Seo"
import { BackgroundImages } from "../components/BackgroundImages"
import { HomePageContent } from "../components/HomePageContent"
import { TourPageContent } from "../components/TourPageContent"
import { HomePageLink } from "../components/HomePageLink"
import { Tabs } from "../components/Tabs"

const HomePage = () => {
  const matches = useMediaQuery('only screen and (max-width: 1599px) and (pointer: coarse)')
  let dragOptions = {}

  if (matches) {
    dragOptions = {
      drag: "x",
      dragConstraints: { left: 0, right: 0 },
      onDragEnd: (event, info) => {
        if (info.delta.x > 0) {
          navigate('/tour')
        }
      },
    }
  }

  return (
    <>
      <Seo />
      <div className="page-wrapper home-page-wrapper">
        <BackgroundImages />
        <TourPageContent tabIndex="-1" aria-hidden="true" />
        <HomePageContent {...dragOptions} />
        <HomePageLink
          initial={{ opacity: 0 }}
          animate={{ backgroundColor: '#21222C', opacity: 0 }}
          aria-hidden="true"
          tabIndex="-1"
        />
        <Tabs animate={{ opacity: 1 }} />
      </div>
    </>
  )
}

export default HomePage
