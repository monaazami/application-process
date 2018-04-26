import React from 'react';
import classnames from 'classnames';

const StatusMessage = ({ stat }) => 
	<span>Status: 
		<b className={classnames({
		'msg-approved': (stat === 'Approved'),
		'msg-reject': (stat === 'Reject'),
		'msg-submit': (stat === 'submitted'),
		'msg-unsubmitted': (stat === false)
			})}
		> {stat ? stat : 'Not submitted'}
		</b>
	</span>;

export default StatusMessage;
