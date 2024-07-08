"use client"
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import { ClerkLoaded, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from "next/link";
import ImageAvatars from "../Avatar/Avatar" 
// import * as React from 'react';
import ThemeSwitch from "../ThemeSwitch"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { Visibility } from "@mui/icons-material";



// import next from "next";
const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    // console.log("page theme is",Navbar.theme);
    // const ref = React.useRef(null);
    let color_details = {
      0:{
        img:"https://img.icons8.com/ios-glyphs/20/moon-symbol.png",
        bg_clr:"white",
        txt_clr:"black"
      },
      1:{
        img:"https://img.icons8.com/ios/20/sun--v1.png",
        bg_clr:"black",
        txt_clr:"white"
      }
    }
    
    const [color,setcolor] = React.useState(0);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handlethemechange = ()=>{
        console.log("theme is now" ,(color == 0 ? "black": "white"));
        // console.log("ref value is now",ref.current.value);
        setcolor(!color);
        //acces data using color_detials etc..
    };

    const DrawerList = (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
          <ul className="mobiledrawer">
            {/* <li>Home</li>
            <li>Problems</li>
            <li>Compiler</li> */}
            <ListItem><ImageAvatars /> Orka</ListItem>
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
        <ul className="logo-section">
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
        <li>Orka</li>
      </ul>

    <span>
    <SignedOut><SignInButton/></SignedOut>
    <span style={{position:"relative", top:"10px"}}>
    <SignedIn><UserButton /></SignedIn>
    </span>
    <Button onClick={toggleDrawer(true)}><MenuIcon sx={{ml:1}} fontSize = "small"/></Button>
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
