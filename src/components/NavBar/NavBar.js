/* eslint-disable default-case */
import React, { useContext } from 'react';
import styled, { css } from "styled-components";
import * as Styled from "./NavBar.style.js";
import OpenedFilesContext from '../../helpers/OpenedFilesContext.js';

const extensionRegEx = /(?:\.([^.]+))?$/;

const NavBar = (props) => {
  const { activeTab, setActiveTab, openedFiles } = useContext(OpenedFilesContext);
    return (
      <Styled.NavBar>
          {openedFiles.map((tab, index) => (
            <Tab data-active={activeTab === index} data-fileName={tab.fileName} onClick={() => setActiveTab(index)}></Tab>
          ))}
      </Styled.NavBar>    
    )

}

const Tab = (props) => {
  const { activeTab, setActiveTab } = useContext(OpenedFilesContext);
  function getIconContent(fileName) {
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

  return (
    <Styled.Tab data-active={props['data-active']} onClick={props.onClick}>
      <Styled.FileLabel data-fileType={getIconContent(props['data-fileName'])}>{props['data-fileName']}</Styled.FileLabel>
      <Styled.CloseButton role="button"/>
    </Styled.Tab>
  )
}

export default NavBar;