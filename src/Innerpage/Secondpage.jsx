import React from "react";
import { useState } from "react";

function Secondpage() {
  const [response, setResponse] = useState("");
  
  async function callApi() {
    console.log("calling api");
    const response = await fetch(
      "https://ncrxeec2bkrhkaxm3dbdn7pjxi0cuupf.lambda-url.us-east-1.on.aws/"
    );
    const data = await response.json();
    setResponse(data);
    console.log(data);
  }
  return (
    <div>
        <h1 className="font-serif ">Resume Customization</h1>
       
        <button onClick={() => callApi()}>Call api</button>
        Response: {response}
      
    </div>
  )
}
export default Secondpage