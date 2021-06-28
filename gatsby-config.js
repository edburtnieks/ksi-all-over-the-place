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
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        allPageHeaders: [
          "Cross-Origin-Opener-Policy: same-origin",
          "Cross-Origin-Embedder-Policy: require-corp",
        ],
      },
    },
  ],
}
