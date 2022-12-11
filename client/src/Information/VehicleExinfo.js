import React from "react";
import NavbarComponent from "../Components/Navbar.js";
import './common.css';
//import vehicle1 from "./Images/vehicle1.png"
import vehicle2 from "./Images/vehicle2.jpg"



class VehicleExinfo extends React.Component {
	render() {
		return (
			<div>
				<header className="page-header">
					<NavbarComponent></NavbarComponent>
				</header>
				<h3 className="heading"> Vehicle Expenditure</h3>
				<div className="container1">
					<div className="box">
						<div className="imgBox">

							<img src={vehicle2} style={{ width: "700px" }}></img>


							<div className="details">
								<div className="content">

									<h2>Vehicle Expenditure</h2>
									<ul className="list">
										<li>Predicts the fuel cost according to customers preference</li>
										<li>Tells exactly how much for a particular vehicle the maintenanace is</li>
										<li>car payment</li>
										<li></li>
									</ul>
								</div>
							</div>

						</div>
					</div>
				</div>


				<div>
					<p className="paragraph">
						Management of vehicle/transport expenditure is always treated as the crucial part for any kind of travelling.
						So as per our objectives we provide the expenditure to the user using simple mathematics.

					</p>
				</div>

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
}

export default VehicleExinfo;
