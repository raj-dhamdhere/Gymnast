import React from "react";
import NavbarComponent from "../Components/Navbar.js";

class Test extends React.Component {
	render() {
		return (
			<div>
				<header className="page-header">
				<NavbarComponent></NavbarComponent>
				</header>

				<section id="hero" class="d-flex align-items-center">
					<div
						class="container text-center position-relative aos-init aos-animate"
						data-aos="fade-in"
						data-aos-delay="200"
					>
						<h1>Online Career Counselling System </h1>
						<h2>
							We are team of individuals which provides a set of functionalities to make your Career Counselling memorable! :)						
						</h2>
					</div>
				</section>

				<section id="services" class="services section-bg">
					<div class="container">
						<div class="row">
							<div class="col-lg-4">
								<div
									class="section-title aos-init aos-animate"
									data-aos="fade-right"
								>
									<h2>Features</h2>
									<p>Best Service Providers in Town</p>
								</div>
							</div>
							<div class="col-lg-8">
								<div class="row">
									<div class="col-md-6 d-flex align-items-stretch">
									<div
											class="icon-box aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="400"
										>
											<div class="icon">
												<i class="bx bx-world"></i>
											</div>
											<h4>
												<a href={"/shortestrouteinfo"}>
													Shortest Route
												</a>
											</h4>
											<p>
												Provides user the shortest route between their source and destination locations.{" "}
											</p>
										</div>
									</div>

									<div class="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
										<div
											class="icon-box aos-init aos-animate"  
											data-aos="zoom-in"
											data-aos-delay="200"
										>
											<div class="icon">
												<i class="bx bx-file"></i>
											</div>
											<h4>
												<a href={"/drowsyinfo"}>
													Drowsy Detection
												</a>
											</h4>
											<p>
												{" "}
												Monitor the driver activity and alerts whenever they seems to be drowsy or sleepy.{" "}
											</p>
										</div>
									</div>

									<div class="col-md-6 d-flex align-items-stretch mt-4">
										<div
											class="icon-box aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="300"
										>
											<div class="icon">
												<i class="bx bx-tachometer"></i>
											</div>
											<h4>
												<a href={"/vehicleExinfo"}>
													Vehicle Expenditure
												</a>
											</h4>
											<p>
												Calculates the vehicle consumption and obtains the amount which comes under their transport category.
											</p>
										</div>
									</div>

									<div class="col-md-6 d-flex align-items-stretch mt-4">
										<div
											class="icon-box aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="400"
										>
											<div class="icon">
												<i class="bx bx-world"></i>
											</div>
											<h4>
												<a href={"/stopinfo"}>
													Essential Stop</a>
											</h4>
											<p>
												This feature provides the essential stops which are present along the way during the road trip.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="counts" className="counts">
					<div className="container">
						<div
							className="row aos-init aos-animate"
							data-aos="fade-up"
						>
							<div className="col-lg-3 col-md-6">
								<div className="count-box">
									<i className="bi bi-emoji-smile"></i>
									<span
										data-purecounter-start="0"
										data-purecounter-end="232"
										data-purecounter-duration="0"
										className="purecounter"
									>
										232
									</span>
									<p>Happy Clients</p>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 mt-5 mt-md-0">
								<div className="count-box">
									<i className="bi bi-journal-richtext"></i>
									<span
										data-purecounter-start="0"
										data-purecounter-end="521"
										data-purecounter-duration="0"
										className="purecounter"
									>
										14
									</span>
									<p>operators</p>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
								<div className="count-box">
									<i className="bi bi-headset"></i>
									<span
										data-purecounter-start="0"
										data-purecounter-end="1463"
										data-purecounter-duration="0"
										className="purecounter"
									>
										14
									</span>
									<p>Hours Of Support</p>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
								<div className="count-box">
									<i className="bi bi-people"></i>
									<span
										data-purecounter-start="0"
										data-purecounter-end="15"
										data-purecounter-duration="0"
										className="purecounter"
									>
										4
									</span>
									<p>Hard Workers</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="team" class="team">
					<div class="container">
						<div class="row">
							<div class="col-lg-4">
								<div
									class="section-title aos-init aos-animate"
									data-aos="fade-right"
								>
									<h2>Follow us On</h2>
								</div>
							</div>
							<div class="col-lg-8">
								<div class="row">
									<div class="col-lg-6">
										<div
											class="member aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="100"
										>
											<div class="pic">
												<img
													src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png"
													class="img-fluid"
													alt=""
												/>
											</div>
											<div class="member-info">
												<h4>Twitter</h4>
												<span>Tweet It</span>
												<p>Join us on Twitter.</p>
												<div class="social">
													<a href={"/Main"}>
														<i class="ri-twitter-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-facebook-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-instagram-fill"></i>
													</a>
													<a href={"/Main"}>
														{" "}
														<i class="ri-linkedin-box-fill"></i>{" "}
													</a>
												</div>
											</div>
										</div>
									</div>

									<div class="col-lg-6 mt-4 mt-lg-0">
										<div
											class="member aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="200"
										>
											<div class="pic">
												<img
													src="https://parentzone.org.uk/sites/default/files/Instagram%20logo.jpg"
													class="img-fluid"
													alt=""
												/>
											</div>
											<div class="member-info">
												<h4>Instagram</h4>
												<span>Insta It </span>
												<p>Just Reel It</p>
												<div class="social">
													<a href={"/Main"}>
														<i class="ri-twitter-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-facebook-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-instagram-fill"></i>
													</a>
													<a href={"/Main"}>
														{" "}
														<i class="ri-linkedin-box-fill"></i>{" "}
													</a>
												</div>
											</div>
										</div>
									</div>

									<div class="col-lg-6 mt-4">
										<div
											class="member aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="300"
										>
											<div class="pic">
												<img
													src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png"
													class="img-fluid"
													alt=""
												/>
											</div>
											<div class="member-info">
												<h4>Facebook</h4>
												<span>Make us Friends</span>
												<p></p>
												<div class="social">
													<a href={"/Main"}>
														<i class="ri-twitter-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-facebook-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-instagram-fill"></i>
													</a>
													<a href={"/Main"}>
														{" "}
														<i class="ri-linkedin-box-fill"></i>{" "}
													</a>
												</div>
											</div>
										</div>
									</div>

									<div class="col-lg-6 mt-4">
										<div
											class="member aos-init aos-animate"
											data-aos="zoom-in"
											data-aos-delay="400"
										>
											<div class="pic">
												<img
													src="https://image.flaticon.com/icons/png/512/281/281769.png"
													class="img-fluid"
													alt=""
												/>
											</div>
											<div class="member-info">
												<h4>Gmail</h4>
												<span>Mail It</span>
												<p>Mail us the queries</p>
												<div class="social">
													<a href={"/Main"}>
														<i class="ri-twitter-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-facebook-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-instagram-fill"></i>
													</a>
													<a href={"/Main"}>
														<i class="ri-linkedin-box-fill"></i>{" "}
													</a>
												</div>
											</div>
										</div>
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
												href={"/Main"}
												className="twitter"
											>
												<i className="bx bxl-twitter"></i>
											</a>
											<a
												href={"/Main"}
												className="facebook"
											>
												<i className="bx bxl-facebook"></i>
											</a>
											<a
												href={"/Main"}
												className="instagram"
											>
												<i className="bx bxl-instagram"></i>
											</a>
											<a
												href={"/Main"}
												className="google-plus"
											>
												<i className="bx bxl-skype"></i>
											</a>
											<a
												href={"/Main"}
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

export default Test;
