import React from "react";
import NavbarComponent from "../Components/Navbar.js";

class About extends React.Component {
	render() {
		return (
			<div>
				<header className="page-header">
					<NavbarComponent></NavbarComponent>
				</header>

				<section id="why-us" class="why-us">
					<div class="container">
						<div class="row">
							<div
								class="col-lg-4 d-flex align-items-stretch aos-init aos-animate"
								data-aos="fade-right"
							>
								<div class="content">
									<h3>Construction Inventory</h3>
									<p>
										Construction Inventory 
									</p>
									<div class="text-center">
										<a href={"/pricing"} class="more-btn">
											Learn More{" "}
											<i class="bx bx-chevron-right"></i>
										</a>
									</div>
								</div>
							</div>
							<div class="col-lg-8 d-flex align-items-stretch">
								<div class="icon-boxes d-flex flex-column justify-content-center">
									<div class="row">
										<div
											class="col-xl-4 d-flex align-items-stretch aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="100"
										>
											<div class="icon-box mt-4 mt-xl-0">
												<i class="bx bx-receipt"></i>
												<h4>Shortest Route</h4>
												<p>
												Provides user the shortest route between their source and destination locations
												</p>
											</div>
										</div>
										<div
											class="col-xl-4 d-flex align-items-stretch aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="200"
										>
											<div class="icon-box mt-4 mt-xl-0">
												<i class="bx bx-cube-alt"></i>
												<h4>Drowsy Detection</h4>
												<p>
												Monitor the driver activity and alerts whenever they seems to be drowsy or sleepy.
												</p>
											</div>
										</div>
										<div
											class="col-xl-4 d-flex align-items-stretch aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="300"
										>
											<div class="icon-box mt-4 mt-xl-0">
												<i class="bx bx-images"></i>
												<h4>Vehicle Expenditure</h4>
												<p>
												Calculates the vehicle consumption and obtains the amount which comes under their transport category.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <center>
					<Table
						className="Tableforpricing"
						bordered="True"
						responsive
					>
						<thead>
							<tr>
								<th>#</th>
								<th>Service</th>
								<th>Operator</th>
								<th>Pricing</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>BSNL SPECIAL</td>
								<td>1.5%</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>IDEA</td>
								<td>1.5%</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>BSNL TOPUP</td>
								<td>1.5%</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>JIO</td>
								<td>1.5%</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>VODAFONE</td>
								<td>1.5%</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>DISH TV</td>
								<td>1.5%</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>AIRTEL DIGITAL TV</td>
								<td>1.5%</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>TATASKY</td>
								<td>1.5%</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Prepaid</td>
								<td>AIRTEL</td>
								<td>1.5%</td>
							</tr>
						</tbody>
					</Table>
				</center> */}

				<footer id="footer">
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="footer-info">
										<h3>Construction Inventory</h3>
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
											111111111<br></br>
											<strong>Email:</strong>{" "}
											abc@gmail.com<br></br>
										</p>
										<div className="social-links mt-3">
											<a
												href={"/pricing"}
												className="twitter"
											>
												<i className="bx bxl-twitter"></i>
											</a>
											<a
												href={"/pricing"}
												className="facebook"
											>
												<i className="bx bxl-facebook"></i>
											</a>
											<a
												href={"/pricing"}
												className="instagram"
											>
												<i className="bx bxl-instagram"></i>
											</a>
											<a
												href={"/pricing"}
												className="google-plus"
											>
												<i className="bx bxl-skype"></i>
											</a>
											<a
												href={"/pricing"}
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
										We work Fast , make everything easy and
										support fast
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="container">
						<div className="copyright">
							&copy; Copyright{" "}
							<strong>
								<span>Construction Inventory</span>
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

export default About;
