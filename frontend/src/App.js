import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
	render() {
		return (
			<div className="App container">
				<Navigation />
			</div>
		);
	}
}

export default App;
