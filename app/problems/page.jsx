import React from 'react'
import { question_list } from '../question_list/question_list'
import Link from 'next/link'
import Question_status from "../components/Question_status"


const Page = () => {
  
  console.log("hello world")
  return (
    <div>
      {/* <div>hello wolrld Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam accusamus eaque doloribus rem nisi deleniti quasi alias, cum ullam ipsa quaerat et!</div> */}
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}><h1 style={{ fontSize:"2.5rem"}}><b>PROBLEMS</b></h1></div>
      <ul style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",justifyContent:"flex-start",height:"75vh"}}>
        {/*  */}
        {/* ,flexDirection:"column",alignItems:"center",*/}
      {
        Object.keys(question_list).map((value)=>{
          return <li style={{width:"60vw"}} key={value}><Question_status id={value}><Link href={`./problems/${value}`}>{question_list[value].title}</Link></Question_status></li>
        })
      }
      </ul>
    </div>
  )
}

export default Page
