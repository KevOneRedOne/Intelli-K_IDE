import React, { useState } from "react";
import * as Styled from "./FileExplorer.style.js";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";

const FILE_ICONS = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  jsx: <DiReact />
};


const File = ({ name }) => {
  let ext = name.split(".")[1];

  return (
    <Styled.File>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </Styled.File>
  );
};

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Styled.Folder>
      <div className="folder--label" onClick={handleToggle}>
        <AiOutlineFolder />
        <span>{name}</span>
      </div>
      <Styled.Collapsible isOpen={isOpen}>{children}</Styled.Collapsible>
    </Styled.Folder>
  );
};

const Tree = ({ children }) => {
  return <Styled.Tree>{children}</Styled.Tree>;
};

Tree.File = File;
Tree.Folder = Folder;

const FileExplorer = () => {
    // const { currentFile } = useContext();
    const a = [
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
      ];
    
    return (
      <Tree>
        <Tree.Folder name="src">
          <Tree.Folder name="Components">
            <Tree.File name="Modal.js" />
            <Tree.File name="Modal.css" />
          </Tree.Folder>
          <Tree.File name="index.js" />
          <Tree.File name="index.html" />
        </Tree.Folder>
        <Tree.File name="package.json" />
      </Tree>      
    )

}

export default FileExplorer;