import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: 0.5px solid ${({theme}) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span``;

export const SingleComment = () => {
  return (
    <Container>
      <Avatar src='' />
      <Details>
        <Name>Amir khan <Date>2 minutes ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur itaque commodi unde hic ex culpa, quas consequuntur rem accusantium quisquam iste placeat aperiam vitae soluta explicabo facilis odio cupiditate fuga!</Text>
      </Details>
    </Container>
  )
}
