import * as React from 'react';
import styled from 'styled-components';

import { ISkill, IEdge } from '../models';

interface IProps {
  skill: ISkill;
}

const Wrapper = styled.div`
  display: flex;

  height: 90px;
  width: 300px;
  margin: 15px;
  padding: 10px;

  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Left = styled.div`
  display: inline-block;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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
    link,
  } = skill;
  return (
    <a target="_blank" href={link}>
      <Wrapper>
        <Left>
          <Image src={image.publicURL} />
        </Left>
        <Right>
          <Name>{name}</Name>
        </Right>
      </Wrapper>
    </a>
  );
};

export default SkillListItem;
