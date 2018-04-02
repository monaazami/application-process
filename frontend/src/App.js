import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationForm from './components/ApplicationForm';
import FormSubmittedMessage from './components/FormSubmittedMessage';
class App extends Component {
	render() {
		return (
			<div className="App">
        
        {/* rending the ApplicationForm */}
        <ApplicationForm />

        {/* rending the FormSubmittedMessage */}
        <FormSubmittedMessage />

			</div>
		);
	}
}

export default App;
