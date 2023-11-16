import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../src/Components/Header";
import Search from "./Components/Search";
import Main from "./Components/Main";

function App() {
  const [state, setState] = useState("");
  const [user, setUser] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  async function fetchAdvice() {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);

      if (!response.ok) {
        throw new Error("There was error while fetchig data");
      }

      const data = await response.json();
      console.log(data);
      setState(data);
      console.log(user);
    } catch (Error) {
      console.log(Error);
    }
  }

  return (
    <MainWrap className={isDarkMode ? "dark-mode" : ""}>
      <Container>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Search
          user={user}
          setUser={setUser}
          fetchAdvice={fetchAdvice}
          isDarkMode={isDarkMode}
        />
        <Main state={state} isDarkMode={isDarkMode} />
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
