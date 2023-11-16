import React from "react";
import styled from "styled-components";
import moon from "../assets/img/moon.svg";
import sun from "../assets/img/002-sun.svg";
const Header = (props) => {
  return (
    <Wrapper className={props.isDarkMode ? 'header-dark-mode' : ''}>
      <Title>devfinder</Title>
      <MoudContainer>
        
        <MoudSpan>{props.isDarkMode ? "LIGHT" : "DARK"}</MoudSpan>
        <Button onClick={props.toggleDarkMode}>
          <Img src={props.isDarkMode ? sun : moon} alt="icon" />
        </Button>
      </MoudContainer>
    </Wrapper>
  );
};

export default Header;

const Button = styled.button`
  border: none;
  background-color: inherit;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  /* color: #222731; */
  font-size: 26px;
  font-weight: 700;
`;
const MoudContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MoudSpan = styled.span`
  /* color: #697c9a; */
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin-right: 16px;
`;
const Img = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
