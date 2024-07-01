"use client"
import React from 'react'
import Code_space from "../components/Code_space"
import handle from "../libs/handle"

const page = () => {
    let question_details = {};
    return (<>
        <div className='out_codespace' style={{height:"100%"}}>
            <Code_space submit_to_API={handle} question_details={question_details}/>
        </div>
    </>
    )
}

export default page
