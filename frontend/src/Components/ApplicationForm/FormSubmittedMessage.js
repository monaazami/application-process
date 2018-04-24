import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const FormSubmittedMessage = ({ submitted, hideThankyouMessage, fullName, email, id }) => {
  console.log('id', id);
  console.log('submitted', submitted);
  return (
    <div className={classnames('container text-center', {
      'block': (submitted === true),
      'hidden': (submitted === false)
    })}>
      <button type="button" className="close" aria-label="Close" onClick={hideThankyouMessage}>
        <span aria-hidden="true">&times;</span>
      </button>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg"
        alt="green tick"
        height="150"
        width="150"
        className="img-fluid mt-5 pt-4"
      />
      <h1 className="mt-5 pb-3 display-5">Thank you, {fullName}! </h1>
      <h3 className="pt-4 pb-3 display-5">
        Your detail have been submitted sucessfully. We have send an  email on {email}. Please check your email.
      </h3>
      <p> Here is a link to your dashboard <Link to={`/applicant-dashboard/${id}`} onClick={hideThankyouMessage}> Link yo your personal dashboard </Link></p>
    </div>
  );
};

export default FormSubmittedMessage;
