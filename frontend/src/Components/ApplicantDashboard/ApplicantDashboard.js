import React, {Component} from 'react';
import DashboardStep from './DashboardStep';
import axios from 'axios';
import helpers from '../../helpers'

import './ApplicantDashboard.css';

class ApplicantDashboard extends Component {
  state={
    steps: helpers.stepsArray,
    data: [],
    id: this.props.match.params.id,
  }
 
  componentDidMount() {
		this.getData(this.state.id);
  }
  
	getData = (id) => {
		fetch(`http://localhost:3001/api/dashboard/${id}`)
		.then(results => results.json())
		.then(data => {
			this.setState({
				data: data.data,
			})
		})
		.catch(err => console.log(err));
	}

  addUrlHandler = (e, id) => { 
    // TARGET AND ONLINE CHANGE THE VALUE OF THE INPUT APPLICANT WANT TO SUBMIT LINK
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

    // CHECK IF URL SUBMITTED IS VALID && IF LINK (KEY IN STEPSARRAY) IS A SUBSTRACT OF THAT URL AND DISPLAY MESSAGE WHEN NONE ONE THOSE CONDITIONS ARE MEETED 
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
    
    // SEND DATA TO BACKEND ONLY IF URL SUBMITTED BY APPLICANT MEET THE REQUIREMENT BELOW 
    if (helpers.ValidURL(step.url) && (helpers.containPartOf(step.url, step.link) !== -1)) {
      const steps = [...this.state.steps];
      steps[stepIndex] = step;
      step.alert = 'sumitted';
      this.setState({ steps: steps,});
      axios
        .post(`http://localhost:3001/api/dashboard/${this.props.match.params.id}`, {
        applicant_id: this.props.match.params.id,
        step_number: this.state.steps[stepIndex].step,
        status: this.state.steps[stepIndex].status,
        url: this.state.steps[stepIndex].url,
      })
      .then(res => {
        this.setState({ steps: steps });
      })
      .catch(error => {
        console.log(error.message);
      });
      
      // FOR ALL THE CONDITIONS BELOW DON'T SEND DATA TO BACKEND
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
			<p> Welcome to your Page, <b>Applicant Name </b> </p>
			<p> There will be more information about steps and what applicant should do with them </p>
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
          key={i} 
          data={this.state.data}
          />
        ))}
      </section>
    );
  }
}

export default ApplicantDashboard;
