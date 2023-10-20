import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import search from "../assets/img/search icon.svg";

function Search(props) {
  return (
    <Wrapper>
      <SearchContainer>
        <Img src={search} alt="search icon" />
        <Input
          type="text"
          placeholder="Search GitHub Username…"
          value={props.user}
          onChange={(event) => props.setUSer(event.target.value)}
        />
      </SearchContainer>
      <Button onClick={() => props.fetchAdvice()}> search</Button>
    </Wrapper>
  );
}
export default Search;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: center;
  padding: 9px 10px 9px 32px;
  border-radius: 15px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  margin: 35px 0 23px 0;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Img = styled.img`
  cursor: pointer;
`;
const Input = styled.input`
  color: #4b6a9b;
  font-size: 18px;
  margin: 0 23px;
  border: none;
  max-width: 655px;
  width: 100%;
  outline: none;
  line-height: 25px; /* 138.889% */
  letter-spacing: 2.5px;
`;
const Button = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 10px;
  background: #0079ff;
  border: none;
  cursor: pointer;
`;
