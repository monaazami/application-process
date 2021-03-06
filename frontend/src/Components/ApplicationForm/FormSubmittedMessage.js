import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const FormSubmittedMessage = ({ submitted, hideThankyouMessage, fullName, email, id }) => {
  return (
    <div className={classnames('container text-center', {
      'block': (submitted === true),
      'hidden': (submitted === false)
    })}>
      <button type='button' className='close' aria-label='Close' onClick={hideThankyouMessage}>
        <span aria-hidden='true'>&times;</span>
      </button>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg'
        alt='green tick'
        height='150'
        width='150'
        className='img-fluid mt-5 pt-4'
      />
      <h2 className='mt-5 pb-3 display-5'>Thank you, {fullName}! </h2>
      <p className='pt-4 pb-3 display-5 thanks-message'>
        Your detail have been submitted sucessfully.
      </p>
      <p className='link-message'> Here is a link to your dashboard: <Link to={`/applicant-dashboard/${id}`} onClick={hideThankyouMessage}> Click here! </Link></p>
      <p className='important-message'> <b>Important!</b> Copy and save this link to access your dashboard in the future </p>
    </div>
  );
};

export default FormSubmittedMessage;
