import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";
import { useRef } from "react";

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
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
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