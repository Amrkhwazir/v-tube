import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: ${(props)=> props.type !== "sm" && "310px"};
  margin-bottom:${(props)=> props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display:  ${(props)=> props.type === "sm" && "flex"};
  gap: 10px;
`

const Image = styled.img`
  width: 100%;
  height:  ${(props)=> props.type === "sm" ? "100px" : "200px"};
  background-color: #999;
  flex: 1;
`

const Details = styled.div`
  display: flex;
  margin-top: ${(props)=> props.type !== "sm" && "14px"};
  gap: 12px;
  flex: 1;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=> props.type === "sm" && "none"} ;
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
  font-size: 12px;
  color: ${({theme}) => theme.textSoft};
  margin: 5px 0px;
`
const Info = styled.div`
font-size: 14px;
color:  ${({theme}) => theme.textSoft};
`

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration: "none"}}>
    <Container type={type}>
      <Image type={type} src="https://th.bing.com/th/id/OIP.5krZ8fDF-RICktnN2Hf2AQHaFj?rs=1&pid=ImgDetMain"/>
      <Details type={type}>
        <ChannelImage  type={type} src="https://th.bing.com/th?q=Chart+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247"/>
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