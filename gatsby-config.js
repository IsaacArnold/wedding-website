module.exports = {
  siteMetadata: {
    title: "Isaac & Ness' Wedding Website",
    titleTemplate: "%s | Isaac & Ness' Wedding",
    description:
      "Celebrate Isaac and Ness exchanging vows and find out all the information needed for our special day",
    author: "Isaac Arnold",
    siteUrl: "https://isaacandness.wedding/",
    image: "./src/assets/images/SEO-image.png",
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
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Isaac and Ness' Wedding Website",
        short_name: "Isaac and Ness' Wedding Website",
        start_url: "/",
        background_color: "#F6F6F6",
        display: "minimal-ui",
        icon: "src/images/wedding-icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
