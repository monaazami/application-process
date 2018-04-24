import React from 'react';
import stepsArray from './stepsArray';
import DashboardStep from './DashboardStep';
import './ApplicantDashboard.css';

const ApplicantDashboard = () => (
  <section className='applicant-dashboard'>
    <h2>Your Progress</h2>
    {stepsArray.map((step, i) => (
      <DashboardStep stepNumber={step.step} details={step.details} key={i} />
    ))}
  </section>
);

export default ApplicantDashboard;
