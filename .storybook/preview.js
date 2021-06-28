import "../src/styles/main.scss"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark-800",
    values: [
      {
        name: "dark-800",
        value: "hsl(235, 14%, 15%)"
      }
    ]
  }
}