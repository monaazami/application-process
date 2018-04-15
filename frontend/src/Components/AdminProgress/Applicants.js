import React, { Fragment } from 'react';
import ApplicantDetails from './ApplicantDetails';

const applicant = props => (
  <Fragment>
    <div className="Applicant-details">
      <p>
        <i className="fa fa-user-circle" /> <span> Alice </span>
      </p>
      {props.show ? (
        <i className="fa fa-angle-down" onClick={props.toggle}>icon
        </i>
        ) : (
          <i className="fa fa-angle-up rotate-icon" onClick={props.toggle}>
            
          </i>
        )}
    </div>
    <ApplicantDetails show={props.show} />
  </Fragment>
  );

export default applicant;
