"use client"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

const Result_section = ({result,type,res,test_cases}) => {
  //todo modify test cases starts

/*Object.keys(value.input).map((input_key)=>{
          return value.input[input_key]
      }) */

 
  // let display_length = <>
  // <div>
  //   {test_cases.length}
  // </div>
  // </>


  let display_test = 
  test_cases.length == 0 ? (<>NO TEST CASES</>) : (<>
  <div style={{backgroundColor:"whitesmoke", padding:"5"}}>
  {test_cases.length}
  </div>
  <div className="inputs_holder">
  {
    test_cases.map((value)=>{
      return (<>
      <div style={{backgroundColor:"white", padding:"5"}}>
        
        {value.input}
      </div>
      <div style={{backgroundColor:"whitesmoke", padding:"5"}}>
        {value.output}
      </div>
      </>)
    })
  }
  </div>
  </>)
      //inputs in white and ouput sin whitesmoke





  console.log("########## display_object is : ",display_test);
  //todo modify test cases ends
  const [result_open,set_result_open] = useState(res);
  useEffect(() => {
    console.log("processing res");
    set_result_open(res);
  }, [res])

  
  
  console.log("rerendering result section");
  console.log("res is ", res);
  console.log("result is ", result);
  console.log("type is ", type);

  

    console.log("result_open is ", result_open);
    console.log("result is ",result);
    console.log("type is ",type);

  return (
  <div style={{backgroundColor:"white", height:"100%",color:"black"}}>
    <div style={{padding:"5px",display:"flex",backgroundColor:"#f2f2ed",border:"1px solid grey", borderTop:"none"}}>
    <Button
          size="small"
          color="secondary"
          component="button"
          variant="text"
          onClick={(e) => {
            set_result_open(false);
          }}
        >
          <b>
          TESTS
          </b>
    </Button>
    <Button
          size="small"
          color="secondary"
          component="button"
          variant="text"
          onClick={(e) => {
            set_result_open(true);
          }}
        >
          <b>
          RESULTS
          </b>
    </Button>
    </div>
    <div style={{padding:"5px",height:"100%"}}>
    {result_open && <>{result}</>}
    {!result_open && <>

    {/* test_case_page */}
    {/* //todo starts */}
    {/* <BaseTextareaAutosize minRows={6}  maxRows={6} placeholder="Maximum 4 rows" defaultValue={"write your tests here"}/>
     */}
     {display_test}
     {/* <textarea {...props_for_tests} style={{height:"100%",width:"100%",resize:"none"}} onClick={(e)=>{}} placeholder="WRITE YOUR TESTS HERE" value = {display_test}/> */}
      {/* //todo: test_cases->display_test */}
    {/* //todo ends */}
    
    
    </>}
    </div>
  </div>
  )
}
export default Result_section
