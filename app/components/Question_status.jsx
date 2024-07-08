"use client"
import React from 'react'
import {useTheme} from "next-themes"
import { IconContext } from "react-icons";
import { TiTick } from "react-icons/ti";
import { FiTarget } from "react-icons/fi";

const Question_status = ({id,children}) => {
    let status = localStorage.getItem(`${id}_status`); 
    let {theme} = useTheme();
    console.log("current_theme new  is ",theme);
    let icon;
    let color;
    if(status == 1){
        icon= <FiTarget/>   
        color = "#FFD800"
    }
    else if(status == 2){
        icon = <TiTick/>
        color = "green"; 
    }
    // console.log()
  return (
    <>
    <span style={{display:"flex", justifyContent:"space-around",height:"24px",color:color}}>
        <span style={{width:"70%",overflow:"hidden"}}>{id} <b>{children}</b></span>
        <span style={{width:"24px"}}>
        {status &&  <IconContext.Provider value={{color, className: "global-class-name" }}>
          <div>
              {icon}
          </div>
          </IconContext.Provider> }
        </span>
        {/* <img style={{display:"inline"}} width={"24"} height={"24"} src={status_link} alt="pen"/> */}
    </span>
    </>
  )
}

export default Question_status
