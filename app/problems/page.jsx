"use client"
import React from 'react'
import Code_space from "../components/Code_space"
import handle from "../libs/handle"

const page = () => {
    let question_details = {testcases:{input:"1 2 3 4 5 6 7 8 9 10"}};
    return (<>
        <div className='out_codespace' style={{height:"100%"}}>
            <Code_space submit_to_API={handle} question_details={question_details} editor={false}/>
        </div>
    </>
    )
}

export default page
