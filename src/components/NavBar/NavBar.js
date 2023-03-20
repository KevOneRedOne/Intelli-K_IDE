/* eslint-disable default-case */
import React, { useContext } from 'react';
import * as Styled from "./NavBar.style.js";
import OpenedFilesContext from '../../helpers/OpenedFilesContext.js';

const extensionRegEx = /(?:\.([^.]+))?$/;

const NavBar = (props) => {
  const { activeTab, setActiveTab, openedFiles } = useContext(OpenedFilesContext);
    return (
      <Styled.NavBar>
          {openedFiles.map((tab, index) => (
            <Tab data-active={activeTab === index} data-filename={tab.fileName}  data-tab-index={index} onClick={() => setActiveTab(index)}></Tab>
          ))}
      </Styled.NavBar>    
    )

}

const Tab = (props) => {
  const { openedFiles, setOpenedFiles } = useContext(OpenedFilesContext);
  const getIconContent = (fileName) => {
    const extension = extensionRegEx.exec(fileName)[1]?.toUpperCase();

    switch(extension) {
      case 'JS':
        return 'JS'
      case 'CSS':
        return '#'
      case 'HTML':
        return '<>'
    }
  }

  const handleTabClose = (index) => {
    const tmpOpenedFiles = openedFiles;
    delete tmpOpenedFiles[index];
    setOpenedFiles(tmpOpenedFiles);
  }

  return (
    <Styled.Tab data-active={props['data-active']} onClick={props.onClick}>
      <Styled.FileLabel data-filetype={getIconContent(props['data-filename'])}>{props['data-filename']}</Styled.FileLabel>
      <Styled.CloseButton role="button" onClick={() => handleTabClose(props['data-tab-index'])}/>
    </Styled.Tab>
  )
}

export default NavBar;