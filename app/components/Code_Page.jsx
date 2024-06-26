// import * as React from 'react';
"use client"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Language_Select from './Language_Select';
import Editor_section from './Editor_section';
import { useForm } from "react-hook-form";
import pre_written_code from '../constants/template';
import {useState} from 'react';


const Code_Page = ({submit_to_API}) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
          code_area: "",
        },
      });
      console.log("rendering code_page")

      const [lang_details,setlang_details] = useState({...pre_written_code["PYTHON3_8"]})
      
      // console.log("lang_details.lang is ", lang_details.lang);
      // console.log("lang_details.comment is ", lang_details.comment);


      const onsubmit = (data) => {
        console.log(data);
        console.log("calling submit_to API");
        submit_to_API(data.code_area,data.language);
      };

      let props_for_select = { ...register("language") };

      const handleEditorChange = (value)=>{
        // console.log("setting the value to: ", value);
        setValue("code_area", value);
      }
      function lang_change(lang){
        // console.log('called lang_change from code_page with language ',lang);
        // console.log("changing lang_details from ", lang_details,"to");
        // console.log(pre_written_code[lang])
        setlang_details({...pre_written_code[lang]})
      }
      setValue("language","PYTHON3_8");

  return (
    <div style={{padding:"0px", backgroundColor:"whitesmoke"}}>
    <form onSubmit={handleSubmit(onsubmit)}>

    <Box sx={{display: "flex", gap:"5px",padding:"5px", paddingLeft:"0px" }}>
    <Language_Select props_for_select={props_for_select} lang_change={lang_change}/>

    <Button size="small" variant="text" sx={{color:"#979797", textTransform: 'none',fontWeight:"200",'&:hover':{
        backgroundColor:"#f1f1f1" 
    }}}>Autocomplete</Button>
    </Box>
    <Editor_section handleEditorChange={handleEditorChange} comment={lang_details.comment} Language={lang_details.lang}/>
    <Box sx={{display: "flex", gap:"5px",padding:"5px"}}>
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
    </Box>
    </form>
    </div>
  );
}

export default Code_Page

