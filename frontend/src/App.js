import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Routes from './Components/Router/Routes';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<Routes />
			</div>
		);
	}
}

export default App;
