import * as React from 'react';
import styled from 'styled-components';

import { ISkill, IEdge } from '../models';
import SkillListItem from './SkillListItem';

interface IProps {
  skills: [ISkill];
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SkillList = ({ skills }: IProps) => (
  <Wrapper>
    {skills &&
      skills.map((skill) =>
        <SkillListItem key={skill.name} skill={skill} />,
      )
    }
  </Wrapper>
);

export default SkillList;
