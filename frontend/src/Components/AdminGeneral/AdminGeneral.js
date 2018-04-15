import React from 'react';
import ApplicantItem from './ApplicantItem';

class AdminGeneral extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			applicants: []
		}

		this.getListofApplicants = this.getListofApplicants.bind(this);
	}

	componentDidMount() {
		this.getListofApplicants()
	}

	getListofApplicants() {
		fetch(`http://localhost:3001/api/applicants`)
		.then(results => results.json())
		.then(data => {
			this.setState({
				applicants: data.fakeApplicants
			})
		})
		.catch(err => console.log(err))
	}

	render() {
		console.log(this.state.applicants);
		const applicants = this.state.applicants;
		console.log('render',applicants);
		let applicantsList = applicants.map(function(applicant) {
			return <ApplicantItem 	
						id={applicant.id}
						firstname={applicant.firstname}
						surname={applicant.surname}
						email={applicant.email}
						city={applicant.city}
						status={applicant.status}
						experience={applicant.experience}
						itAccess={applicant.itAccess}
					/>	
			})
		return (
			<section className='applicants-list'>
				<ul>
					{applicantsList}
				</ul>
			</section>
		);
	}
}

export default AdminGeneral;