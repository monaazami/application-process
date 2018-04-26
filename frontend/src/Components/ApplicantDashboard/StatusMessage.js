import React from 'react';
import classnames from 'classnames';

const StatusMessage = ({ stat, stepNumber }) => {
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
					'msg-approved': (stat === 'Approved'),
					'msg-reject': (stat === 'Reject'),
					'msg-submitted': (stat === 'Submitted'),
					'msg-unsubmitted': (stat === false)
						})}
					> {stat ? stat : 'Not submitted'}
					</b>
				</span>
				);
		}
}

export default StatusMessage;
