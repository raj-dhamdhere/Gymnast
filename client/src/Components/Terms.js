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
								<h3>Terms And Conditions</h3>
								<p class="fst-italic">
									Welcome to our website. If you continue to
									browse and use this website you are agreeing
									to comply with and be bound by the following
									terms and conditions of use, which together
									with our privacy policy govern [Gurukrupa
									Enterprises]'s relationship with you in
									relation to this website. The term
									'[Gurukrupa Enterprises]' or 'us' or 'we'
									refers to the owner of the website whose
									registered office is [survey no 43/7 karan
									park , Somnath nagar , Wadgaon sheri]. The
									term 'you' refers to the user or viewer of
									our website.
								</p>
								<ul>
									<li>
										<i class="bi bi-check"></i> The content
										of the pages of this website is for your
										general information and use only. It is
										subject to change without notice.
									</li>
									<li>
										<i class="bi bi-check"></i> Neither we
										nor any third parties provide any
										warranty or guarantee as to the
										accuracy, timeliness, performance,
										completeness or suitability of the
										information and materials found or
										offered on this website for any
										particular purpose. You acknowledge that
										such information and materials may
										contain inaccuracies or errors and we
										expressly exclude liability for any such
										inaccuracies or errors to the fullest
										extent permitted by law.
									</li>
									<li>
										<i class="bi bi-check"></i>Your use of
										any information or materials on this
										website is entirely at your own risk,
										for which we shall not be liable. It
										shall be your own responsibility to
										ensure that any products, services or
										information available through this
										website meet your specific requirements.
									</li>
									<li>
										<i class="bi bi-check"></i> This website
										contains material which is owned by or
										licensed to us. This material includes,
										but is not limited to, the design,
										layout, look, appearance and graphics.
										Reproduction is prohibited other than in
										accordance with the copyright notice,
										which forms part of these terms and
										conditions.
									</li>
								</ul>
								<p>
									All trade marks reproduced in this website
									which are not the property of, or licensed
									to, the operator are acknowledged on the
									website.
								</p>
								<p>
									We as a merchant shall be under no liability
									whatsoever in respect of any loss or damage
									arising directly or indirectly out of the
									decline of authorization for any
									Transaction, on Account of the Cardholder
									having exceeded the preset limit mutually
									agreed by us with our acquiring bank from
									time to time
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
