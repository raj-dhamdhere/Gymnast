import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useHistory } from "react-router-dom";
import NavbarComponent from "./Navbar.js";
const API_URL = "http://localhost:3001";


function Login() {
	const history = useHistory();
	const [number, setPhone] = useState("");
	const [pass, setPass] = useState("");

	async function loginUser() {
		let response = await axios.post(`${API_URL}/api/loginUser`, {
			number: number,
			password: pass,
		});
		if (await response.data.success) {
			localStorage.setItem("cardToken", response.data.token);
			history.push("/dashboard");
		}
	}

	return (
		<div>
			<header className="page-header">
				<NavbarComponent></NavbarComponent>
			</header>
			<section id="contact" className="contact">
				<div className="container">
					<div className="section-title aos-init aos-animate" data-aos="fade-up">
						<h2>Authentication</h2>
						<p>Login</p>
					</div>

					<div className="row">
						<div className="col-lg-4 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
							<div className="info">
								<div className="address">
									<i className="bi bi-geo-alt"></i>
									<h4>Location:</h4>
									<p>Aundh</p>
								</div>
							</div>
						</div>

						<div className="col-lg-8 mt-5 mt-lg-0 aos-init aos-animate text-left" data-aos="fade-left" data-aos-delay="200">
							<div className="php-email-form">
								<div>
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<input
											type="number"
											className="form-control"
											placeholder="Your Number"
											required=""
											onChange={(e) => {
												setPhone(e.target.value);
											}}
											value={number}
										/>
									</div>

									<div className="col-md-6 form-group mt-3 mt-md-0">
										<input
											type="password"
											className="form-control"
											placeholder="Your Password"
											required=""
											onChange={(e) => {
												setPass(e.target.value);
											}}
											value={pass}
										/>
									</div>
									<button
										className="btn btn-success col-md-3 form-group ml-4"
										onClick={() => {
											loginUser();
										}}>
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer id="footer">
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="footer-info">
									<h3>Travel Everywhere</h3>
										<p className="pb-3">
											<em>
												All in One Services Platform and
												an User Friendly Approach
											</em>
										</p>
										<p>
											Wadagaon Sheri <br></br>
											Pune 411014<br></br>
											<strong>Phone:</strong> +91
											1111111111<br></br>
											<strong>Email:</strong>{" "}
											abc@gmail.com<br></br>
										</p>
										<div className="social-links mt-3">
											<a
												href={"/about"}
												className="twitter"
											>
												<i className="bx bxl-twitter"></i>
											</a>
											<a
												href={"/about"}
												className="facebook"
											>
												<i className="bx bxl-facebook"></i>
											</a>
											<a
												href={"/about"}
												className="instagram"
											>
												<i className="bx bxl-instagram"></i>
											</a>
											<a
												href={"/about"}
												className="google-plus"
											>
												<i className="bx bxl-skype"></i>
											</a>
											<a
												href={"/about"}
												className="linkedin"
											>
												<i className="bx bxl-linkedin"></i>
											</a>
										</div>
									</div>
								</div>

								<div className="col-lg-2 col-md-6 footer-links">
									<h4>Useful Links</h4>
									<ul>
										<li>
											<i className="bx bx-chevron-right"></i>{" "}
											<a href="/Disclaimer">
												Disclaimer Policies
											</a>
										</li>
										<li>
											<i className="bx bx-chevron-right"></i>{" "}
											<a href="/refund">
												Security Policies
											</a>
										</li>
										<li>
											<i className="bx bx-chevron-right"></i>{" "}
											<a href="/Efund">Refund Policies</a>
										</li>
										<li>
											<i className="bx bx-chevron-right"></i>{" "}
											<a href="/terms">
												Terms and conditions
											</a>
										</li>
										<li>
											<i className="bx bx-chevron-right"></i>{" "}
											<a href="/privacy">
												Privacy policy
											</a>
										</li>
									</ul>
								</div>

								<div className="col-lg-2 col-md-6 footer-links">
									<h4>Our Services</h4>
									<ul>
										<li>
											<i className="bx bx-chevron-right"></i>{" "}
											<a href={"/Main"}>
												Shortest Route
											</a>
										</li>
										<li>
											<i className="bx bx-chevron-right"></i>{" "}
											<a href={"/Main"}>
												Drowsy Detection
											</a>
										</li>
										<li>
											<i className="bx bx-chevron-right"></i>{" "}
											<a href={"/Main"}>
												Vehicle Expenditure
											</a>
										</li>
									</ul>
								</div>

								<div className="col-lg-4 col-md-6 footer-newsletter">
									<h4>Our Newsletter</h4>
									<p>
									We work Fast, manage everthing and support fast
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="container">
						<div className="copyright">
							&copy; Copyright{" "}
							<strong>
								<span>Travel Everywhere</span>
							</strong>
							. All Rights Reserved
						</div>
						<div className="credits"></div>
					</div>
				</footer>
		</div>
	);
}

export default Login;
