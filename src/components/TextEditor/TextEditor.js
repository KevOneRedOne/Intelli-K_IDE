import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";
import { useRef, useEffect, useState } from "react";
// import fs from "fs";


loader.config({ monaco });
monaco.editor.defineTheme('Purple-Theme', {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#161225',
    },
});

// const LoadFileInEditor = async (filePath, editor) => {  
//     try {
//         const fileContent = await fs.readFile(filePath, 'utf-8');
//         editor.setValue(fileContent);
//     } catch (err) {
//         console.error(err);
//     }
// }

const TextEditor = () => {
    const [filePath, setFilePath] = useState(null);
    // const [fileContent, setFileContent] = useState(null);
    const editorRef = useRef(null);

    useEffect(() => {
        if (filePath) {
            // LoadFileInEditor(filePath, editorRef.current);
            console.log("filePath: ", filePath);
        }
    }, [filePath]);

    const handleEditorDidMount = (editor, monaco) => {
      editorRef.current = editor; 
    }

    return (
        <>
            <Editor
                height="96.9vh"
                defaultLanguage="javascript"
                defaultValue="function helloWorld() {console.log('Tu vas bosser merde ?')}"
                onMount={handleEditorDidMount}
                theme="Purple-Theme"
            />
        </>
    );
}

export default TextEditor;