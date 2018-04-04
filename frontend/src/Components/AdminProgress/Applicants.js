import React, { Fragment } from 'react';
import ApplicantDetails from './ApplicantDetails';

const applicant = (props) => {

    return(
        <Fragment>
            <div className="Applicant-details">
                <p> <i className="fa fa-user-circle"></i> <span> Alice </span> </p>
                {props.show?<i class="fa fa-angle-down" onClick={props.toggle}> </i>                
                : <i className="fa fa-angle-up rotate-icon" onClick={props.toggle}> </i> }
            </div>
            <ApplicantDetails show={props.show}/>
        </Fragment>
    );

}

export default applicant;