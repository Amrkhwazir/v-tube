import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin-bottom: 45px;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: #999;
`

const Details = styled.div`
  display: flex;
  margin-top: 14px;
  gap: 12px;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`

const Texts = styled.div`
  
`
const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 5px 0px;
`
const Info = styled.div`
font-size: 14px;
color:  ${({theme}) => theme.textSoft};
`

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
    <Container>
      <Image src="https://th.bing.com/th/id/OIP.5krZ8fDF-RICktnN2Hf2AQHaFj?rs=1&pid=ImgDetMain"/>
      <Details>
        <ChannelImage src="https://th.bing.com/th?q=Chart+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247"/>
        <Texts>
          <Title>Test video</Title>
          <ChannelName>V-Tube</ChannelName>
          <Info>660,899 . 1 day ago</Info>

        </Texts>
      </Details>
      </Container>
    </Link>
  )
}

export default Card