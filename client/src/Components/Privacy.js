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
								<h3>Privacy Policy</h3>
								<p class="fst-italic">
									This privacy policy sets out how Gurukrupa
									Enterprises uses and protects any
									information that you give Gurukrupa
									Enterprises when you use this website.
									Gurukrupa Enterprises is committed to
									ensuring that your privacy is protected.
									Should we ask you to provide certain
									information by which you can be identified
									when using this website, and then you can be
									assured that it will only be used in
									accordance with this privacy statement.
									Gurukrupa Enterprises may change this policy
									from time to time by updating this page. You
									should check this page from time to time to
									ensure that you are happy with any changes.
									This policy is effective from [13-02-2021].
								</p>
								<ul>
									<li>
										<i class="bi bi-check"></i> We require
										this information to understand your
										needs and provide you with a better
										service, and in particular for the
										following reasons:
									</li>
									<li>
										<i class="bi bi-check"></i> Internal
										record keeping
									</li>
									<li>
										<i class="bi bi-check"></i> We may use
										the information to improve our products
										and services.
									</li>
									<li>
										<i class="bi bi-check"></i> We may
										periodically send promotional emails
										about new products, special offers or
										other information which we think you may
										find interesting using the email address
										which you have provided.
									</li>
								</ul>
								<p>
									From time to time, we may also use your
									information to contact you for market
									research purposes. We may contact you by
									email, phone, fax or mail. We may use the
									information to customise the website
									according to your interests.
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
