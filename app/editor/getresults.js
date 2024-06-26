"use server"
export default async function getresults(){
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