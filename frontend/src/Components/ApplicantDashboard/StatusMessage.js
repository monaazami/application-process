import React from 'react';
import classnames from 'classnames';

const StatusMessage = ({ status, stepNumber }) => {
	if (stepNumber === 0) {
		return (
			<span>Status: 
				<b className='msg-approved'> Approved </b>
			</span>
			);	
		} else {
			return (
				<span>Status: 
					<b className={classnames({
					'msg-approved': (status === 'Approved'),
					'msg-reject': (status === 'Reject'),
					'msg-submitted': (status === 'Submitted'),
					'msg-unsubmitted': (status === false)
						})}
					> {status ? status : 'Not submitted'}
					</b>
				</span>
				);
		}
}

export default StatusMessage;
