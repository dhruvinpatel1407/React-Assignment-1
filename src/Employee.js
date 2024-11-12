import React from "react";
import {Link} from "react-router-dom" 
import data from "./data.json"
const Employee = () => {

  return (
    <div
      id="empdata"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingTop : "70px",
        backgroundColor : "#F0FFF0"
      }}
    >
      {data.map((emp) => {
        return (
          <div
            id={emp.id}
            style={{
              width: "20%",
              border: "1px solid Black",
              borderRadius : "5%",
              margin: "10px",
              padding: "15px",
              textAlign: "center",
              backgroundColor : "#F7F7F7"
            }}
            
          >
            <Link to={`/employee/${emp.id}`}>
            <img
              src="/images.jpeg"
              alt="Profile"
              width={"150px"}
              height={"150px"}
            />
            <p style={{ margin: "5px", fontSize: "30px" }}>{emp.firstname}</p>
            </Link>
            
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
