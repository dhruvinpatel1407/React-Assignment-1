import { React } from "react";
import employee from "./data.json";
import { useParams } from "react-router-dom";

function Employeedata() {
  const params = useParams();
  console.log(params);
  const filteredData = employee.filter(
    (employee) => employee.id == params.employee_id
  );
  return (
    <div style={{ paddingTop: "70px" }}>
      {filteredData.map((employee) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#F0FFF0",
                color:"#4D4D4D"
              }}
            >
              <div
                style={{
                  width: "350px",
                  padding: "20px",
                  border: "1px solid gray",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#F7F7F7",
                  textAlign: "center",
                  margin: "20px",
                }}
              >
                
                <h3
                  style={{
                    
                    fontSize: "25px",
                    marginBottom: "10px",
                  }}
                >
                <strong> Name :</strong>  {employee.firstname} {employee.lastname}
                </h3>
                <p style={{fontSize: "18px", margin: "5px 0" }}>
                  <strong>Employee Id:</strong> {employee.id}
                </p>
                <p style={{fontSize: "18px", margin: "5px 0" }}>
                  <strong>Birth-Date:</strong> {employee.birthDate}
                </p>
                <p style={{fontSize: "18px", margin: "5px 0" }}>
                  <strong>Email:</strong> {employee.email}
                </p>
                <p style={{fontSize: "18px", margin: "5px 0" }}>
                  <strong>Phone:</strong> {employee.phone}
                </p>
                <p style={{fontSize: "18px", margin: "5px 0" }}>
                  <strong>Website:</strong>{" "}
                  <a
                    href={`http://${employee.website}`}
                    target="_blank"
                    rel="weblink"
                    style={{ color: "#007bff", textDecoration: "none" }}
                  >
                    {employee.website}
                  </a>
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    borderTop: "1px solid #ddd",
                    paddingTop: "10px",
                    color: "#333",
                  }}
                > 
                  <h5 style={{fontSize :"23px", margin: "10px 0" }}><strong>Company Name :</strong> {employee.company.name}</h5>
                  <p style={{ fontStyle: "italic",fontSize :"18px"}}>
                    {employee.company.catchPhrase}
                  </p>
                  <p style={{ fontWeight: "bold",fontSize :"18px"}}>
                    Business: {employee.company.bs}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Employeedata;
