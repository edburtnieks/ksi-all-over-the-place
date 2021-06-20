import * as React from "react"
import { Link } from "gatsby"

import * as tabStyles from "../styles/components/tab.module.scss"

const Tab = ({ leftIcon, rightIcon, children, link, className = "", ...rest }) => {
  return (
    <Link to={link} className={`${className} ${tabStyles.tab} custom-focus text-light-50-80`} {...rest}>
      <span className={`${tabStyles.inner} inner`}>
        {leftIcon}
        <span className={`${tabStyles.text} text`}>{children}</span>
        {rightIcon}
      </span>
    </Link>
  )
}

export { Tab }
