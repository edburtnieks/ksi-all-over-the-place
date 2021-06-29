import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ lang, title }) => {
  const { site } = useStaticQuery(query)

  const {
    defaultLang,
    defaultTitle,
  } = site.siteMetadata

  const seo = {
    lang: lang || defaultLang,
    title: title || defaultTitle,
  }

  return (
    <Helmet
      htmlAttributes={{ lang: seo.lang }}
      title={seo.title}
    >
      <meta name="theme-color" content="#21222C" />
      <meta name="robots" content="noindex" />
    </Helmet>
  )
}

export { Seo }

Seo.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
}

Seo.defaultProps = {
  lang: null,
  title: null,
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultLang: lang
        defaultTitle: title
      }
    }
  }
`
