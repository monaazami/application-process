import React from 'react';

const ApplicantItem = ({
  fullName,
  email,
  city,
  status,
  experience,
  itAccess,
}) => (
  <tr>
    <td>{fullName}</td>
    <td>{city}</td>
    <td className={status ? 'sucess' : 'danger'}>{status ? 'yes' : 'no'}</td>
    <td>{experience}</td>
    <td>{itAccess ? 'yes' : 'no'}</td>
    <td> Step 0 </td>
  </tr>
  );

export default ApplicantItem;
