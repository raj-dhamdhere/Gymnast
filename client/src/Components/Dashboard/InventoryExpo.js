import React, { useState ,useRef} from "react";
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


  const [Quantity, SetQuantity] = useState([]);
  const [BatchNo, SetBatchNo] = useState([]);
  const [distance, SetDistance] = useState([]);
  const [Manufacturer, SetManufacturer] = useState([]);
  const [ItemName, SetItemName] = useState([]);
  const [Quality, SetQuality] = useState([]);
  const [Rate, SetRate] = useState([]);
  const [Yes, SetYes] = useState(true);
  const [No, SetNo] = useState(false);
  const [expense, SetExpense] = useState([]);
  const [checking,Setchecking] = useState(false)
  const [userInfo,SetuserInfo] = useState({
    file:[]
  })
  const [userInfoa,SetuserInfoa] = useState({
    file:[]
  })
  const [ButtonChecker,SetButtonCheck] = useState(false)
  const [mileage, SetMileage] = useState([]);
  const aRef = useRef(null);
  const aRefa = useRef(null);
  
  const courses = ["Superior Quality","Medium Quality","Country Quality"]

  const classes = useStyles();

  const Calculate = async (e) => {
    console.log(userInfo)
    SetButtonCheck(true);
    const check = ActualCalculate();
    Setchecking(check);


    if (checking) {
      //Normal Add To List
      const formData = new FormData()
      formData.append('Rate',Rate) 
      formData.append('Quality',Quality) 
      formData.append('ItemName',ItemName) 
      formData.append('Manufacturer',Manufacturer) 
      formData.append('BatchNo',BatchNo) 
      formData.append('Quantity',Quantity) 
      formData.append('file',userInfo.file)   //Profile Image
      console.log(formData)
      let response = await axios.post(`${API_URL}/api/InventoryAdd`, 
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
      
      );
      console.log(response)
      if (response.data.success == true) {
        alert("Record Saved Successfully")
        SetRate("");
        SetQuality("");
        SetItemName("");
        SetManufacturer("");
        SetBatchNo("");
        SetQuantity("");
        SetYes("");
        SetButtonCheck(false);
        SetuserInfo('');
        SetuserInfoa('');
        aRef.current.value = null;
        aRefa.current.value = null;
      } else {
        alert("Record Saving Failed")
        SetButtonCheck(false);
      }



    }
  }

  const ActualCalculate = () => {

     let isvalid = false

    if(Rate == ""){
      alert("Please Fill Rate");
      return isvalid;
    }
    else if(Quality == ""){
      alert("Please enter  Quality");
      return isvalid;
    }
    else if(ItemName == ""){
      alert("Please Select ItemName");
      return isvalid;
    }
    else if (Manufacturer == ""){
      alert("Please Select Manufacturer");
      return isvalid;
    }
    else if(BatchNo == ""){
      alert("Please Select BatchNo");
      return isvalid;
    }
    else if (Quantity == ""){
      alert("Please Select Quantity");
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

  const handleinputchange = (e) => {
    SetuserInfo({
      ...userInfo,
      file:e.target.files[0],
      filepreview:URL.createObjectURL(e.target.files[0]),
    })

 }

 const handleinputchangea = (e) => {
  SetuserInfoa({
    ...userInfoa,
    file:e.target.files[0],
    filepreviewa:URL.createObjectURL(e.target.files[0]),
  })

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
              <h2>Inventory Add</h2>
            </div>
            <div>
              <div
                className="col-lg-8 mt-5 mt-lg-0 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="php-email-form">

                <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Item Name</label>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{width:"280px"}}
                        value={ItemName}
                        label="ItemName"
                        onChange={(event) => {
                            SetItemName(event.target.value);
                        }}
                      >
                        <MenuItem value={"Cement"}>Cement</MenuItem>
                        <MenuItem value={"SteelPipes"}>Steel Pipes</MenuItem>
                        <MenuItem value={"WoodLogs"}>Wood Logs</MenuItem>
                        <MenuItem value={"PVCPipes"}>PVC Pipes</MenuItem>
                        <MenuItem value={"SideAngles"}>Side Angles</MenuItem>
                      </Select>
                    </div>

                    <div className="col-md-6 form-group">
                      <label>Maufacturer:</label><br></br>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{width:"280px"}}
                        value={Manufacturer}
                        label="Manufacturer"
                        onChange={(event) => {
                          SetManufacturer(event.target.value);
                        }}
                      >
                        <MenuItem value={"Tata"}>Tata</MenuItem>
                        <MenuItem value={"Reliance"}>Reliance</MenuItem>
                        <MenuItem value={"Others"}>Others</MenuItem>
                      </Select>
                    </div>

                    


                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Item Quantity:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Quantity:"
                        required=""
                        value={Quantity}
                        onChange={(event) => {
                          SetQuantity(event.target.value);
                        }}
                      />
                    </div>

                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Batch No :</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Batch No"
                        required=""
                        value={BatchNo}
                        onChange={(event) => {
                          SetBatchNo(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Quality</label><br></br>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        style={{width:"280px"}}
                        value={Quality}
                        label="Quality"
                        onChange={(event) => {
                            SetQuality(event.target.value);
                        }}
                      >
                        {courses.map((course, index) => {
                          return (
                            <MenuItem key={index} value={course}>{course}</MenuItem>
                          )
                        })}
                      </Select>
                    </div>

                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Rate:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Rate"
                        required=""
                        value={Rate}
                        onChange={(event) => {
                          SetRate(event.target.value);
                        }}
                      />
                    </div>

                  
                  </div>


                  <div className="row">
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label>Add To Inventory</label>
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

                  {/* Image  */}

                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label>Address Proof Docs:</label>
                      <input type="file"
                        id="AddressUpload" name="avatar" ref={aRefa} accept="image/png, image/jpeg" onChange={handleinputchangea}
                      />
                    </div>

                    <div className="col-md-6 form-group">
                      <label>Image Upload:</label>
                      <input type="file"
                        id="ImageUpload" name="avatar" ref={aRef}
                        accept="image/png, image/jpeg" onChange={handleinputchange} />
                    </div>


                  </div>

                  {/* Image Before */}


                  <div className="row">
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      {userInfoa.filepreviewa!=null ? 
                      <img className="previewimga" width="300px" height="200px" src={userInfoa.filepreviewa} alt="Upload Address Proof"/> :null}
                    </div>

            
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      {userInfo.filepreview!=null ? 
                      <img className="previewimg" width="200px" height="200px" src={userInfo.filepreview} alt="Upload Image"/> :null}
                    </div>

                  </div>


                  <button
                    type="submit"
                    className="btn-dark"
                    
                    onClick={() => {
                      Calculate();
                    }}
                  >
                    Add Stock
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