import React, { useState } from "react";

const GenerateOtp = () => {
  const [otp, setOtp] = useState("");

  const generateotp = () => {
    let code = [Math.floor(Math.random() * 1000000)];

    return code;
  };

  let handleGenerate = () => {
    let newotp = generateotp();
    setOtp(newotp);
  };

  return (
    <div style={{paddingTop : "80px",  backgroundColor : "#F0FFF0" , paddingBottom : "100px"}}>  
    <div
      style={{
        border: "2px solid black",
        textAlign: "center",
        marginLeft: "200px",
        marginRight: "200px",
        marginBottom: "50px",
       backgroundColor : "#F7F7F7"
      }}
    >
      <h3 style={{fontStyle : "oblique"}}>Click Button to generate Six Digit OTP</h3>
      <button
        onClick={handleGenerate}
        style={{ fontSize: "30px", marginLeft: "30px",display : "block" }}
      >
        OTP
      </button>
      
        
        <h4
          style={{
            border: "2px solid black",
            display: "inline-block",
            width: "300px",
            height : "45px",
            textAlign: "center",
          }}
        >
         OTP : {otp}
        </h4>
      
    </div>
    </div>
  );
};

export default GenerateOtp;
