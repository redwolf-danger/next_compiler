"use server"
//todo: make it server functions
export async function handle(passed) {
    console.log('button clicked\n');
    console.log("passed string is ", passed);
    const data = {    
      'source': passed,
      'lang': "PYTHON",
      'time_limit': 5,
      'memory_limit': 246323
    };
    //todo: validate data? no need as provided inputs on the front end  
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