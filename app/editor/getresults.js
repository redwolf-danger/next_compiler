"use server"
export default async function getresults(GET_URL){
    const CLIENT_SECRET = process.env.CLIENT_SECRET
    console.log('button for results clicked\n');
    let headers = {
          "Content-Type": "application/json",
          "client-secret": CLIENT_SECRET
    };

    let executing  = true;
  // async function getans(){
  // }
  const get_f = async ()=>{

    try{
  let res = await fetch(GET_URL, {
        method: "GET", // or 'PUT'
        headers: headers
      });
      let final_show = await res.json();
      console.log("----Final Show is ----\n:", final_show);
      console.log('-------------');

      let {request_status:{code},result:{compile_status,run_status:{output}}}= final_show;
      console.log("code is ", code);
    
      if(code === "REQUEST_COMPLETED" || compile_status !== "OK"){
        clearInterval(clr_interval);
        executing = false;
        console.log("@@@@@@@@@@@@@ ----DONE----@@@@@@@@@@@@");
        //todo starts

        //do something with the err or status url
        if(output){
          let result_link = output;
          console.log("result_link is ",result_link);
          //!!make fetch requests here
          let data = await fetch(result_link);
          let res = await data.text();
          console.log("res is ",res);
        }else{
          console.log("error at ",compile_status);
        }
        // let data = await fetch();
        // let res = await data.text();
        // console.log("result is ", ) 
        //todo ends
      }
    }
    catch(error){
      clearInterval(clr_interval);
      console.log("-!!!!!!Final Show Error is: ",error);
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      
    } 
  }

  var clr_interval = setInterval(get_f, 2000);
  setTimeout(() => {
    if(executing){
    console.log("clearing interval");
    clearInterval(clr_interval);
    }
  }, 30000);
}