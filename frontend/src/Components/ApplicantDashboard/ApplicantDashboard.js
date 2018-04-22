import React, {Component} from 'react';
import stepsArray from './stepsArray';
import DashboardStep from './DashboardStep';
import './ApplicantDashboard.css';

class ApplicantDashboard extends Component {
  state={
    steps: stepsArray,
  }
 
  addUrlHandler = (e) => {
    e.preventDefault();
    console.log('from add url')
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  render(){
    return(
      <section className='applicant-dashboard'>
        <h2>Your Progress</h2>
        {stepsArray.map((step, i) => (
          <DashboardStep 
          stepNumber={step.step} 
          details={step.details}
          url={this.state.steps[i].url} 
          addUrl={this.addUrlHandler}
          key={i} />
        ))}
      </section>
    );
  }
}

export default ApplicantDashboard;
