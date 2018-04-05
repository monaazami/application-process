import React from 'react';

const FormSubmittedMessage = () => {
	return (
		<div className="container text-center">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg"
				alt="green tick image"
				height="150"
				width="150"
				className="img-fluid mt-5 pt-4"
			/>
			<h1 className="mt-5 pb-3 display-5">Thank you!</h1>
			<h3 className="pt-4 pb-3 display-5">Your detail have been submitted sucessfully.</h3>
		</div>
	);
};

export default FormSubmittedMessage;
