import * as React from 'react';
import WorkList from '../components/WorkList';
import { IEdge, IWork } from '../models';
import GhostTyper from '../components/GhostTyper';

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
    <GhostTyper text="A selection of the work i've done." />
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
              childImageSharp {
                  sizes(maxHeight: 200, maxWidth: 200, quality: 80) {
                  	...GatsbyImageSharpSizes
                  }
                  resolutions(height: 200, width: 200, quality: 80) {
                  	...GatsbyImageSharpResolutions
                  }
                }
            }
          }
        }
      }
    }
  }
}
`;

export default WorkPage;
