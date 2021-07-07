import React, { useEffect, useState } from "react";
import db from "./fire";
import "../components/Employee.css";

function Employee() {
  const [empArray, setempArray] = useState([]);
  const [userArray, setuserArray] = useState([]);
  let empData = [];
  useEffect(() => {
    getEmployeeData();
  }, []);

  const getEmployeeData = async () => {
    await db
      .collection("EmployeeData")
      .get()
      .then((res) =>
        res.docs.forEach((doc) => {
          empData.push({
            id: doc.id,
            empName: doc.data().employeeName,
            compLocation: doc.data().companyLocation,
          });
        })
      );
    setempArray(empData);
  };

  const addData = async (e) => {
    e.preventDefault();
    try {
      await db.collection("EmployeeData").doc().set({
        employeeName: userArray.empName,
        companyLocation: userArray.compLocation,
      });
    } catch (error) {
      console.log(error);
    }

    window.location.reload();
  };


  const deleteRecord = async (id) => {
    console.log('deleted',id)
     await db.collection('EmployeeData').doc(id).delete();
    window.location.reload();
  };

  return (
    <div id="main-container">
      <h1 className="display-4 mb-5" id="txt">
        Employee List
      </h1>
      <div className="container" id="sub-container">
        <form>
          <div className="row mb-5" id="first-row">
            <div className="col-5">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="empName"
                  placeholder="Enter Employee Name"
                  onChange={(e) =>
                    setuserArray({ ...userArray, empName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-5">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="companyLocation"
                  placeholder="Enter Company Location"
                  onChange={(e) =>
                    setuserArray({ ...userArray, compLocation: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-2">
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  style={{backgroundColor:'palevioletred', borderRadius:'5px',border:'none',color:'black'}}
                  type="submit"
                  onClick={addData}
                >
                  <strong> Add +</strong>
                </button>
              </div>
            </div>
          </div>
        </form>
        {empArray.map((data) => {
          return (
            <div key={data.id} className="row mb-2 pb-2" id="first-row">
              <div
                className="col-5"
                style={{ display: "flex", fontWeight: "bold"}}
              >
                {data.empName}
              </div>
              <div
                className="col-5"
                style={{ display: "flex", fontWeight: "bold" }}
              >
                {data.compLocation}
              </div>
              <div className="col-2">
                <button
                  id="cross-btn"
                  type="submit"
                  onClick={() => deleteRecord(data.id)}
                >
                  <strong><i class="fa fa-trash"></i></strong>
                </button>
              </div>
             
              {/* <i class="fas fa-edit"></i> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Employee;
