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
    title: `${title} | ${defaultTitle}`,
  }

  return (
    <Helmet
      htmlAttributes={{ lang: seo.lang }}
      title={seo.title}
    >
      <meta name="theme-color" content="#21222C" />
      <meta name="robots" content="noindex" />
      <meta name="description" content={`"KSI - All Over the Place" album showcase concept demo`} />
      <link rel="canonical" href="https://aotp.netlify.app/" />
      <meta property="og:title" content="KSI - All Over the Place" />
      <meta property="og:description" content={`"KSI - All Over the Place" album showcase concept demo`} />
      <meta property="og:url" content="https://aotp.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="KSIAllOverThePlace" />
      <meta property="og:image" content="/og-image.jpg" />
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
