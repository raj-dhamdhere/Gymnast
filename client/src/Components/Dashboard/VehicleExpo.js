import React, { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { makeStyles } from '@material-ui/core/styles';
import QRCode from "qrcode.react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Button, Container } from "@material-ui/core";
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

  const [handleShow, sethandleShow] = useState(true);
  const [vname, SetVname] = useState([]);
  const [vnum, SetVnum] = useState([]);
  const [distance, SetDistance] = useState([]);
  const [mileage, SetMileage] = useState([]);
  const [petrol, SetPetrol] = useState(false);
  const [diesel, SetDiesel] = useState(false);
  const [expense, SetExpense] = useState([]);
  const [checking,Setchecking] = useState(false)

  const classes = useStyles();

  const Calculate = async (e) => {
    const check= ActualCalculate();
    Setchecking(check);
    if(checking){

      let response = await axios.post(`${API_URL}/api/vehicleexpense`, {

        vname: vname,
        vnum: vnum,
        distance: distance,
        mileage: mileage,
        petrol: petrol,
        diesel: diesel,
        expense:expense
      });
      console.log(response)
    }
  }

  const ActualCalculate = () => {
    let expense = {};
    let Fuel = {};
    let ExpenseCalculate = {};
    let isvalid = true

    if (petrol) {
      console.log("im petrol")
      ExpenseCalculate = 104.90
    }
    else {
      ExpenseCalculate = 96.72
    }
    Fuel = distance / mileage;
    expense = Fuel * ExpenseCalculate;

    SetExpense(expense)
    console.log(expense)
    return isvalid;

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
              <h2>Vehicle Expenditure</h2>
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
                      <label>Enter Your Vehicle Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Vehicle Name"
                        required=""
                        value={vname}
                        onChange={(event) => {
                          SetVname(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Enter Your Vehicle Number:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Vehicle  Number"
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
                      <label>Enter Your Trip's Distance:</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Your Distance"
                        required=""
                        value={distance}
                        onChange={(event) => {
                          SetDistance(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6 form-group">
                      <label>Enter Your Vehicle's Mileage:</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Your Mileage"
                        required=""
                        value={mileage}
                        onChange={(event) => {
                          SetMileage(event.target.value);
                        }}
                      />
                    </div>


                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Select Fuel Type</label>
                      <BootstrapSwitchButton
                        checked={petrol}
                        onlabel="Petrol"
                        onstyle="success"
                        offlabel="Diesel"
                        offstyle="danger"
                        style="w-50 mx-3"
                        onChange={(checked) => {
                          if (checked) {
                            SetPetrol(true);
                            console.log("petrol", petrol)
                            SetDiesel(false);

                          } else {
                            SetDiesel(true);
                            console.log("diesel", diesel)
                            SetPetrol(false);

                          }
                        }}
                      />
                    </div>

                  </div>

                  <div className="row">

                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Petrol Price: 104.90 per Litre</label>
                      <p></p>
                    </div>


                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Diesel Price: 96.72 per Litre</label>
                      <p></p>
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="btn-dark"
                    onClick={() => {
                      Calculate();
                    }}
                  >
                    Calculate
                    </button>

                </div>
              </div>
            </div>
          </div>
        </section>
      </center>

      <Container>
      <Row md={4}>
        <Col>
        </Col>
        <Col md={4}>
        <label>Expense:</label>
              <p>{expense}</p>
        </Col>
      </Row>
      
                  
        <center>
        <div className="php-email-form">
              
       
          


					<div className="text-center">
						<QRCode id="9423661150" value={`${expense}-Rs`} size={290} level={"H"} includeMargin={true} />
					
					</div>
          </div>
        </center>
        </Container>

    
    </React.Fragment>
  );
}