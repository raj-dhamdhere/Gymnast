import React from "react";

import NavbarComponent from "../Components/Navbar.js";

class About extends React.Component {
	render() {
		return (
			<div>
				<header className="page-header">
				<NavbarComponent></NavbarComponent>
				</header>

				<section id="contact" class="contact">
					<div class="container">
						<div class="row">
							<div
								class="col-lg-4 aos-init aos-animate"
								data-aos="fade-right"
							>
								<div class="section-title">
									<h2>Contact</h2>
									<p>Contact Us</p>
								</div>
							</div>

							<div
								class="col-lg-8 aos-init aos-animate"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<div class="info mt-4">
									<i class="bi bi-geo-alt"></i>
									<h4>Location:</h4>
									<p>Wadagaon sheri pune 14</p>
								</div>
								<div class="row">
									<div class="col-lg-6 mt-4">
										<div class="info">
											<i class="bi bi-envelope"></i>
											<h4>Email:</h4>
											<p>abc@gmail.com</p>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="info w-100 mt-4">
											<i class="bi bi-phone"></i>
											<h4>Call:</h4>
											<p>+91 1111111111</p>
										</div>
									</div>
								</div>

								<form
									action="forms/contact.php"
									method="post"
									class="php-email-form mt-4"
								>
									<div class="row">
										<div class="col-md-6 form-group">
											<input
												type="text"
												name="name"
												class="form-control"
												id="name"
												placeholder="Your Name"
												required=""
											/>
										</div>
										<div class="col-md-6 form-group mt-3 mt-md-0">
											<input
												type="email"
												class="form-control"
												name="email"
												id="email"
												placeholder="Your Email"
												required=""
											/>
										</div>
									</div>
									<div class="form-group mt-3">
										<input
											type="text"
											class="form-control"
											name="subject"
											id="subject"
											placeholder="Subject"
											required=""
										/>
									</div>
									<div class="form-group mt-3">
										<textarea
											class="form-control"
											name="message"
											rows="5"
											placeholder="Message"
											required=""
										></textarea>
									</div>
									<div class="my-3">
										<div class="loading">Loading</div>
										<div class="error-message"></div>
										<div class="sent-message">
											Your message has been sent. Thank
											you!
										</div>
									</div>
									<div class="text-center">
										<button type="submit">
											Send Message
										</button>
									</div>
								</form>
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
										<h3>Gymnazien</h3>
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
												href={"/contact"}
												className="twitter"
											>
												<i className="bx bxl-twitter"></i>
											</a>
											<a
												href={"/contact"}
												className="facebook"
											>
												<i className="bx bxl-facebook"></i>
											</a>
											<a
												href={"/contact"}
												className="instagram"
											>
												<i className="bx bxl-instagram"></i>
											</a>
											<a
												href={"/contact"}
												className="google-plus"
											>
												<i className="bx bxl-skype"></i>
											</a>
											<a
												href={"/contact"}
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
								<span>Gymnazien</span>
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
