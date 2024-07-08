"use client"
import Editor from "@monaco-editor/react";
import { useRef } from "react";
import { memo } from "react";
import {useTheme} from "next-themes"



const Editor_section = memo(function Editor_section({handleEditorChange,comment,Language}){

  // const Editor_main_section = (handleEditorChange,comment,Language)=>{
    console.log("@@@@@@@@@@@ EDITOR RERENDERING @@@@@@@@@@@@@@@@@@");
  let monaco_ref = useRef(null);
  let editor_ref = useRef(null);
  const {theme} = useTheme();
  theme = (theme=="light") ? "light" : "dark";
  const defaultLanguage = "python";

  if(monaco_ref != null){ 
    (monaco_ref.current)?.editor.setModelLanguage(editor_ref.current.getModel(), Language);
    
  }

  function handleEditorDidMount(editor,monaco){
    monaco_ref.current = monaco;
    editor_ref.current = editor;
  }
  //todo: opens
  handleEditorChange(comment);
  //todo: closes
  

 

  return (
    <div style={{border:"1px solid grey",borderRight:"0px", borderRadius:"2px", height:"80vh"}}>
    <Editor
      height="80vh"
      defaultLanguage={defaultLanguage}
      language={Language}
      defaultValue={comment}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      path={Language}
      options={{
        quickSuggestions: false,
        scrollBeyondLastLine: false,
        wordWrap:"on"
      }}
      theme={"vs-"+theme}
    />
  </div>
  )
}
)


export default Editor_section