import React from "react";
import NavbarComponent from "../Components/Navbar.js";

class About extends React.Component {
	render() {
		return (
			<div>
				<header className="page-header">
					<NavbarComponent></NavbarComponent>
				</header>

				<div
					className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5 aos-init aos-animate"
					data-aos="fade-left"
				>
					<h3>Travel Everywhere</h3>
					<p>
						Travel Everywhere is a road-trip management site
						that delivers full fledged travel management and make consumer's trip memorable.
					</p>

					<div
						className="icon-box aos-init aos-animate"
						data-aos="zoom-in"
						data-aos-delay="100"
					>
						<div className="icon">
							<i className="bx bx-fingerprint"></i>
						</div>
						<h4 className="title">
							<a href={"/about"}>Front Runner</a>
						</h4>
						<p className="description">
							Conceived to deliver a management
							experience online, Travel Everywhere has been the front
							runner in meanwhile.
						</p>
					</div>

					<div
						className="icon-box aos-init aos-animate"
						data-aos="zoom-in"
						data-aos-delay="200"
					>
						<div className="icon">
							<i className="bx bx-gift"></i>
						</div>
						<h4 className="title">
							<a href={"/about"}>Directness</a>
						</h4>
						<p className="description">
							{" "}
							It has secured direct relationships with consumers
							and has singularly focused on managing in
							attritibutes which users are frequently concerned about and to make the
							their experience flexible, simpler and secure.
						</p>
					</div>

					<div
						className="icon-box aos-init aos-animate"
						data-aos="zoom-in"
						data-aos-delay="300"
					>
						<div className="icon">
							<i className="bx bx-atom"></i>
						</div>
						<h4 className="title">
							<a href={"/about"}>Our Motto</a>
						</h4>
						<p className="description">
							Giving constant management , support and make their trip the most memorable one! 
						</p>
					</div>
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

export default About;
