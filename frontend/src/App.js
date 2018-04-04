import React, { Component } from 'react';
import AdminProgress from './Components/AdminProgress/AdminProgress';

import './App.css';
import ApplicationForm from './components/ApplicationForm';
import FormSubmittedMessage from './components/FormSubmittedMessage';
class App extends Component {

  render() {
    return (
      <div className="App">
        < AdminProgress />        
      </div>
    );
  }

}

export default App;
