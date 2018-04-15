import React from 'react';

const ApplicantItem = ( {id, firstname, surname, email, city, status, experience, itAccess} ) => {
	return(
		<li>
			<p>{id}</p>
			<p>{firstname}</p>
			<p>{surname}</p>
			<p>{email}</p>
			<p>{city}</p>
			<p>{status}</p>
			<p>{experience}</p>
			<p>{itAccess}</p>
		</li>
	)
}

export default ApplicantItem;