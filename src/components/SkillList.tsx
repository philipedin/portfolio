import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { ISkill, IEdge } from '../models';
import SkillListItem from './SkillListItem';

interface IProps {
  skills: [ISkill];
}

const swoopIn = keyframes`
  0% {
    top: -50px;
    right: -30px;
    opacity: 0;
  }

  100% {
    top: 0px;
    right: 0px;
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  & > a {
    opacity: 1;
    position: relative;
    animation-name: ${swoopIn};
    animation-duration: 200ms;
    animation-timing-function: cubic-bezier(0.42, 0, 0.57, 1.37);
    animation-fill-mode: backwards;

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
