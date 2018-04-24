import React, {Component} from 'react';
import DashboardStep from './DashboardStep';
import axios from 'axios';
import helpers from '../../helpers'

import './ApplicantDashboard.css';

class ApplicantDashboard extends Component {
  state={
    steps: helpers.stepsArray,
  }
 
  addUrlHandler = (e, id) => { 
    // target and only change the input field we want to write in 
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

    //check url is valid and that link is a substract of that url display a message when none of these condition are meeted
    if (helpers.ValidURL(step.url) && (helpers.containPartOf(step.url, step.link) !== -1)) {
      step.alert = '';      
      const steps = [...this.state.steps];
      steps[stepIndex] = step;
      step.status = 'submitted';      
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
    
    // send data backend only if url submitted meet the requirement
    if (helpers.ValidURL(step.url) && (helpers.containPartOf(step.url, step.link) !== -1)) {
      const steps = [...this.state.steps];
      steps[stepIndex] = step;
      step.status = true;
      this.setState({ steps: steps,});
      axios
        .post('http://localhost:3001/api/applicants/steps-submitted/:id', {
        applicant_id: 20,
        step_number: this.state.steps[stepIndex].step,
        status: this.state.steps[stepIndex].status,
        url: this.state.steps[stepIndex].url,
      })
      .then(res => {
        console.log(res);
        this.setState({ steps: steps });
        
      })
      .catch(error => {
        console.log(error.message);
      });
      
      // for all these cases don't post submit the url
    } else if (helpers.ValidURL(step.url) && (helpers.containPartOf(step.url, step.link) === -1)){
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
          status={step.status}
          key={i} />
        ))}
      </section>
    );
  }
}

export default ApplicantDashboard;
