import * as React from 'react';
import WorkList from '../components/WorkList';
import { IEdge, IWork } from '../models';

interface IProps {
  data: {
    allMarkdownRemark: {
      edges: [IEdge<IWork>];
    },
  };
}

const WorkPage = ({
  data: {
    allMarkdownRemark: {
      edges,
    },
  },
}: IProps) => (
  <div>
    <h1>Work</h1>
    <p>A selection of the work i've done.</p>
    <WorkList work={edges} />
  </div>
);

export const pageQuery = graphql`

query WorkQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/data/work/.*\\.md$/"}}
  ) {
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

export default WorkPage;
