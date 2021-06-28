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

const HomePage = () => {
  const matches = useMediaQuery("only screen and (pointer: coarse)")
  const dragOptions = useGesture({
    onDragEnd: (event) => {
      if (event.direction[0] === 1) {
        navigate("/tour")
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
      <div className="page-wrapper home-page-wrapper" { ...matches && {...dragOptions()}}>
        <BackgroundImages />
        <TourPageContent tabIndex="-1" aria-hidden="true" />
        <HomePageContent />
        <HomePageLink
          initial={{ opacity: 0 }}
          animate={{ backgroundColor: "#21222C", opacity: 0 }}
          aria-hidden="true"
          tabIndex="-1"
        />
        <Tabs animate={{ opacity: 1 }} />
      </div>
    </>
  )
}

export default HomePage
