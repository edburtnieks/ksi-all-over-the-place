import * as React from "react"
import { AnimateSharedLayout } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <AnimateSharedLayout>
      {children}
    </AnimateSharedLayout>
  )
}

export default Layout
