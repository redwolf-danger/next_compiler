"use client"
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from 'react';
import langs from "../constants/langs";
import { memo } from "react";

const Language_Select = memo(function Language_Select({q_id,props_for_select,lang_change}){
    // console.log("%%%%%%%%%%%%%% Language Rerendering %%%%%%%%%%%%%%%%%%%%%%5")
    // console.log("new language is ",localStorage.getItem(`${q_id}_lang`) || "PYTHON3_8");
    let [code_language, set_code_language] = useState( localStorage.getItem(`${q_id}_lang`) || "PYTHON3_8");
    let sel = useRef(null);

    function handle_lang_change(event){
        
        set_code_language(()=>event.target.value)
        lang_change(event.target.value);
     
      }
      useEffect(() => {
        // console.log("changin language to ",localStorage.getItem(`${q_id}_lang`) || "PYTHON3_8");
        set_code_language(localStorage.getItem(`${q_id}_lang`) || "PYTHON3_8");
        lang_change(localStorage.getItem(`${q_id}_lang`) || "PYTHON3_8");
      }, [])
      
 
  return (
    <Box >
 
    <FormControl size = "small">

      <Select 
       sx={{height: 30,width: 130,color:"grey"}}
      {...props_for_select}
      ref = {sel}
        defaultValue="Python 3.8"
        id="demo-simple-select"
        value={code_language}
     
        onClose={() => {
          sel.current.classList.remove('Mui-focused');
          sel.current.previousSibling?.classList.remove('Mui-focused');
         }}
        onOpen={() => {
          sel.current.classList?.add('Mui-focused');
            sel.current.previousSibling?.classList.add('Mui-focused');
          }}

        onChange={
          handle_lang_change
      }
      >
      {
        langs.map((obj)=>{return (<MenuItem key={obj.language_argument} value={obj.language_argument}>{obj.language}</MenuItem>
        )})
      }
      </Select>
    </FormControl>
  </Box>
  )
})

export default Language_Select
