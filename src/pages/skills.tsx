import * as React from 'react';
import SkillList from '../components/SkillList';
import { IEdge, ISkill } from '../models';

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
    <div dangerouslySetInnerHTML={{ __html: edges[0].node.html }} />
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
        html
        frontmatter {
          skills {
            name
            image {
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

export default SkillsPage;
