import React from "react";
import styled from "styled-components";
import moon from "../assets/img/moon.svg";
const Header = () => {
  return (
    <Wrapper className="Header">
      <Title>devfinder</Title>
      <MoudContainer>
        <MoudSpan>DARK</MoudSpan>
        <Img src={moon} alt="moon icon" />
      </MoudContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  color: #222731;
  font-size: 26px;
  font-weight: 700;
`;
const MoudContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MoudSpan = styled.span`
  color: #697c9a;
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
