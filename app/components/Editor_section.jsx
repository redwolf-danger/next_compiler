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
  const defaultLanguage = "python";
  // console.log("rendering editor again\n");
  // console.log("comment in editor is : ",comment);
  // console.log("lang in editor is ", Language);
  // const [editor_theme,set_editor_theme] = useState("vs-light")
  if(monaco_ref != null){
    // if(theme == "dark"){
      // console.log("say the theme is ",theme);
      
      
    // };
    // console.log("monaco ref is ",monaco_ref.current);
    // console.log("editor ref is ",editor_ref.current);
    
    (monaco_ref.current)?.editor.setModelLanguage(editor_ref.current.getModel(), Language);
    
  }

  function handleEditorDidMount(editor,monaco){
    monaco_ref.current = monaco;
    editor_ref.current = editor;
    // (monaco_ref.current)?.editor.defineTheme("editor_dark_theme",{
    //   base: 'vs', 
    //   inherit: true,
    //   rules: [
    //     { token: 'custom-info', foreground: 'a3a7a9', background: 'ffffff' },
    //     { token: 'custom-error', foreground: 'ee4444' },
    //     { token: 'custom-notice', foreground: '1055af' },
    //     { token: 'custom-date', foreground: '20aa20' },
    //   ]
    // });
    // editor.defineTheme("editor_dark_theme",editor_dark_theme);
    // editor_ref.setTheme("dark");
    // console.log("added monaco and editor refernces!!!");
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