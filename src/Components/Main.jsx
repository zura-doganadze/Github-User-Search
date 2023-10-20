import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import userImg from "../assets/img/user-img.png";
import location from "../assets/img/003-location.svg";
import twitter from "../assets/img/004-twitter.svg";
import url from "../assets/img/002-url.svg";
import office from "../assets/img/001-office-building.svg";

function Main(props) {
  // const [state, setState] = useState("");
  // const [user, setUSer] = useState("");

  // async function fetchAdvice() {
  //   try {
  //     const response = await fetch(`https://api.github.com/users/${user}`);

  //     if (!response.ok) {
  //       throw new Error("There was error while fetchig data");
  //     }
  //     const data = await response.json();

  //     console.log(data);
  //     console.log(data.public_repos);
  //     console.log(user);
  //     setState(data);
  //   } catch (Error) {
  //     console.log(Error);
  //   }
  // }
  //  useEffect(() => {
  //   fetchAdvice();
  // }, []);
  return (
    <MainWrapper>
      <Container>
        <BioContainer>
          <div>
            <Img src={userImg} alt="user img" />
          </div>
          <NameWrapper>
            <NameContainer>
              <Names>
                <Name>The Octocat </Name>
                <NickName>
                  @{props.state !== "" ? props.state.login : "octocat"}
                </NickName>
              </Names>
              <Join>Joined 25 Jan 2011</Join>
            </NameContainer>
            <Bio>This profile has no bio</Bio>
            {/* <input
              type="text"
              value={props.user}
              onChange={(event) => props.setUSer(event.target.value)}
            /> */}
            {/* <button onClick={() => props.fetchAdvice()}>
              buttonuyfiuyfiyf
            </button> */}
            {/* <span> advice {state !== "" && state.public_repos}</span> */}
          </NameWrapper>
        </BioContainer>
        <Description>
          <ActivityWrapper>
            <ActivityDetailsCont>
              <ActivityTitle>Repos</ActivityTitle>
              <ActivityNumber>
                {props.state !== "" ? props.state.public_repos : 8}
              </ActivityNumber>
            </ActivityDetailsCont>
            <ActivityDetailsCont>
              <ActivityTitle>Followers</ActivityTitle>
              <ActivityNumber>
                {props.state !== "" ? props.state.followers : 3938}
              </ActivityNumber>
            </ActivityDetailsCont>
            <ActivityDetailsCont>
              <ActivityTitle>Following</ActivityTitle>
              <ActivityNumber>
                {props.state !== "" ? props.state.following : 9}
              </ActivityNumber>
            </ActivityDetailsCont>
          </ActivityWrapper>
          <ContactWrapper>
            <ContactContainer>
              <img src={location} alt="location img" />
              <ContactText>San Francisco</ContactText>
            </ContactContainer>
            <ContactContainer>
              <img src={twitter} alt="location img" />
              <ContactText>Not Available</ContactText>
            </ContactContainer>
            <ContactContainer>
              <img src={url} alt="location img" />
              <ContactText>https://github.blog</ContactText>
            </ContactContainer>
            <ContactContainer>
              <img src={office} alt="location img" />
              <ContactText>@github</ContactText>
            </ContactContainer>
          </ContactWrapper>
        </Description>
      </Container>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 15px;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
`;
const Container = styled.div`
  width: 87%;
  margin: 5% 0 52px 0;
`;
const NameWrapper = styled.div`
  width: 100%;
`;
const BioContainer = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;
  margin-right: 37px;
`;
const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Name = styled.span`
  color: #2b3442;
  font-size: 26px;
  font-weight: 700;
`;
const NickName = styled.span`
  color: #0079ff;
  font-size: 16px;
  margin-top: 2px;
`;
const Join = styled.span`
  color: #697c9a;
  text-align: right;
  font-size: 15px;
`;
const Bio = styled.div`
  color: #4b6a9b;
  font-size: 15px;
  line-height: 25px; /* 166.667% */
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;
// ActivityWrapper
const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const ActivityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background: #f6f8ff;
  max-width: 480px;
  width: 100%;
  padding: 15px 55px 17px 32px;
  margin: 32px 0 37px 0;
`;
const ActivityDetailsCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ActivityTitle = styled.span`
  color: #4b6a9b;
  font-size: 14px;
`;
const ActivityNumber = styled.span`
  color: #2b3442;
  font-size: 22px;
  font-weight: 700;
`;
//contact
const ContactWrapper = styled.div`
  max-width: 480px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: start;
  row-gap: 19px;
  column-gap: 62px;
`;
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ContactText = styled.span`
  color: #4b6a9b;
  font-size: 16px;
  margin-left: 19px;
  cursor: pointer;
`;
