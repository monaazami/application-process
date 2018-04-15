import React from 'react';
import ApplicantItem from './ApplicantItem';

import './AdminGeneral.css';

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
						firstname={applicant.firstname}
						surname={applicant.surname}
						city={applicant.city}
						status={applicant.status}
						experience={applicant.experience}
						itAccess={applicant.itAccess}
						key={i}
					/>	
			})
		return (
			<table className='applicants-table table-bordered'>
				<thead>
					<tr>
						<th>FirstName</th>
						<th>Surname</th>
						<th>City</th>
						<th>Refugee</th>
						<th>Experience</th>
						<th>IT Access</th>
						<th>Progress</th>
					</tr>
				</thead>
				<tbody>
					{applicantsList}
				</tbody>		
			</table>
		);
	}
}

export default AdminGeneral;