import React from 'react';
import StatusMessage from './StatusMessage';


const DashboardStep = ({ stepNumber, details, url, data, addUrl, submit, alert, step_status, index }) => {
  let submitBlock;
  let stat;
  data.map(step => {
    if (step.step_number === index) {
      stat = step.step_status;
    } 
  })

  if (stepNumber !== 0) {
    submitBlock = (
      <form onSubmit={submit} >
        <div className={stat ? 'hidden' : 'block'}>
          <input
            required
            type='text'
            placeholder='Add url here'
            name='url'
            value={url}
            onChange={addUrl}
          />
          <button className='btn btn-secondary' type='submit'>
            Submit step
          </button>
          <small id='emailHelp' className='form-text text-muted'>
            {alert}
          </small>
        </div>
      </form>
    );
  }

  return (
    <section className='dashboard-step'>
      <h3>Step {stepNumber}</h3>
      <p>
        <b>{details}</b>
      </p>
      {submitBlock}
      <StatusMessage stat={stat} stepNumber={stepNumber}/>
    </section>
  );
};

export default DashboardStep;
