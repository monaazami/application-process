import React from 'react';
import StatusMessage from './StatusMessage';

const DashboardStep = ({ stepNumber, details, url, addUrl}) => {
  let submitBlock;
  if (stepNumber !== 0) {
    submitBlock = (
      <form>
        <div className="form-group">
          <input
            required          
            type="text"
            placeholder="Add url here"
            name="url"
            value={url}
            onChange={addUrl}
          />
          <button className="btn btn-secondary" type="submit">
            Submit step
          </button>
          <small id="emailHelp" class="form-text text-muted">Please make sure the link you have provided is revelant to this step and valid.</small>
        </div>
      </form>
    );
  }
  return (
    <section className="dashboard-step">
      <h3>Step {stepNumber}</h3>
      <p>
        <b>{details}</b>
      </p>
      {submitBlock}
      <StatusMessage status={stepNumber !== 0 ? '' : 'Approved'} />
    </section>
  );
};

export default DashboardStep;
