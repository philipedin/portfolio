const path = require('path');
const slash = require('slash');
const {kebabCase, uniq, get, compact, times} = require('lodash');

const POSTS_PER_PAGE = 10;
const cleanArray = arr => compact(uniq(arr));

// Add Gatsby's extract-graphql Babel plugin (we'll chain it with babel-loader)
const extractQueryPlugin = path.resolve(
  __dirname,
  `node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js`
);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const workTemplate = path.resolve('src/templates/work.tsx');

  return graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      filter: {fileAbsolutePath: {regex: "/data/work/.*\.md$/"}}
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            technologies
            images {
              screenshots {
                absolutePath
                relativePath
                publicURL
              }
            }
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }



    result.data.allMarkdownRemark.edges.forEach(({
      node: {
        html,
        frontmatter: {
          path,
          title,
          technologies,
          images: {
            screenshots
          }
        }
      }
    }) => {
      createPage({
        path,
        component: workTemplate,
        context: {
          html,
          workData: {
            title,
            technologies,
            images: {
              screenshots
            }
          }
        },
      })
    })

  });
}
