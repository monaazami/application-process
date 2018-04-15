import React from 'react';

const ApplicantItem = ({firstname, surname, email, city, status, experience, itAccess}) => {
	return(
		<tr>
			<td>{firstname}</td>
			<td>{surname}</td>
			<td>{city}</td>
			<td className={status ? 'sucess' : 'danger'}>{status ? 'yes' : 'no'}</td>
			<td>{experience}</td>
			<td>{itAccess ? 'yes' : 'no'}</td>
			<td> Step 0 </td>
		</tr>
	)
}

export default ApplicantItem;