import React from 'react';
import logo from '../../logo-cyf.png';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand">
			<img src={logo} alt="logo" width="170" />
		</a>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
				<li className="nav-item active">
					<Link to="/">Application-form</Link>
				</li>
				<li className="nav-item">
					<Link to="/applicant-dashboard">Applicant-dashboard</Link>
				</li>
				<li className="nav-item">
					<Link to="/admin-general">Admin-General</Link>
				</li>
				<li className="nav-item">
					<Link to="/admin-progress">Admim-Progress</Link>
				</li>
				<li className="nav-item">
					<Link to="/form-submitted-message">Form-submitted-message</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
