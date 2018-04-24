import React from 'react';
import './ApplicantProgress.css';

const ApplicantStep = ({ details, stepNumber }) => {
	let reviewBlock;
	if (stepNumber !== 0) {
		reviewBlock = ( 
		    <div className='d-flex justify-content-between'>
			    <div>
			      <p> <b>{details}</b> </p>
			      <p> No submitted link yet </p>
		      </div>
		      <div>
			      <button className='btn-success' disabled> Approve </button>
			      <button className='btn-danger'disabled> Reject </button>
		      </div>
	      </div>   
    );
	} else {
		reviewBlock = (
			<div>
				<p> <b>{details}</b> </p>
				<p> Approved </p>
			</div>
		)
	}

	return(
		<article className='progress-step'>
			    <h4> Step {stepNumber} </h4>
			    {reviewBlock}
	 	</article>
  );
};

export default ApplicantStep;