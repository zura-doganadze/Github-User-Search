import styled from "styled-components";
import Header from "../src/Components/Header";
import Search from "./Components/Search";
import Main from "./Components/Main";

function App() {
  return (
    <MainWrap>
      <Container>
        <Header />
        <Search />
        <Main />
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
