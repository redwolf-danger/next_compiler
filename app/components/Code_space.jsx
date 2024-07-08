"use client"
//todo: done server functions
import "./question_page.css";
import {useTheme} from "next-themes"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Code_Page from "./Code_Page";
import Blank from "./DOT";
import { useRef } from "react";
import Question_status from "./Question_status"

const Code_space = ({q_id,submit_to_API,question_details:{question_desc = (<div>QUESTION here ayega</div>),input_stream,output_stream,test_cases_display=<div>test cases ot be displayed here</div>,title},editor}) => {
  const {theme} = useTheme();
  theme = (theme=="light") ? "light" : "dark";
  const panel_div = useRef();
  let screen_width = window.innerWidth;
  console.log("screen_width ",screen_width);
  return (
    <>
    {screen_width>420 && !editor && (<div>
      <div style={{border: "2px solid", height:"100%"}}>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={40} collapsible={true} minSize={20} style={{backgroundColor:(theme=="dark" ? "#222831": "white")}}>
            {/* //todo: question rendered here */}
            <div><Question_status id={q_id}>{title}</Question_status></div>
            {question_desc}
          </Panel>
          <PanelResizeHandle
            onDragging={(dragging)=>{
            panel_div.current.classList.toggle("panel_div_"+theme+"_drag");
            }}
            tagName="div">
            <div
            ref = {panel_div}
            id = "panel_div"
            style={{width:"11px",height:"100%",backgroundColor:(theme == "dark" ? "#293133" :"whitesmoke") ,display:"flex", flexDirection:"column", gap:"3px",justifyContent:"center",alignItems:"center"}}>
              <Blank/>
              </div>
              </PanelResizeHandle>
          <Panel minSize={30}
          defaultSize={60}>
            <div>
              {/* //todo: submit test_details here */}
              <Code_Page q_id={q_id} submit_to_API={submit_to_API} input_stream={input_stream} output_stream={output_stream} test_cases_display={test_cases_display} editor={editor}/>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>)}
    {screen_width <=420 && !editor && (<div>
        <div style={{border: "2px solid", height:"100vh"}}>
          
              {/* //todo: question rendered here */}
              <div style={{height:"200px"}}>
                <Question_status id={q_id}>{title}</Question_status>
                {question_desc}
              </div>
              <div>
                {/* //todo: submit test_details here */}
                <Code_Page q_id={q_id} submit_to_API={submit_to_API} input_stream={input_stream} output_stream={output_stream} test_cases_display={test_cases_display} editor={editor}/>
              </div>
            
        </div>
      </div>)
    }
    {editor && <Code_Page q_id={10000} submit_to_API={submit_to_API} test_cases_display = {test_cases_display} editor={editor}/>}
    </>
  );

};

export default Code_space;
