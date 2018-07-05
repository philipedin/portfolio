module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
        name: 'data'
      }
    },
    'gatsby-transformer-remark'
  ],
}
