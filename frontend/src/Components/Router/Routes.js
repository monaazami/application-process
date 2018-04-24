import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import ApplicantDashboard from '../ApplicantDashboard/ApplicantDashboard';
import FormSubmittedMessage from '../ApplicationForm/FormSubmittedMessage';
import AdminGeneral from '../AdminGeneral/AdminGeneral';
import ApplicantProgress from '../ApplicantProgress/ApplicantProgress';
import Navbar from './Navbar';

const Routes = () => (
	<Router>
		<div>
			<Navbar />
			<Route exact path="/" component={ApplicationForm} />
			<Route exact path="/applicant-dashboard" component={ApplicantDashboard} />
			<Route exact path="/applicants" component={AdminGeneral} />
			<Route exact path="/form-submitted-message" component={FormSubmittedMessage} />
			<Route path='/applicants/:id' component={ApplicantProgress} />
		</div>
	</Router>
);

export default Routes;