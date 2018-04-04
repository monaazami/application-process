import React, { Component } from 'react';
import AdminProgress from './Components/AdminProgress/AdminProgress';

import './App.css';
import ApplicantDashboard from '../src/ApplicantDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdminProgress />        
      </div>
    );
  }
}

export default App;
