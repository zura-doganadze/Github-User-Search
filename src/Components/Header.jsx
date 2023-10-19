import React from "react";
import styled from "styled-components";
import moon from "../assets/img/moon.svg"
const Header = () => {
  return (
    <Wrapper className="Header">
      <div>
        <h1>devfinder</h1>
      </div>
      <div>
        <span>DARK</span>
        <img src={moon} alt="moon icon" />
      </div>
    </Wrapper>
  );
};

export default Header;


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: center;
`;
