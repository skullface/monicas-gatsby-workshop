/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `CuteConf 2020`,
    description: `Everything sucks, so the least we can do is make it sucky and CUTE!`,
    author: `@skullface`,
    siteUrl: `https://cuteconf-workshop.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/pencil-icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
