import React, {Component} from 'react';
import DashboardStep from './DashboardStep';
import helpers from '../../helpers'

class ApplicantDashboard extends Component {
  state={
    steps: helpers.stepsArray,
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
    console.log(step)
    helpers.ValidURL(e.target.value, step.link)
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
          link={step.link}                    
          url={step.url} 
          addUrl={(e) => this.submitUrlHandler(e, step.step)}
          key={i} />
        ))}
      </section>
    );
  }
}

export default ApplicantDashboard;
