"use client"
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

import { ClerkLoaded, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
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
  const {theme}=useTheme();
    const [open, setOpen] = React.useState(false);

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

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: 300,bgcolor:color_details[theme].bg_clr,color:color_details[theme].txt_clr,height:1}} role="presentation" onClick={toggleDrawer(false)}>
          <ul className="mobiledrawer">
       
            <ListItem><ImageAvatars />Orka</ListItem>
            <Divider/>
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
