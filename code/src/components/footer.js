import React from 'react'
import styled from 'styled-components'
import Githubicon from './Images/githubicon.png'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
  opacity: 30%;
  position: absolute;
  bottom: -100px;
`;
const Name = styled.p`
  font-family: 'Archivo Black', sans-serif;
  font-size: 11px;
  color: black;
  opacity: 50%;
`;
const GitLink = styled.img`
  width: 30px;
  &:hover {
    color: white;
    filter: brightness(100); 
}
`;
const StyledA = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = () => {
  return (

    <FooterWrapper>
      <StyledA href="https://github.com/AnnaElvine">
        <Name>Anna</Name>
        <GitLink src={Githubicon} alt="github" />
      </StyledA>
    </FooterWrapper>
  );
};