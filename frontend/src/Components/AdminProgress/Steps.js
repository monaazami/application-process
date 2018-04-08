import React, {Fragment} from 'react';

const steps = (props) => (
    <Fragment>
        {props.show? 
        <div className="Step-Title">Application Steps <i className="fa fa-angle-down rotate-icon" onClick={props.toggle}></i></div>
        : <div className="Step-Title">Application Steps <i className="fa fa-angle-up rotate-icon" onClick={props.toggle}></i></div>}

        {props.show ? 
        <Fragment>
            <div className="Step">Website application 
                <span>
                    <input type="checkbox" aria-label="Checkbox for following text input"/> V
                    <input type="checkbox" aria-label="Checkbox for following text input"/> R
                    <input type="checkbox" aria-label="Checkbox for following text input"/> A
                </span>
            </div>

            <div className="Step">Khan Academy
                <span> 
                    <input type="checkbox" aria-label="Checkbox for following text input"/> V
                    <input type="checkbox" aria-label="Checkbox for following text input"/> R
                    <input type="checkbox" aria-label="Checkbox for following text input"/> A
                </span>
            </div>
            
            <div className="Step">Code Academy: HTML & CSS Tutorial 
                <span>
                    <input type="checkbox" aria-label="Checkbox for following text input"/> V
                    <input type="checkbox" aria-label="Checkbox for following text input"/> R
                    <input type="checkbox" aria-label="Checkbox for following text input"/> A
                </span>
            </div>

            <div className="Step"> Code Academy: Responsive Design Tutorial
                <span>
                    <input type="checkbox" aria-label="Checkbox for following text input"/> V
                    <input type="checkbox" aria-label="Checkbox for following text input"/> R
                    <input type="checkbox" aria-label="Checkbox for following text input"/> A
                </span>
            </div>

            <div className="Step">Create a Web Page
                <span>
                    <input type="checkbox" aria-label="Checkbox for following text input"/> V
                    <input type="checkbox" aria-label="Checkbox for following text input"/> R
                    <input type="checkbox" aria-label="Checkbox for following text input"/> A
                </span>
            </div> 

            <div className="Step">Iterate a Web Page
                <span>
                    <input type="checkbox" aria-label="Checkbox for following text input"/>V
                    <input type="checkbox" aria-label="Checkbox for following text input"/> R
                    <input type="checkbox" aria-label="Checkbox for following text input"/> A
                </span>
            </div> 

            <div className="Step">Welcome – Start of the Course
                <span>
                    <input type="checkbox" aria-label="Checkbox for following text input"/>V
                    <input type="checkbox" aria-label="Checkbox for following text input"/> R
                    <input type="checkbox" aria-label="Checkbox for following text input"/> A
                </span>
            </div> 

        </Fragment> : null}
       
    </Fragment>
) ;

export default steps;