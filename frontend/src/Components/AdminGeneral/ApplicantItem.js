import React from 'react';
import { Link } from 'react-router-dom';

const ApplicantItem = ({id, fullName, email, city, status, experience, itAccess}) => {
	return(
		<tr>
			<td><Link to={`/applicants/${id}`}>{fullName}</Link></td>
			<td>{city}</td>
			<td className={status ? 'sucess' : 'danger'}>{status ? 'yes' : 'no'}</td>
			<td>{experience}</td>
			<td>{itAccess ? 'yes' : 'no'}</td>
			<td> Step 0 </td>
		</tr>
	)
}

export default ApplicantItem;