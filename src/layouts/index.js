import * as React from "react"
import { AnimateSharedLayout } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <AnimateSharedLayout>
      {children}
      <div className="showcase-text">For Demo and Showcase Purpose Only</div>
    </AnimateSharedLayout>
  )
}

export default Layout
