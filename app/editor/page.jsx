"use client"
import React from 'react'
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Code_space from "../components/Code_space"
import handle from "./handle"
import getresults from "./getresults"

const page = () => {
    let response;
    let GET_URL;
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    const POST_URL = process.env.POST_URL

    return (<>
        <div>
            <Code_space/>
        </div>
  
        <div style={{backgroundColor: "greenyellow"}}>
          <button onClick ={getresults}>Click me to get results </button>
        </div>
    </>
    )
}

export default page
