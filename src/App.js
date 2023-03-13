import { useContext } from "react";
import TextEditor from "./components/TextEditor/TextEditor";
import FileExplorer from "./components/FileExplorer/FileExplorer"
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";

function App() {

  const openedFiles = useContext([
    {
      fileName: "NavBar.js",
      active: false,
      unsavedContent: "Hello world"
    },
    {
      fileName: "FileExplorer.js",
      active: false,
      unsavedContent: undefined
    }, 
    {
      fileName: "App.js",
      active: true,
      unsavedContent: "Toto"
    }
  ]);

  const a = {
    "NavBar.js" : {
      active: false,
      unsavedContent: "Hello world"
    },
    "FileExplorer.js": {
      active: false,
      unsavedContent: undefined
    }, 
    "App.js": {
      active: true,
      unsavedContent: "Toto"
    }
  }

  return (
    <StyledDiv className="App">
      <StyledLeftDiv>
        <FileExplorer/>
      </StyledLeftDiv>
      <StyledRightDiv>
        <NavBar/>
        <TextEditor/>
      </StyledRightDiv>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: rgb(204, 204, 204);
  display: flex;
  width: 100%;
  height: 100vh;
`
const StyledLeftDiv = styled.div`
  height: 100vh;
  width: 20%;
  background-color: rgb(22, 16, 37, 0.8);
`
const StyledRightDiv = styled.div`
  height: 100vh;
  width: 80%;
`
export default App;
