import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 20px);
    color: ${({theme}) => theme.text};
    margin-top: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 0px;
    margin-top: 0px;
`;
const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin-top: 0px;
`;
const Input = styled.input`
    border:1px solid ${({theme}) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
`;
const Button = styled.button`
    margin-top: 8px;
    padding: 8px 40px;
    background-color: transparent;
    border: 1.5px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 5px;
    font-weight: 500;   
    cursor: pointer;
`;
const More = styled.div`
    display: flex;
    font-size: 12px;
    margin-top: 5px;
    color: ${({theme}) => theme.text};
`;
const Links = styled.div`
    margin-left: 50px;
`;
const Link = styled.span`
    margin-left: 25px;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to V-Tube</SubTitle>
            <Input placeholder='Username'/>
            <Input type='Password' placeholder='Password'/>
            <Button>Sign in</Button>
            <Title>or</Title>
            <Input placeholder='Username'/>
            <Input placeholder='email'/>
            <Input type='Password' placeholder='Password'/>
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default Login