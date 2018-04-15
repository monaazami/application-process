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
		const applicants = this.state.applicants;
		let applicantsList = applicants.map(function(applicant, i) {
			return <ApplicantItem 	
						id={applicant.id}
						firstname={applicant.firstname}
						surname={applicant.surname}
						email={applicant.email}
						city={applicant.city}
						status={applicant.status}
						experience={applicant.experience}
						itAccess={applicant.itAccess}
						key={i}
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