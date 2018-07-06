import * as React from 'react';
import WorkList from '../components/WorkList';
import { Edge, Work } from '../models';
interface IProps {
  data: {
    allMarkdownRemark: {
      edges: [Edge<Work>];
    },
  };
}

const IndexPage = ({
  data: {
    allMarkdownRemark: {
      edges,
    },
  },
}: IProps) => (
  <div>
    <h2>Work</h2>
    <p>A selection of the work i've done.</p>
    <WorkList work={edges} />
  </div>
);

export const pageQuery = graphql`

query WorkQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          path
          title
          images {
            logo {
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
`;

export default IndexPage;
