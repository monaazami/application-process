import React from 'react';
import stepsArray from './stepsArray';
import DashboardStep from './DashboardStep';
import './ApplicantDashboard.css';

class ApplicantDashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			id: props.match.params.id
		}
	}
	componentDidMount() {
		this.getData(this.state.id)
	}

	getData = (id) => {
		fetch(`http://localhost:3001/api/dashboard/${id}`)
		.then(results => results.json())
		.then(data => {
			this.setState({
				data: data.data
			})
		})
		.catch(err => console.log(err))
	}

	render() {
		return(
			<section className='applicant-dashboard'>
	    <h2>Your Progress</h2>
	    {stepsArray.map((step, i) => (
	      <DashboardStep stepNumber={step.step} details={step.details} key={i} data={this.state.data}/>
	    ))}
	  	</section>
		)};
};

export default ApplicantDashboard;
