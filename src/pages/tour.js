import * as React from "react"
import { navigate } from "gatsby"
import { useMediaQuery } from "@react-hook/media-query"
import { useGesture } from "@use-gesture/react"

import { Seo } from "../components/Seo"
import { BackgroundImages } from "../components/BackgroundImages"
import { HomePageContent } from "../components/HomePageContent"
import { TourPageContent } from "../components/TourPageContent"
import { HomePageLink } from "../components/HomePageLink"
import { Tabs } from "../components/Tabs"

const TourPage = () => {
  const matches = useMediaQuery("only screen and (pointer: coarse)")
  const dragOptions = useGesture({
    onDragEnd: (event) => {
      if (event.direction[0] === -1) {
        navigate("/")
      }
    }
  }, {
    drag: {
      axis: 'x',
    },
  })

  return (
    <>
      <Seo />
      <div className="page-wrapper tour-page-wrapper" { ...matches && {...dragOptions()}}>
        <BackgroundImages />
        <TourPageContent />
        <HomePageContent animate={{ opacity: 0.6 }} tabIndex="-1" aria-hidden="true" />
        <HomePageLink animate={{ backgroundColor: "#1B1B23", opacity: 1 }} />
        <Tabs animate={{ opacity: 0 }} tabIndex="-1" aria-hidden="true" />
      </div>
    </>
  )
}

export default TourPage
