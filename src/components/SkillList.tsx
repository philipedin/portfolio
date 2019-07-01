import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { ISkill, IEdge } from '../models';
import SkillListItem from './SkillListItem';
import itemAppear from '../animations/itemAppear';

interface IProps {
  skills: [ISkill];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > a {
    ${itemAppear}
  }
`;

const SkillList = ({ skills }: IProps) => (
  <Wrapper>
    {skills &&
      skills.map((skill, index) =>
        <SkillListItem key={skill.name} skill={skill} delay={index * 60} />,
      )
    }
  </Wrapper>
);

export default SkillList;
