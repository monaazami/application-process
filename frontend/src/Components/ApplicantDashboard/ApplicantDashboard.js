import React, {Component} from 'react';
import stepsArray from './stepsArray';
import DashboardStep from './DashboardStep';
import './ApplicantDashboard.css';

class ApplicantDashboard extends Component {
  state={
    steps: stepsArray,
    disable: false,
  }
 
  submitUrlHandler = (e, id) => {
    const stepIndex = this.state.steps.findIndex(myStep => {
      return myStep.step === id;
    })
    const step = {
      ...this.state.steps[stepIndex]
    };
    step.url= e.target.value;
    const steps = [...this.state.steps];
    steps[stepIndex] = step;
    this.setState({
     steps: steps
    });
  };

  render(){
    return(
      <section className='applicant-dashboard'>
        <h2>Your Progress</h2>
        {this.state.steps.map((step, i) => (
          <DashboardStep 
          stepNumber={step.step} 
          details={step.details}
          url={this.state.steps[i].url} 
          addUrl={(e) => this.submitUrlHandler(e, step.step)}
          key={i} />
        ))}
      </section>
    );
  }
}

export default ApplicantDashboard;
