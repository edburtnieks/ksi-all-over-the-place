import * as React from "react"
import { Link } from "gatsby"
import { CaretLeft } from "phosphor-react"

import { Seo } from "../components/Seo"
import { BackgroundImages } from "../components/BackgroundImages"

import Logo from "../assets/all-over-the-place-logo.svg"

const NotFoundPage = () => {
  return (
    <>
      <Seo />
      <div className="not-found-page-wrapper">
        <BackgroundImages />
        <div className="album-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <main className="not-found-page-content flow">
          <h1 className="text-brand-600">Page not Found</h1>
          <Link to="/">
            <CaretLeft size={24} weight="bold" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
        </main>
      </div>
    </>
  )
}

export default NotFoundPage

