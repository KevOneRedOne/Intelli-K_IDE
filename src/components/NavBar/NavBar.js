/* eslint-disable default-case */
import styled, { css } from "styled-components";
import * as Styled from "./NavBar.style.js";

const extensionRegEx = /(?:\.([^.]+))?$/;

const NavBar = () => {
  const a = [
    {
      fileName: "index.html",
      active: false,
      unsavedContent: "Hello world"
    },
    {
      fileName: "FileExplorer.js",
      active: true,
      unsavedContent: undefined
    }, 
    {
      fileName: "style.css",
      active: false,
      unsavedContent: "Toto"
    }
  ];
    
    return (
        <Styled.NavBar>
            {a.map(tab => <Tab tab={tab}></Tab>)}
        </Styled.NavBar>        
    )

}

const Tab = (props) => {

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
    <Styled.Tab data-active={props.tab.active}>
      <Styled.FileLabel data-fileType={getIconContent(props.tab.fileName)}>{props.tab.fileName}</Styled.FileLabel>
      <Styled.CloseButton role="button"/>
    </Styled.Tab>
  )
}

export default NavBar;