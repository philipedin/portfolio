import * as React from 'react';
import SkillList from '../components/SkillList';
import { IEdge, ISkill } from '../models';
import GhostTyper from '../components/GhostTyper';

interface IProps {
  data: {
    allMarkdownRemark: {
      edges: [IEdge<{ skills: [ISkill]}>];
    },
  };
}

const SkillsPage = ({
  data: {
    allMarkdownRemark: {
      edges,
    },
  },
}: IProps) => (
  <div>
    <h1>Skills</h1>
    <GhostTyper text="This list includes technologies that i have experience working with." />
    <SkillList skills={edges[0].node.frontmatter.skills} />
  </div>
);

export const pageQuery = graphql`

query SkillsQuery {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/data/skills.*\\.md$/"}}
  ) {
    edges {
      node {
        id
        frontmatter {
          skills {
            name
            image {
              absolutePath
              relativePath
              publicURL
              childImageSharp {
                  resolutions {
                    ...GatsbyImageSharpResolutions
                  }
                }
            }
            link
          }
        }
      }
    }
  }
}
`;

export default SkillsPage;
