import React, { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { makeStyles } from '@material-ui/core/styles';
import QRCode from "qrcode.react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Button, Container } from "@material-ui/core";
import {Select} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";
const API_URL = "http://localhost:3001";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {


  const [vname, SetVname] = useState([]);
  const [vnum, SetVnum] = useState([]);
  const [distance, SetDistance] = useState([]);
  const [Sex, SetSex] = useState([]);
  const [Age, SetAgeG] = useState([]);
  const [District, SetDistrict] = useState([]);
  const [Discipline, SetDiscipline] = useState([]);
  const [Yes, SetYes] = useState(true);
  const [No, SetNo] = useState(false);
  const [expense, SetExpense] = useState([]);
  const [checking,Setchecking] = useState(false)
  const [ButtonChecker,SetButtonCheck] = useState(false)
  const [mileage, SetMileage] = useState([]);
  
  const courses = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli",
  "Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","MumbaiCity","MumbaiSubUrban","Nagpur","Nanded","Nandurbar","Nashik",
  "Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim"
  ,"Yavatmal"]

  const classes = useStyles();

  const Calculate = async (e) => {
    SetButtonCheck(true);
    const check = ActualCalculate();
    Setchecking(check);


    if (checking) {
      //Normal Add To List
      let response = await axios.post(`${API_URL}/api/vehicleexpense`, {

        name: vname,
        dob: vnum,
        AgeGroup: Age,
        Sex: Sex,
        AddList: Yes,
        District: District,
        Discipline: Discipline
      });
      console.log(response)
      if (response.data.success == true) {
        alert("Record Saved Successfully")
        SetVname("");
        SetVnum("");
        SetSex("");
        SetAgeG("");
        SetDistrict("");
        SetDiscipline("");
        SetYes("");
        SetButtonCheck(false);
      } else {
        alert("Record Saving Failed")
        SetButtonCheck(false);
      }

      // Add To MAG and MAG Consolidated if Male 
      if (Sex == "Male") {
        let responseMag = await axios.post(`${API_URL}/api/MAGMaster`, {
          name: vname,
          AverageDED: "",
          DAE: "",
          DScore: "",
          EMO: "",
          EMT: "",
          EMT4: "",
          EMTR: "",
          EScore: "",
          FinalScore: "",
          Penalty: "",
          AddList: "",
          AddList: Yes,
          AgeGroup:Age,
          District:District
        });
        console.log(responseMag)
        if (responseMag.data.success == true) {
          alert("Record MAG Saved Successfully")
        } else {
          alert("Record MAG Saving Failed")
        }
      } else { // Add To WAG and WAG Consolidated if Male 
        let responseWag = await axios.post(`${API_URL}/api/WAGMaster`, {

          name: vname,
          AverageDED: "",
          DAE: "",
          DScore: "",
          EMO: "",
          EMT: "",
          EMT4: "",
          EMTR: "",
          EScore: "",
          FinalScore: "",
          Penalty: "",
          AddList: "",
          AddList: Yes,
          AgeGroup:Age,
          District:District
        });
        console.log(responseWag)
        if (responseWag.data.success == true) {
          alert("Record WAG Saved Successfully")
        } else {
          alert("Record WAG Saving Failed")
        }
      }


    }
  }

  const ActualCalculate = () => {

     let isvalid = false

    if(vname == ""){
      alert("Please Fill Name");
      return isvalid;
    }
    else if(vnum == ""){
      alert("Please Select DOB");
      return isvalid;
    }
    else if(Age == ""){
      alert("Please Select Age Group");
      return isvalid;
    }
    else if (Sex == ""){
      alert("Please Select Sex");
      return isvalid;
    }
    else if(District == ""){
      alert("Please Select District");
      return isvalid;
    }
    else if (Discipline == ""){
      alert("Please Select Discipline");
      return isvalid;
    }
    else if (Yes == ""){
      alert("Please Select if You want to Add to List");
      return isvalid;
    }else{
      isvalid = true;
      return isvalid;
    }
    

  }

  return (
    <React.Fragment>
      <center>
        <section id="contact" className="contact">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-up"
            >
              <h2>Player Registration</h2>
            </div>
            <div>
              <div
                className="col-lg-8 mt-5 mt-lg-0 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="php-email-form">

                  <div className="row">
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Player's Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name:"
                        required=""
                        value={vname}
                        onChange={(event) => {
                          SetVname(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>DOB :</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Enter DOB"
                        required=""
                        value={vnum}
                        onChange={(event) => {
                          SetVnum(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Age Group</label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{width:"280px"}}
                        value={Age}
                        label="AgeGroup"
                        onChange={(event) => {
                          SetAgeG(event.target.value);
                        }}
                      >
                        <MenuItem value={"10"}>Under 10</MenuItem>
                        <MenuItem value={"12"}>Under 12</MenuItem>
                        <MenuItem value={"14"}>Under 14</MenuItem>
                        <MenuItem value={"17"}>Under 17</MenuItem>
                        <MenuItem value={"S"}>Seniors</MenuItem>
                      </Select>
                    </div>

                    <div className="col-md-6 form-group">
                      <label>Sex:</label><br></br>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{width:"280px"}}
                        value={Sex}
                        label="Sex"
                        onChange={(event) => {
                          SetSex(event.target.value);
                        }}
                      >
                        <MenuItem value={"Male"}>Male</MenuItem>
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Others"}>Others</MenuItem>
                      </Select>
                    </div>

                    


                  </div>


                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>District</label><br></br>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{width:"280px"}}
                        value={District}
                        label="District"
                        onChange={(event) => {
                          SetDistrict(event.target.value);
                        }}
                      >
                        {courses.map((course, index) => {
                          return (
                            <MenuItem key={index} value={course}>{course}</MenuItem>
                          )
                        })}
                      </Select>
                    </div>

                    <div className="col-md-6 form-group">
                      <label>Gymnastics Discipline:</label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{width:"280px"}}
                        value={Discipline}
                        label="Discipline"
                        onChange={(event) => {
                          SetDiscipline(event.target.value);
                        }}
                      >
                        <MenuItem value={"Artistic"}>Artistic</MenuItem>
                        <MenuItem value={"Rythmic"}>Rythmic</MenuItem>
                        <MenuItem value={"Aerobic"}>Aerobic</MenuItem>
                        <MenuItem value={"Acrobatic"}>Acrobatic</MenuItem>
                        <MenuItem value={"TAT"}>Tumbling and Trampoline</MenuItem>
                        <MenuItem value={"Parckour"}>Parckour</MenuItem>
                      </Select>
                    </div>

                  
                  </div>


                  <div className="row">
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Add To List</label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{width:"280px"}}
                        value={Yes}
                        label="AddList"
                        onChange={(event) => {
                          SetYes(event.target.value);
                        }}
                      >
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                      </Select>
                    </div>

                  </div>


                  <button
                    type="submit"
                    className="btn-dark"
                    
                    onClick={() => {
                      Calculate();
                    }}
                  >
                    Register
                    </button>

                </div>
              </div>
            </div>
          </div>
        </section>
      </center>



    
    </React.Fragment>
  );
}