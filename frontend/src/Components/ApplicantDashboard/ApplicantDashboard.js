import React, {Component} from 'react';
import DashboardStep from './DashboardStep';
import helpers from '../../helpers'

import './ApplicantDashboard.css';

class ApplicantDashboard extends Component {
  state={
    steps: helpers.stepsArray,
    disable: false,
  }
 
  addUrlHandler = (e, id) => {  
    const stepIndex = this.state.steps.findIndex(myStep => {
      return myStep.step === id;
    })
    const step = {
      ...this.state.steps[stepIndex]
    };
    step.url= e.target.value;
    const steps = [...this.state.steps];
    steps[stepIndex].url = e.target.value;
    this.setState({ steps: steps });
    if (helpers.ValidURL(step.url) && (helpers.containPartOf(step.url, step.link) !== -1)) {
      step.alert = 'Valid';
      const steps = [...this.state.steps];
      steps[stepIndex] = step;
      this.setState({ steps: steps });
    } else if (helpers.ValidURL(step.url) && (helpers.containPartOf(step.url, step.link) === -1)){
        step.alert = 'Please make sure the link is valid and relevant to this step. ';
        const steps = [...this.state.steps];
        steps[stepIndex] = step; 
        this.setState({ steps: steps });
      } else { 
        step.alert = 'Please make sure the link is valid and relevant to this step. ';
        const steps = [...this.state.steps];         
        steps[stepIndex] = step; 
        this.setState({ steps: steps,});
      }
    
  };

  submitUrlHandler = (e, id) => {
    e.preventDefault();
    const stepIndex = this.state.steps.findIndex(myStep => {
      return myStep.step === id;
    })
    const step = {
      ...this.state.steps[stepIndex]
    };
    
    if (helpers.ValidURL(step.url) && (helpers.containPartOf(step.url, step.link) !== -1)) {
      step.alert = '';
      const steps = [...this.state.steps];
      steps[stepIndex] = step;
      this.setState({ steps: steps });
    } else if (helpers.ValidURL(step.url) && (helpers.containPartOf(step.url, step.link) === -1)){
      step.url = '';
      step.alert = 'Please make sure the link is valid and relevant to this step. ';
      const steps = [...this.state.steps];
      steps[stepIndex] = step; 
      this.setState({ steps: steps });
    } else { 
      const steps = [...this.state.steps]; 
      step.url = '';
      step.alert = 'Please make sure the link is valid and relevant to this step. ';
      steps[stepIndex] = step; 
      this.setState({ steps: steps,});
    }
  
  }

  render(){
    return(
      <section className='applicant-dashboard'>
        <h2>Your Progress</h2>
        {this.state.steps.map((step, i) => (
          <DashboardStep
          stepNumber={step.step} 
          details={step.details}
          link={step.link}                    
          url={step.url} 
          addUrl={(e) => this.addUrlHandler(e, step.step)}
          submit={(e) => this.submitUrlHandler(e, step.step)}
          alert={step.alert}
          key={i} />
        ))}
      </section>
    );
  }
}

export default ApplicantDashboard;
