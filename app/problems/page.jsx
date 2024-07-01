import React from 'react'
import { question_list } from '../question_list/question_list'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <ul>
      {
        Object.keys(question_list).map((value)=>{
          return <li key={value}><Link href= {`./problems/${value}`}>question_list[value].title</Link> question_list[value].status</li>
        })
      }
      </ul>
    </div>
  )
}

export default page
