import React from 'react';
import stepsArray from '../ApplicantDashboard/stepsArray';
import ApplicantStep from './ApplicantStep';

class ApplicantProgress extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			applicantData: [],
			id: 5
		}
	}
	componentDidMount() {
		this.getApplicantData(5)
	}

	getApplicantData = (id) => {
		fetch(`http://localhost:3001/api/applicants/${id}`)
		.then(results => results.json())
		.then(data => {
			this.setState({
				applicantData: data.applicants
			})
		})
		.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<section className='applicant-detailed'>
					<h3> Detailed Information </h3>
					<p> Full Name: {this.state.applicantData.fullName} </p>
				</section>
				<section className='applicant-progress'>
					<h3> Progress </h3>
					{stepsArray.map((step, i) => {
						<ApplicantStep stepNumber={step.step} details={step.details} key={i} />
					})}
				</section>
			</div>
		)
	}
	
}

export default ApplicantProgress;