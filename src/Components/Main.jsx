import { useState, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import userImg from "../assets/img/user-img.png";
import location from "../assets/img/003-location.svg";
import twitter from "../assets/img/004-twitter.svg";
import url from "../assets/img/002-url.svg";
import office from "../assets/img/001-office-building.svg";

function Main(props) {
  const [state, setState] = useState("");
  const [user, setUSer] = useState("");

  async function fetchAdvice() {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);

      if (!response.ok) {
        throw new Error("There was error while fetchig data");
      }
      const data = await response.json();

      console.log(data);
      console.log(data.public_repos);
      console.log(user);
      setState(data);
    } catch (Error) {
      console.log(Error);
    }
  }
  //  useEffect(() => {
  //   fetchAdvice();
  // }, []);

  const data = [
    {
      avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
      bio: null,
      blog: "https://github.blog",
      company: "@github",
      created_at: "2011-01-25T18:44:36Z",
      email: null,
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      followers: 10840,
      followers_url: "https://api.github.com/users/octocat/followers",
      following: 9,
      following_url:
        "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      gravatar_id: "",
      hireable: null,
      html_url: "https://github.com/octocat",
      id: 583231,
      location: "San Francisco",
      login: "octocat",
      name: "The Octocat",
      node_id: "MDQ6VXNlcjU4MzIzMQ==",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      public_gists: 8,
      public_repos: 8,
      received_events_url:
        "https://api.github.com/users/octocat/received_events",
      repos_url: "https://api.github.com/users/octocat/repos",
      site_admin: false,
      starred_url:
        "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      twitter_username: null,
      type: "User",
      updated_at: "2023-10-22T11:22:57Z",
      url: "https://api.github.com/users/octocat",
    },
  ];
  return (
    <MainWrapper>
      <Container>
        <BioContainer>
          <div>
            <Img
              src={
                props.state !== "" ? props.state.avatar_url : data[0].avatar_url
              }
              alt="user img"
            />
          </div>
          <NameWrapper>
            <NameContainer>
              <Names>
                <Name>
                  {props.state !== "" ? props.state.name : data[0].name}{" "}
                </Name>
                <NickName>
                  @{props.state !== "" ? props.state.login : data[0].login}
                </NickName>
              </Names>
              <Join>
                Joined{" "}
                {props.state !== ""
                  ? props.state.created_at
                  : data[0].created_at}{" "}
                Jan
              </Join>
            </NameContainer>
            <Bio>
              {props.state !== ""
                ? props.state.bio || "This profile has no bio"
                : "This profile has no bio"}
            </Bio>
          </NameWrapper>
        </BioContainer>
        <Description>
          <ActivityWrapper>
            <ActivityDetailsCont>
              <ActivityTitle>Repos</ActivityTitle>
              <ActivityNumber>
                {props.state !== ""
                  ? props.state.public_repos
                  : data[0].public_repos}
              </ActivityNumber>
            </ActivityDetailsCont>
            <ActivityDetailsCont>
              <ActivityTitle>Followers</ActivityTitle>
              <ActivityNumber>
                {props.state !== "" ? props.state.followers : data[0].followers}
              </ActivityNumber>
            </ActivityDetailsCont>
            <ActivityDetailsCont>
              <ActivityTitle>Following</ActivityTitle>
              <ActivityNumber>
                {props.state !== "" ? props.state.following : data[0].following}
              </ActivityNumber>
            </ActivityDetailsCont>
          </ActivityWrapper>
          <ContactWrapper>
            <ContactContainer>
              <img src={location} alt="location img" />
              <ContactText>
                {props.state !== ""
                  ? props.state.location
                    ? props.state.location
                    : "Not Available"
                  : data[0].location
                  ? data[0].location
                  : "Not Available"}
              </ContactText>
            </ContactContainer>
            <ContactContainer>
              <img src={twitter} alt="location img" />
              <ContactText>
                {props.state !== ""
                  ? props.state.twitter_username
                    ? props.state.twitter_username
                    : "Not Available"
                  : data[0].twitter_username
                  ? data[0].twitter_username
                  : "Not Available"}
              </ContactText>
            </ContactContainer>
            <ContactContainer>
              <img src={url} alt="location img" />
              <ContactText>
                {props.state !== ""
                  ? props.state.blog
                    ? props.state.blog
                    : "Not Available"
                  : data[0].blog
                  ? data[0].blog
                  : "Not Available"}
              </ContactText>
            </ContactContainer>
            <ContactContainer>
              <img src={office} alt="location img" />
              <ContactText>
                {props.state !== ""
                  ? props.state.company
                    ? `@ ${props.state.company}`
                    : "Not Available"
                  : `@ ${data[0].company}`
                  ? data[0].company
                  : "Not Available"}
              </ContactText>
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
