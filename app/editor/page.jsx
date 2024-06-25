"use client"
import React from 'react'
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Code_space from "../components/Code_space"

const page = () => {
    let response;
    let GET_URL;
    const CLIENT_SECRET = "e84a68609587368e830a82b43ec8d53f1c037cf5";
    const POST_URL = 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/';
    const code_generated = {raw:[`print(1) print(2) print(3) print(4) print(5)`]}
    const code_passed =  String.raw(code_generated);
  
    async function handle(passed) {
      console.log('button clicked\n');
      console.log("passed string is ", passed);
      const data = {    
        'source': passed,
        'lang': "PYTHON",
        'time_limit': 5,
        'memory_limit': 246323
    };
      try {
  
        response = await fetch(POST_URL, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            "client-secret": CLIENT_SECRET
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
        console.log("Success:", result);
        
        GET_URL = result.status_update_url;
        console.log('Get url is now ',GET_URL,"\n");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  
    async function getresults(){
      console.log('button for results clicked\n');
      let headers = {
            "Content-Type": "application/json",
            "client-secret": CLIENT_SECRET
      };
      
    const get_f = async ()=>{
      try{
    let res = await fetch(GET_URL, {
          method: "GET", // or 'PUT'
          headers: headers
        });
        let final_show = await res.json();
        console.log("----Final Show is ----\n:", final_show);
        console.log('-------------');
  
      }
      catch(error){
        clearInterval(clr_interval);
        console.log("-!!!!!!Final Show Error is: ",error);
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        
      } 
    }
  
    var clr_interval = setInterval(get_f, 2000);
    setTimeout(() => {
      console.log("clearing interval");
      clearInterval(clr_interval);
    }, 30000);
  }
  
    // async function handle_local(){
  
    //     axios.post('http://localhost:3000/coderesult',{
    //       firstName: 'Fred',
    //       lastName: 'Flintstone'
    //     })
    //     .then(function (response) {
    //       console.log("LH: response was " ,response.data);
    //     })
    //     .catch(function (error) {
    //       console.log("LH: error was ",error);
    //     });
    // }
  
  
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
