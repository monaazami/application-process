import React from 'react';
import helpers from '../../helpers'
import ApplicantStep from './ApplicantStep';
import './ApplicantProgress.css';

class ApplicantProgress extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			applicantData: [],
			id: props.match.params.id,
			progress: []
		}
	}
	componentDidMount() {
		this.getApplicantData(this.state.id)
		this.getProgressData(this.state.id)
	}

	getApplicantData = (id) => {
		fetch(`http://localhost:3001/api/applicants/${id}`)
		.then(results => results.json())
		.then(data => {
			this.setState({
				applicantData: data.applicants[0]
			})
		})
		.catch(err => console.log(err))
	}

	getProgressData = (id) => {
		fetch(`http://localhost:3001/api/dashboard/${id}`)
		.then(results => results.json())
		.then(data => {
			this.setState({
				progress: data.data
			})
		})
		.catch(err => console.log(err))
	}

	render() {
		const data = this.state.applicantData;
		return (
			<div>
				<section className='applicant-detailed'>
					<h3> Detailed Information </h3>
					<p> <b> Full Name: </b> {data.fullName} </p>
					<p> <b> Email: </b> {data.email} </p>
					<p> <b> City: </b> {data.city} </p>
					<p> <b> Phone number: </b> {data.tel} </p>
					<p> <b> Refugee: </b> {data.status ? 'Yes' : 'No'} </p>
					<p> <b> Country of origin: </b> {data.country} </p>
					<p> <b> Experience: </b> {data.experience} </p>
					<p> <b> Access to computer and internet: </b> {data.itAccess} </p>
					<p> <b> Heard about CYF: </b> {data.hearAbout} </p>
				</section>
				<section className='applicant-progress'>
					<h3> Progress </h3>
					{helpers.stepsArray.map((step, i) => (
						<ApplicantStep stepNumber={step.step} details={step.details} key={i} progress={this.state.progress} index={i}/>
					))}
				</section>
			</div>
		)
	}
	
}

export default ApplicantProgress;