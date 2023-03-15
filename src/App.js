import { useContext, useState } from "react";
import TextEditor from "./components/TextEditor/TextEditor";
import FileExplorer from "./components/FileExplorer/FileExplorer"
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";
import OpenedFilesContext from "./helpers/OpenedFilesContext";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [openedFiles, setOpenedFiles] = useState([
    { fileName: 'index.html', content: 'This is the content for Tab 1' },
    { fileName: 'FileExplorer.js', content: 'This is the content for Tab 2' },
    { fileName: 'style.css', content: 'This is the content for Tab 3' }
  ]);

  return (
    <OpenedFilesContext.Provider value={{ activeTab, setActiveTab, openedFiles, setOpenedFiles }}>
      <StyledDiv className="App">
        <StyledLeftDiv>
          <FileExplorer/>
        </StyledLeftDiv>
        <StyledRightDiv>
          <NavBar/>
          <TextEditor/>
        </StyledRightDiv>
      </StyledDiv>
    </OpenedFilesContext.Provider>
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
