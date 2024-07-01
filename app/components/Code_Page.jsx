// import * as React from 'react';
"use client"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Language_Select from './Language_Select';
import Editor_section from './Editor_section';
import Result_section from "./Result_section" 
import { useForm } from "react-hook-form";
import pre_written_code from '../constants/template';
import { useCallback, useRef, useState} from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { SignedIn,SignedOut } from '@clerk/nextjs';
import BasicPopover from "./BasicPopover";





const Code_Page = ({submit_to_API,input_stream,output_stream,test_cases_display,editor}) => {
      let ref = useRef(null);
      let language_prev = useRef("PYTHON3_8");
     

    const resize = useCallback(()=>{
      let panel = ref.current;
      if(panel){
        panel.resize(50);
      }
    },[ref]);
    

    const { register, handleSubmit, setValue,} = useForm({
        defaultValues: {
          code_area: "",
        },
      });
      console.log("^^^^^^^^^^^^^^^^^^rendering code_page^^^^^^^^^^^^^^^^^^^^^^^^^");

      const [lang_details,setlang_details] = useState({...pre_written_code[language_prev.current]});
      // const [lang_details,setlang_details] = useState({...pre_written_code["PYTHON3_8"]})
  
      const [run_details, change_run_details] = useState({type:"NA",content:"RUN CODE FIRST TO SEE THE RESULTS",state:0,res:false}); 
      console.log("run details is :",run_details);



      const onsubmit = async (data) => {
        console.log(data);
        if(data.code_area == "" || data.code_area == null){
          change_run_details({type:"FAILURE",content:"code space is empty",state:50,res:true});
          resize();
        }
        else{
        console.log("calling submit_to API");
        let final_ans = await submit_to_API(data.code_area,data.language,data.input);
        console.log("final ans is ", final_ans);
        //todo:starts

        if(!editor){
        //!!problems section
        if(final_ans.type == "Failure"){
          change_run_details({type:"Failure",content:final_ans.content,state:50,res:true});
        }
        else{
          let f1 = final_ans.content.replace(/\s/g, '');
          let o1 = output_stream.replace(/\s/g, '');

          if(final_ans.type != "Failure" && f1 === o1){
          change_run_details({type:final_ans.type,content:"success all test cases passed",state:50,res:true});
          }
          else{
          change_run_details({type:"Failure",content:"test_case_failed expected "+output_stream+" got "+final_ans.content,state:50,res:true});
          }
        }
        }
        else{
          //!!editor section
          change_run_details({type:final_ans.type,content:final_ans.content,state:50,res:true});
        }
        //todo: ends
        resize();
        }
      };

      let props_for_select = { ...register("language")};
      //todo:starts
      let props_for_input = { ...register("input")};
      setValue("input",input_stream);
      //todo: ends
      const handleEditorChange = useCallback((value)=>{
        // console.log("setting the value to: ", value);
        setValue("code_area", value);
      },[setValue])

      const lang_change = useCallback((lang)=>{
        language_prev.current = lang;
        setlang_details({...pre_written_code[lang]})
      },[])
      setValue("language",language_prev.current);

  return (
    <div style={{padding:"0px", backgroundColor:"whitesmoke"}}>
    <form onSubmit={handleSubmit(onsubmit)}>
    <Box sx={{display: "flex", gap:"5px",padding:"5px", paddingLeft:"0px" }}>
    <Language_Select props_for_select={props_for_select} lang_change={lang_change}/>
    <Button size="small" variant="text" sx={{color:"#979797", textTransform: 'none',fontWeight:"200",'&:hover':{
        backgroundColor:"#f1f1f1" 
    }}}>Autocomplete</Button>
    </Box>

    <PanelGroup direction='vertical' style={{height:"80vh"}}>
    <Panel defaultSize={100}>
   <Editor_section handleEditorChange={handleEditorChange} comment={lang_details.comment} Language={lang_details.lang}/>
    </Panel>
    <PanelResizeHandle/>
    

    <Panel ref={ref} defaultSize={run_details.state}>
      {/* remove max size window */}
      <Result_section type={run_details.type} result={run_details.content} res={run_details.res} test_cases_display={test_cases_display} />
    </Panel>
   
    <Box sx={{display: "flex", gap:"5px",padding:"5px"}}>
      <SignedIn>
    <Button
          size="small"
          color="secondary"
          type="submit"
          component="button"
          disableElevation
          variant="contained"
          onClick={(e) => {
            e.target.blur();
            
            // handleSubmit(onsubmit)();
          }}
        >
          Submit
    </Button>
    <Button
          size="small"
          color="secondary"
          component="button"
          variant="contained"
          onClick={(e) => {
            e.target.blur();
            // e.preventDefault();

            let panel = ref.current;
            let size = panel.getSize();
            console.log("######PANEL SIZE IS#######: ",size);
            if(size == 0){
              panel.resize(50);
            }
            else{
              panel.resize(0);
            }
            
            
            // handleSubmit(onsubmit)();
          }}
        >
          Result
    </Button>
    </SignedIn>
    <SignedOut>
      <BasicPopover/>
    </SignedOut>
    </Box>
    
    </PanelGroup>
    </form>
    </div>
  );
}

export default Code_Page

