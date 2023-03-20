import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";
import { useRef, useEffect, useState, useContext } from "react";
import OpenedFilesContext from '../../helpers/OpenedFilesContext.js';
// import FilesFunctions from '../../helpers/FilesFunctions.js';

loader.config({ monaco });
monaco.editor.defineTheme('Purple-Theme', {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#161225',
    },
});


const TextEditor = () => {
    const { activeTab } = useContext(OpenedFilesContext);
    const [filePath, setFilePath] = useState(null);
    const [fileContent, setFileContent] = useState(null);
    const editorRef = useRef(null);

    useEffect(() => {
        if (filePath) {
            // LoadFileInEditor(filePath, editorRef.current);
            console.log("filePath: ", filePath);
        };
        console.log(activeTab)
        if(editorRef && editorRef.current && editorRef.current.value) editorRef.current.setValue(activeTab)
    }, [filePath, activeTab]);

    const handleEditorDidMount = (editor, monaco) => {
      editorRef.current = editor;
    }

    const SaveData = () => {
        alert(editorRef.current.getValue());
        // setFileContent(editorRef.current.getValue());
    }

    return (
        <>
            <button onClick={SaveData}>Save</button>
            <Editor
                height="96.9vh"
                defaultLanguage="javascript"
                // defaultValue={activeTab}
                defaultValue="function main() {console.log('Hello World!');}"
                onMount={handleEditorDidMount}
                theme="Purple-Theme"
                // onChange={handleEditorDidMount}
            />
        </>
    );
}


export default TextEditor;