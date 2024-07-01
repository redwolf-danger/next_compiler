"use client"
import React from 'react'
import Code_space from "../../components/Code_space"
import handle from "../../libs/handle"
// import question_list from "../../question_list/question_list"
import {question_list} from "../../question_list/question_list"

const page = ({params}) => {
    
    //todo starts
    console.log("params.id is ",params.id);
    console.log("question_details is ", question_list)
    let question_details = question_list[`${params.id}`];
    //todo ends
    return (<>
        <div className='out_codespace' style={{height:"100%"}}>
            <Code_space submit_to_API={handle} question_details={question_details} editor={false}/>
        </div>
    </>
    )
}

export default page
