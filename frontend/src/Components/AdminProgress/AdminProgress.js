import React, { Component } from 'react';
import Applicants from './Applicants';
import Steps from './Steps';

import './AdminProgress.css';

class AdminProgress extends Component {
  state = {
    showDetails: false,
    showSteps: false,
  };

  showDetailsHandler = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };

  showStepsHandler = () => {
    this.setState({
      showSteps: !this.state.showSteps,
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <Applicants
            show={this.state.showDetails}
            toggle={this.showDetailsHandler}
          />
        </div>

        <div className="card-body">
          <Steps toggle={this.showStepsHandler} show={this.state.showSteps} />
        </div>
      </div>
    );
  }
}

export default AdminProgress;
