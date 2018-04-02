import React, {Fragment} from 'react';

const ApplicantDetails = (props) => {
    
    return(
        <Fragment>
            <div className="Applicant-details">City: London</div>                                 
            {props.show ? 
                (<Fragment>
                    <div className="Applicant-details">Programming experience: Some</div> 
                    <div className="Applicant-details">Refuges? No</div>
                    <div className="Applicant-details">Tel: 26367484848</div>
                    <div className="Applicant-details">Email: sdfdddgh</div>
                    <div className="Applicant-details">Country: UK</div> 
                    <div className="Applicant-details">Address: 44 E2 LPV </div> 
                    <div className="Applicant-details">Referrer: </div>              
                </Fragment>) : null}
        </Fragment>  
    );
}

export default ApplicantDetails;