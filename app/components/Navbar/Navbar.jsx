"use client"
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import { ClerkLoaded, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from "next/link";
import ImageAvatars from "../Avatar/Avatar" 
// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';




// import next from "next";
const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
          <ul className="mobiledrawer">
            {/* <li>Home</li>
            <li>Problems</li>
            <li>Compiler</li> */}
            <ListItem><ImageAvatars /> Orka</ListItem>
            <Divider/>
            {['Home', 'Problems', 'Compiler'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>))}
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
                <li><Link href={"/editor"}>Problems</Link></li>
                <li>Compiler</li>
              </ul>
            </li>
          </ClerkLoaded>

          <li>
            <SignedOut><SignInButton /></SignedOut>
            <SignedIn><UserButton /></SignedIn>
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
