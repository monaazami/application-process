import React from 'react';

const StatusMessage = ({ status }) => <span>Status: <b className={(status === 'Approved') ? 'msg-approved' : 'msg'}>{status}</b></span>;

export default StatusMessage;
