import React from 'react';
import StatusMessage from './StatusMessage';

const DashboardStep = ({ stepNumber, details }) => {
  let submitBlock;
  if (stepNumber !== 0) {
    submitBlock = (
      <div>
        <input type='text' placeholder='Add url here' required />
        <button className='btn btn-secondary' type='submit'>Submit step</button>
      </div>
    );
  }
  return (
    <section className='dashboard-step'>
      <h3>Step {stepNumber}</h3>
      <p><b>{details}</b></p>
      {submitBlock}
      <StatusMessage status={stepNumber !== 0 ? '' : 'Approved'} />
    </section>
  );
};

export default DashboardStep;
