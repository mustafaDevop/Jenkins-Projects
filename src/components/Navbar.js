import React from 'react'
import Logo from "../images/logo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
	return (
		<div>
			<header className="header">
				<div className="main-menu sticky-header">
					<div className="main-menu-inner">
						<div className="main-menu-left">
							<div className="main-menu-logo">
								<a href="index-2"><img src={Logo} alt="logo" width="140" /></a>
							</div>
							<div className="navigation">
								<ul className="main-menu-list list-unstyled">
									<li className="active">
										<a href="/">Home</a>
									</li>
									<li><a href="about">About</a></li>
									<li><a href="about">Applications</a></li>
									<li><a href="about">Trainings</a></li>
									<li><a href="faqs">FAQs</a></li>
									<li><a href="petitions">Petitions</a></li>
									<li><a href="contact">Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="main-menu-right">
							<div className="mobile-menu-button mobile-nav-toggler">
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div className="search-box">
								<a href="/" className="search-toggler">
									<i className="flaticon-search-interface-symbol"></i>
								</a>
							</div>
							<div className="main-menu-right-button">
								<a href="login" className="btn btn-primary">Login to OCP</a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Navbar