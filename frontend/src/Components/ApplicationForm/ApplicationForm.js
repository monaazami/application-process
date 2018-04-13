import React, { Component } from 'react';
import axios from 'axios';

class ApplicationForm extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			city: '',
			contactNum: '',
			immigrationStatus: 'Yes',
			country: '',
			programmingExperience: 'None',
			computerAccess: 'Yes',
			howYouHearUs: '',
		};
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const {
			name,
			email,
			city,
			contactNum,
			immigrationStatus,
			country,
			programmingExperience,
			computerAccess,
			howYouHearUs,
		} = this.state;

		console.log(
			name,
			email,
			city,
			contactNum,
			immigrationStatus,
			country,
			programmingExperience,
			computerAccess,
			howYouHearUs
		);

		axios
			.post('http://localhost:3001/api/formdata', {
				name,
				email,
				city,
				contactNum,
				immigrationStatus,
				country,
				programmingExperience,
				computerAccess,
				howYouHearUs,
			})
			.then(res => {
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	};
	render() {
		return (
			<div className="application-form container">
				<h1 className="text-center mt-5 pt-4 pb-3 display-5">Student Application Form</h1>
				<form
					className="mb-4 mt-5"
					action="http://localhost:3001/api/formdata"
					onSubmit={this.handleSubmit}
					method="post"
				>
					<div className="form-group  mt-5">
						<label htmlFor="name" className="lead">
							Name *
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="form-control form-control-lg"
							placeholder="What's your name?"
							value={this.state.name}
							required
							onChange={this.onChange}
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
							placeholder="What's your email address?"
							value={this.state.email}
							required
							onChange={this.onChange}
						/>
						<small className="form-text text-muted">We&#39;ll never share your email with anyone else.</small>
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
							placeholder="In what city you live in?"
							value={this.state.city}
							required
							onChange={this.onChange}
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
							placeholder="Enter your contact number"
							value={this.state.contactNum}
							required
							onChange={this.onChange}
						/>
						<small className="form-text text-muted">E.g., 07712345678 or 02079460637</small>
					</div>

					<div className="form-group  mt-5">
						<label htmlor="immigrationStatus" className="lead">
							Are you an asylum seeking or a refugee? *
						</label>
						<select
							className="form-control form-control-lg"
							id="immigrationStatus"
							name="immigrationStatus"
							value={this.state.immigrationStatus}
							required
							onChange={this.onChange}
						>
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
							placeholder="Where are you from?"
							value={this.state.country}
							required
							onChange={this.onChange}
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
							name="programmingExperience"
							value={this.state.programmingExperience}
							required
							onChange={this.onChange}
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
						<select
							className="form-control form-control-lg"
							id="computerAccess"
							name="computerAccess"
							value={this.state.computerAccess}
							required
							onChange={this.onChange}
						>
							<option>Yes</option>
							<option>No</option>
						</select>
						<small className="form-text text-muted">Please select yes or no</small>
					</div>
					<div className="form-group  mt-5">
						<label htmlFor="howYouHearUs" className="lead">
							How did you hear about us? *
						</label>
						<input
							type="text"
							id="howYouHearUs"
							name="howYouHearUs"
							className="form-control form-control-lg"
							placeholder="How did you come across this course?"
							value={this.state.howYouHearUs}
							required
							onChange={this.onChange}
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
