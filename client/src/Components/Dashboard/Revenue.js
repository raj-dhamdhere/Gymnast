import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { makeStyles } from '@material-ui/core/styles';
import QRCode from "qrcode.react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Button, Container } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
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
    const [Revenue, SetRevenue] = useState([]);
    const [expense, SetExpense] = useState([]);
    const [Revenuevaluefinal, SetRevenuevaluefinal] = useState([]);
    const [checking, Setchecking] = useState(false)
    const [userInfo, SetuserInfo] = useState({
        file: []
    })
    const [userInfoa, SetuserInfoa] = useState({
        file: []
    })
    const [ButtonChecker, SetButtonCheck] = useState(false)
    const [mileage, SetMileage] = useState([]);
    const [BatchNoFilter, SetBatchNoFilter] = useState([]);
    const aRef = useRef(null);
    const aRefa = useRef(null);

    const courses = ["Superior Quality", "Medium Quality", "Country Quality"]


    const classes = useStyles();

    useEffect(async () => {
        try {
            const data = await axios.get(
                "http://localhost:3001/api/RevenueSummary"
            );
            //console.log(data.data.data[0].Revenue)
            SetRevenuevaluefinal(data.data.data[0].Revenue)
           

        } catch (e) {
            console.log(e);
        }
    }, []);

    const handleinputchange = (e) => {
        SetuserInfo({
            ...userInfo,
            file: e.target.files[0],
            filepreview: URL.createObjectURL(e.target.files[0]),
        })

    }

    const handleinputchangea = (e) => {
        SetuserInfoa({
            ...userInfoa,
            file: e.target.files[0],
            filepreviewa: URL.createObjectURL(e.target.files[0]),
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
                            <h2>Item Sell</h2>
                        </div>
                        <div>
                            <div
                                className="col-lg-8 mt-5 mt-lg-0 aos-init aos-animate"
                                data-aos="fade-left"
                                data-aos-delay="200"
                            >
                                <div className="php-email-form">


                                    <h4>Revenue :- {Revenuevaluefinal}</h4>
                                  





                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </center>




        </React.Fragment>
    );
}