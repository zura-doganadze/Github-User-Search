import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../src/Components/Header";
import Search from "./Components/Search";
import Main from "./Components/Main";

function App() {
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
      console.log(user);
      setState(data);
    } catch (Error) {
      console.log(Error);
    }
  }
  // useEffect(() => {
  //   fetchAdvice();
  // }, []);
  return (
    <MainWrap>
      <Container>
        <Header />
        <Search user={user} setUSer={setUSer} fetchAdvice={fetchAdvice} />
        <Main state={state} />
      </Container>
    </MainWrap>
  );
}

export default App;

const MainWrap = styled.div`
  width: 100%;
  margin-top: 144px;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 730px;
  width: 100%;
  margin: 0 30px;
`;
