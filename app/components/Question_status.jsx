"use client"
import React from 'react'
import {useTheme} from "next-themes"
import { IconContext } from "react-icons";
import { TiTick } from "react-icons/ti";
import { FiTarget } from "react-icons/fi";

const Question_status = ({id,children}) => {
    let status = localStorage.getItem(`${id}_status`); 
    let {theme} = useTheme();

    let icon;
    let color = theme=="dark"?"white":"black";
    let theme_bg_color = (theme=="dark" ? "#344955":"#FFF8F3")

    if(status == 1){
        icon= <FiTarget/>   
        color = "#FFB200"
    }
    else if(status == 2){
        icon = <TiTick/>
        color = "green"; 
    }

  return (
    <>
    <span style={{display:"flex", justifyContent:"space-around",height:"40px",color:color, border:`2px solid ${color}`,padding:"5px",borderRadius:"5px",backgroundColor:theme_bg_color}}>
        <span style={{width:"70%",overflow:"hidden"}}>{id} <b>{children}</b></span>
        <span style={{ display:"flex", justifyContent:"center", alignItems:"center",width:"24px"}}>
        {status &&  <IconContext.Provider value={{color, className: "global-class-name" }}>
          <div>
              {icon}
          </div>
          </IconContext.Provider> }
        </span>
    </span>
    </>
  )
}

export default Question_status
