module.exports = {
  siteMetadata: {
    title: `React Native Club`,
    name: `RNC`,
    siteUrl: `https://react-native.club`,
    description: `Hello from React Native Club, the one stop shop for React Native related articles and resources.`,
    hero: {
      heading: `Hello from React Native Club, the one stop shop for React Native related articles and resources.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/react.club`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.react-native.club`,
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Native Club`,
        short_name: `RNC`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
}
