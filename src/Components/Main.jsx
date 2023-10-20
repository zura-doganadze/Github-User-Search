import React from "react";
import user from "../assets/img/user-img.png";
import styled from "styled-components";

function Main() {
  return (
    <MainWrapper>
      <Container>
        <BioContainer>
          <div>
            <Img src={user} alt="user img" />
          </div>
          <NameWrapper>
            <NameContainer>
              <Names>
                <Name>The Octocat </Name>
                <NickName>@octocat</NickName>
              </Names>
              <Join>Joined 25 Jan 2011</Join>
            </NameContainer>
            <Bio>This profile has no bio</Bio>
          </NameWrapper>
        </BioContainer>
        <Description>
          <ActivityWrapper>
            <ActivityDetailsCont>
              <ActivityTitle>Repos</ActivityTitle>
              <ActivityNumber>8</ActivityNumber>
            </ActivityDetailsCont>
            <ActivityDetailsCont>
              <ActivityTitle>Followers</ActivityTitle>
              <ActivityNumber>3938</ActivityNumber>
            </ActivityDetailsCont>
            <ActivityDetailsCont>
              <ActivityTitle>Following</ActivityTitle>
              <ActivityNumber>9</ActivityNumber>
            </ActivityDetailsCont>
          </ActivityWrapper>
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
