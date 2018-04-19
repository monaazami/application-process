import React from 'react';
import stepsArray from './stepsArray';
import DashboardStep from './DashboardStep';

const ApplicantDashboard = () => (
	<section>
		<h2>Your Progress</h2>
		{stepsArray.map((step, i) => 
			<DashboardStep 
				stepNumber={step.step}
				details={step.details}
				key={i}
			/>
		)}
	</section>
);


export default ApplicantDashboard;