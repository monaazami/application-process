import React, { Component } from 'react';
import AdminProgress from './Components/AdminProgress/AdminProgress';
import ApplicantDashboard from './Components/ApplicantDashboard/ApplicantDashboard';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import FormSubmittedMessage from './Components/ApplicationForm/FormSubmittedMessage';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ApplicationForm />
        <FormSubmittedMessage />
        <AdminProgress /> 
        <ApplicantDashboard />       
      </div>
    );
  }

}

export default App;
