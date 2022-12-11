import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import NavbarComponent from "./Navbar.js";
const API_URL = "http://localhost:3001";

const Register = () => {
	const [owner, setowner] = useState();
	const [shop, setshop] = useState();
	const [number, setnumber] = useState();
	const [password, setpassword] = useState();
	const [email, setemail] = useState();
	const [address, setaddress] = useState();
	const [city, setcity] = useState();
	const [district, setdistrict] = useState();
	const [state, setstate] = useState();
	const [pincode, setpincode] = useState();
	const [ownerNameerr, setownerNameerr] = useState({});
	const [Shoperr, setShoperr] = useState({});
	const [numbererr, setnumbererr] = useState({});
	const [phoneCheckErr, setPhoneCheckErr] = useState("");
	const [emailerr, setemailerr] = useState({});
	const [pinerr, setPinerr] = useState({});

	const checkPhoneNo = async (e) => {
		await setnumber(e);
		if (e.length !== 10) {
			setPhoneCheckErr("Please Enter full number");
		} else {
			let response = await axios.post(`${API_URL}/api/checkPhoneNumber`, {
				number: e,
			});
			if (!response.data.Success) setPhoneCheckErr(response.data.message);
		}
	};

	const onsubmit = async (e) => {
	
 
		const isValid = formValidation();

		if (isValid) {
			let response = await axios.post(`${API_URL}/api/registerUser`, {
				owner: owner,
				shop: shop,
				number: number,
				password: password,
				email: email,
				address: address,
				city: city,
				district: district,
				state: state,
				pincode: pincode,
			
			});

			if (response.data.success) {
				window.open("/login", "_self");
			}
		}
	};

	const formValidation = () => {
		const ownerNameerr = {};
		const Shoperr = {};
		const numbererr = {};
		const emailerr = {};
		let phoneno = /^\d{10}$/;
		let Pincode = /^[1-9]{1}[0-9]{2}[0-9]{3}$/;

		let isValid = true;

		if (owner.trim().length < 2) {
			ownerNameerr.ownerNameshort = "First Name Short";
			isValid = false;
		}
		setownerNameerr(ownerNameerr);

		if (shop.trim().length < 2) {
			Shoperr.Shoperrshort = "Shop Name Short";
			isValid = false;
		}
		setShoperr(Shoperr);

		if (!number.match(phoneno)) {
			numbererr.numbererrshort = "Enter Valid No";
			isValid = false;
		}
		setnumbererr(numbererr);

		if (!email.includes("@")) {
			emailerr.emailerrshort = "Enter Valid Email";
			isValid = false;
		}
		setemailerr(emailerr);


		if (!pincode.match(Pincode)) {
			pinerr.piinerr = "Enter Valid Pincode";
			isValid = false;
		}
		setPinerr(pinerr);

		return isValid;
	};

	return (
		<div>
			<header className="page-header">
				<NavbarComponent></NavbarComponent>
			</header>

			<section id="contact" className="contact">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
							<div className="section-title">
								<h2>Add User</h2>
								<p>Register HERE</p>
							</div>
						</div>

						<div className="col-lg-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
							<div className="info mt-4">
								<i className="bi bi-geo-alt"></i>
								<h4>Register:</h4>
							</div>

							<div className="php-email-form mt-4">
								<div className="row">
									<div className="col-md-6 form-group">
										<Form.Label>Owner Name</Form.Label>
										<input
											type="text"
											name="owner"
											className="form-control"
											id="owner"
											placeholder="Your Name"
											value={owner}
											onChange={(e) => {
												setowner(e.target.value);
											}}
											required=""
										/>
										{Object.keys(ownerNameerr).map((key) => {
											return <div style={{ color: "red" }}>{ownerNameerr[key]}</div>;
										})}
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Last Name</Form.Label>
										<input
											type="text"
											className="form-control"
											name="shop"
											id="shop"
											placeholder="Your Last name"
											value={shop}
											onChange={(e) => {
												setshop(e.target.value);
											}}
											required=""
										/>
										{Object.keys(Shoperr).map((key) => {
											return <div style={{ color: "red" }}>{Shoperr[key]}</div>;
										})}
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Mobile Number</Form.Label>

										{phoneCheckErr ? (
											<span className="pl-3 text-danger">{phoneCheckErr}</span>
										) : (
											<span className="pl-3 text-success">Number can register</span>
										)}
										<input
											type="number"
											className="form-control"
											name="number"
											placeholder="Your number"
											value={number}
											onChange={(e) => {
												checkPhoneNo(e.target.value);
											}}
											required=""
										/>
										{Object.keys(numbererr).map((key) => {
											return <div style={{ color: "red" }}>{numbererr[key]}</div>;
										})}
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Password</Form.Label>
										<input
											type="text"
											className="form-control"
											placeholder="Your password"
											value={password}
											onChange={(e) => {
												setpassword(e.target.value);
											}}
											required=""
										/>
										{Object.keys(emailerr).map((key) => {
											return <div style={{ color: "red" }}>{emailerr[key]}</div>;
										})}
									</div>
								</div>

								<div className="form-group mt-3 mt-md-0">
									<Form.Label>Email</Form.Label>
									<input
										type="email"
										className="form-control"
										name="email"
										id="email"
										placeholder="Your email"
										value={email}
										onChange={(e) => {
											setemail(e.target.value);
										}}
										required=""
									/>
								</div>

								<div className=" form-group mt-3 mt-md-0">
									<Form.Label>Address</Form.Label>
									<input
										type="text"
										className="form-control"
										name="address"
										id="address"
										placeholder="Address"
										value={address}
										onChange={(e) => {
											setaddress(e.target.value);
										}}
										required=""
									/>
								</div>

								<div className="row">
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>City</Form.Label>
										<input
											type="text"
											className="form-control"
											name="city"
											id="city"
											placeholder="Your city"
											value={city}
											onChange={(e) => {
												setcity(e.target.value);
											}}
											required=""
										/>
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>District</Form.Label>
										<input
											type="text"
											className="form-control"
											name="district"
											id="district"
											placeholder="Your district"
											value={district}
											onChange={(e) => {
												setdistrict(e.target.value);
											}}
											required=""
										/>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>State</Form.Label>
										<input
											type="text"
											className="form-control"
											name="state"
											id="state"
											placeholder="Your state"
											value={state}
											onChange={(e) => {
												setstate(e.target.value);
											}}
											required=""
										/>
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<Form.Label>Pincode</Form.Label>
										<input
											type="text"
											className="form-control"
											name="pincode"
											id="pincode"
											placeholder="Your pincode"
											value={pincode}
											onChange={(e) => {
												setpincode(e.target.value);
											}}
											required=""
										/>
										{Object.keys(pinerr).map((key) => {
											return <div style={{ color: "red" }}>{pinerr[key]}</div>;
										})}
									</div>
								</div>

								<div className="text-center">
									<Button
										onClick={() => {
											onsubmit();
										}}>
										Register
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Register;
