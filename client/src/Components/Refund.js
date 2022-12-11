import React from "react";

import NavbarComponent from "../Components/Navbar.js";

class Test extends React.Component {
	render() {
		return (
			<div>
				<header className="page-header">
					<NavbarComponent></NavbarComponent>
				</header>

				<section id="details" class="details">
					<div class="container">
						<div class="row content">
							<div
								class="col-md-4 aos-init aos-animate"
								data-aos="fade-right"
							>
								<img
									src="assets/img/details-1.png"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div
								class="col-md-8 pt-4 aos-init aos-animate"
								data-aos="fade-up"
							>
								<h3>Security Policies</h3>
								<p class="fst-italic">
									We are committed to ensuring that your
									information is secure. In order to prevent
									unauthorised access or disclosure we have
									put in place suitable physical, electronic
									and managerial procedures to safeguard and
									secure the information we collect online.
								</p>
								<ul>
									<li>
										<i class="bi bi-check"></i>Our website
										may contain links to other websites of
										interest. However, once you have used
										these links to leave our site, you
										should note that we do not have any
										control over that other website.
										Therefore, we cannot be responsible for
										the protection and privacy of any
										information which you provide whilst
										visiting such sites and such sites are
										not governed by this privacy statement.
										You should exercise caution and look at
										the privacy statement applicable to the
										website in question..
									</li>
									<li>
										<i class="bi bi-check"></i> Controlling
										your personal information:
									</li>
								</ul>
								<p>
									whenever you are asked to fill in a form on
									the website, look for the box that you can
									click to indicate that you do not want the
									information to be used by anybody for direct
									marketing purposes
								</p>
								<p>
									if you have previously agreed to us using
									your personal information for direct
									marketing purposes, you may change your mind
									at any time by writing to or emailing us at
									[rajdhamdhere2112@gmail.com]
								</p>
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
										<h3>Gurukrupa EnterPrises</h3>
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
											8482848200<br></br>
											<strong>Email:</strong>{" "}
											mahesh.gurukrupa@gmail.com<br></br>
										</p>
										<div className="social-links mt-3">
											<a
												href={"/Efund"}
												className="twitter"
											>
												<i className="bx bxl-twitter"></i>
											</a>
											<a
												href={"/Efund"}
												className="facebook"
											>
												<i className="bx bxl-facebook"></i>
											</a>
											<a
												href={"/Efund"}
												className="instagram"
											>
												<i className="bx bxl-instagram"></i>
											</a>
											<a
												href={"/Efund"}
												className="google-plus"
											>
												<i className="bx bxl-skype"></i>
											</a>
											<a
												href={"/Efund"}
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
								<span>Gurukrupa EnterPrises</span>
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
