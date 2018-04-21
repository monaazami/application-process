import React from 'react';

const ApplicantStep = ({ details, stepNumber }) => {
	return (
    <article>
      <h4>Step {stepNumber}</h4>
      <p>{details}</p>
      <p> No submitted link yet </p>
      <button disabled> Approve </button>
      <button disabled> Reject </button>
    </article>
  );
};

export default ApplicantStep;