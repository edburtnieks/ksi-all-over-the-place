module.exports = {
  siteMetadata: {
    lang: "en",
    title: "KSI - All Over the Place",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        },
      },
    },
  ],
}
