"use client"
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

import { ClerkLoaded, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import Link from "next/link";
import ImageAvatars from "../Avatar/Avatar" 

import ThemeSwitch from "../ThemeSwitch"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import {useTheme} from "next-themes"



// import next from "next";
const Navbar = () => {
  let {theme}=useTheme();
  theme = (theme=="dark") ? "dark" : "light";

    
    const [open, setOpen] = React.useState(false);
    // console.log("Navbar is",theme);
    // const ref = React.useRef(null);
    let color_details = {
      light:{
        img:"https://img.icons8.com/ios-glyphs/20/moon-symbol.png",
        bg_clr:"white",
        txt_clr:"black"
      },
      dark:{
        img:"https://img.icons8.com/ios/20/sun--v1.png",
        bg_clr:"black",
        txt_clr:"white"
      }
    }

    
    // const [color,setcolor] = React.useState(0);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // console.log("box properties are ",{bgcolor:color_details[theme].bg_clr,color:color_details[theme].txt_clr})

    const bgcolor = (color_details[theme].bg_clr);
    const color = (color_details[theme].txt_clr);

    const DrawerList = (
        <Box sx={{width: 300,bgcolor,color,height:1}} role="presentation" onClick={()=>{toggleDrawer(false)}}>
          {/* ,bgcolor:(color_details[theme].bg_clr),color:(color_details[theme].txt_clr) */}
          <ul className="mobiledrawer">
            {/* <li>Home</li>
            <li>Problems</li>
            <li>Compiler</li> */}
            <ListItem><ImageAvatars />Orka</ListItem>
            <Divider/>
            {/* {['Home', 'Problems', 'Compiler'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>)
          )} */}
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/problems"}>Problems</Link></li>
          <li><Link href={"/editor"}>Compiler</Link></li>

          </ul>
          <Divider/>
          
        </Box>
      );

    const LaptopNavbar = ( <nav className="navbar mobile_hidden">
        <ul className="logo-section_1">
          <li><ImageAvatars /></li>
          <li>Orka</li>
        </ul>

        <ul className="items-section">
          <ClerkLoaded>
            <li>
              <ul className="navbar-links">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/problems"}>Problems</Link></li>
                <li><Link href={"/editor"}>Compiler</Link></li>
              </ul>
            </li>
          </ClerkLoaded>

          <li>
            <SignedOut><SignInButton /></SignedOut>
            <SignedIn><UserButton /></SignedIn>
          </li>
          <li>
          <span style={{display:"flex",alignItems:"center",justifyContent:"center",height:'100%'}}><ThemeSwitch/></span>
          </li>
        </ul>
      </nav>) 
    const MobileNavbar =(<nav className="navbar mobile_show">
        
        <ul className="logo-section">
        <li><ImageAvatars /></li>
        <li style={{paddingTop:"4px",paddingLeft:"4px"}}>Orka</li>
      </ul>

    <span style={{display:"flex",gap:"10px"}}>
    <SignedOut><SignInButton/>
    </SignedOut>
    <span style={{margin:"10px"}}>
    <SignedIn><UserButton/></SignedIn>
    </span>
    <span style={{display:"flex",alignItems:"center",justifyContent:"center"}}><ThemeSwitch/></span>
    <Button style={{p:0,m:0,width:20}} onClick={toggleDrawer(true)}><MenuIcon fontSize="small"/></Button>
     </span>
    </nav>
      )

  return (
    <>
    {LaptopNavbar}
    {MobileNavbar}
    <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
         {DrawerList}
    </Drawer>
    </>
  )
}

export default Navbar



// export default function TemporaryDrawer() {
  

  

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>Open drawer</Button>
//       
//     </div>
//   );
// }
