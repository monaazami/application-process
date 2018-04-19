import React, { Component } from 'react';

class ApplicationForm extends Component {
	render() {
		return (
			<div className="application-form container">
				<h1 className="text-center mt-5 pt-4 pb-3 display-5">Student Application Form</h1>
				<form className="mb-4 mt-5">
					<div className="form-group  mt-5">
						<label htmlFor="name" className="lead">
							Name *
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="form-control form-control-lg"
							placeholder="What's your name?" required
						/>
						<small className="form-text text-muted">Please enter your first and last names.</small>
					</div>
					<div className="form-group  mt-5">
						<label htmlFor="email" className="lead">
							Email Address *
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="form-control form-control-lg"
							placeholder="What's your email address?" required
						/>
						<small className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group  mt-5">
						<label htmlFor="city" className="lead">
							City *
						</label>
						<input
							type="text"
							id="city"
							name="city"
							className="form-control form-control-lg"
							placeholder="In what city you live in?" required
						/>
						<small id="emailHelp" className="form-text text-muted">
							E.g., London or Manchester
						</small>
					</div>
					<div className="form-group  mt-5">
						<label htmlor="contactNum" className="lead">
							Contact Number *
						</label>
						<input
							type="tel"
							name="contactNum"
							className="form-control form-control-lg"
							id="contactNum"
							placeholder="Enter your contact number" required
						/>
						<small className="form-text text-muted">E.g., 07712345678 or 02079460637</small>
					</div>

					<div className="form-group  mt-5">
						<label htmlor="immigrationStatus" className="lead">
							Are you an asylum seeking or a refugee? *
						</label>
						<select className="form-control form-control-lg" id="immigrationStatus" name="immigrationStatus" required>
							<option>Yes</option>
							<option>No</option>
						</select>
						<small className="form-text text-muted">Please select yes or no</small>
					</div>

					<div className="form-group  mt-5">
						<label htmlFor="country" className="lead">
							Country *
						</label>
						<input
							type="text"
							id="country"
							name="country"
							className="form-control form-control-lg"
							placeholder="Where are you from?" required
						/>
						<small className="form-text text-muted">E.g., Iran or Sudan</small>
					</div>
					<div className="form-group  mt-5">
						<label htmlor="programmingExperience" className="lead">
							Programming Experience *
						</label>
						<select
							className="form-control form-control-lg"
							id="programmingExperience"
							name="programmingExperience" required
						>
							<option>None</option>
							<option>Basic</option>
							<option>Intermidiate</option>
							<option>Advance</option>
						</select>
						<small className="form-text text-muted">
							Please select the level of your programming skill
						</small>
					</div>
					<div className="form-group  mt-5">
						<label htmlFor="computerAccess" className="lead">
							Do you have access to a computer and the internet? *
						</label>
						<select className="form-control form-control-lg" id="computerAccess" name="computerAccess" required>
							<option>Yes</option>
							<option>No</option>
						</select>
						<small className="form-text text-muted">Please select yes or no</small>
					</div>
					<div className="form-group  mt-5">
						<label htmlFor="howYouFindUs" className="lead">
							How did you hear about us? *
						</label>
						<input
							type="text"
							id="howYouFindUs"
							name="howYouFindUs"
							className="form-control form-control-lg"
							placeholder="How did you come across this course?" required
						/>
						<small className="form-text text-muted">
							E.g., from your friends or council or inernet search
						</small>
					</div>
					<button type="submit" className="btn btn-primary mt-2">
						Submit Application
					</button>
				</form>
			</div>
		);
	}
}

export default ApplicationForm;
