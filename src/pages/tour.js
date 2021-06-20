import * as React from "react"
import { navigate } from "gatsby"
import { useMediaQuery } from "@react-hook/media-query"

import { Seo } from "../components/Seo"
import { BackgroundImages } from "../components/BackgroundImages"
import { HomePageContent } from "../components/HomePageContent"
import { TourPageContent } from "../components/TourPageContent"
import { HomePageLink } from "../components/HomePageLink"
import { Tabs } from "../components/Tabs"

const TourPage = () => {
  const matches = useMediaQuery('only screen and (max-width: 1599px) and (pointer: coarse)')
  let dragOptions = {}

  if (matches) {
    dragOptions = {
      drag: "x",
      dragConstraints: { left: 0, right: 0 },
      onDragEnd: (event, info) => {
        if (info.delta.x < 0) {
          navigate('/')
        }
      },
    }
  }

  return (
    <>
      <Seo />
      <div className="page-wrapper tour-page-wrapper">
        <BackgroundImages />
        <TourPageContent {...dragOptions} />
        <HomePageContent animate={{ opacity: 0.6 }} tabIndex="-1" aria-hidden="true" />
        <HomePageLink animate={{ backgroundColor: '#1B1B23', opacity: 1 }} />
        <Tabs animate={{ opacity: 0 }} tabIndex="-1" aria-hidden="true" />
      </div>
    </>
  )
}

export default TourPage
