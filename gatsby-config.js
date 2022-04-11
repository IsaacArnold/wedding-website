module.exports = {
  siteMetadata: {
    title: "Wedding Website",
    description:
      "Celebrate Isaac and Ness exchanging vows and find out all the information needed for our special day",
    author: "Isaac Arnold",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-svg",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
