import * as React from 'react';
import styled from 'styled-components';

import { ISkill, IEdge } from '../models';

interface IProps {
  skill: ISkill;
}

const Wrapper = styled.div`
  display: flex;

  height: 90px;
  max-width: 300px;
  margin: 15px;

  transition: transform 100ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

const Left = styled.div`
  padding: 10px;
`;

const Right = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-height: 100%;
`;

const Name = styled.span`
  font-weight: bold;
`;

const SkillListItem = ({ skill }: IProps) => {
  const {
    name,
    image,
  } = skill;
  return (
    <Wrapper>
      <Left>
        <Image src={image.publicURL} />
      </Left>
      <Right>
        <Name>{name}</Name>
      </Right>
    </Wrapper>
  );
};

export default SkillListItem;
