import React, { useState } from "react";

const GenerateCaptcha = () => {
  const [captcha, setCaptcha] = useState("");

  const generatecaptchacode = () => {
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += letters[Math.floor(Math.random() * 62)];
    }
    return code;
  };

  let handleGenerate = () => {
    let newcaptchacode = generatecaptchacode();
    setCaptcha(newcaptchacode);
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
      <h3 style={{fontStyle : "oblique"}}>Click Button to generate captcha code</h3>
      <button
        onClick={handleGenerate}
        style={{ fontSize: "25px", marginLeft: "30px" ,display : "block"}}
      >
        Captcha
      </button>
      
        
        <h4
          style={{
            border: "2px solid black",
            display: "inline-block",
            height: "50px",
            width: "400px",
          }}
        >
         Captcha Code : {captcha}
        </h4>
      
    </div>
    </div>
  );
};

export default GenerateCaptcha;
