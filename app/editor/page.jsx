"use client"
import React from 'react'
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Code_space from "../components/Code_space"
import handle from "../libs/handle"

const page = () => {
    let question_details = {};
    return (<>
        <div className='out_codespace' style={{height:"100%"}}>
            <Code_space submit_to_API={handle} question_details={question_details} editor={true}/>
        </div>
    </>
    )
}
export default page
