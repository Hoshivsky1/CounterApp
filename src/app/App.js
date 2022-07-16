import React from 'react';

import './App.css';

class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		maxcounter: 9999,
		mincounter: -9999,
		counter: 0
	  }
	}
  
	counterInc = () => {
	  this.setState(state => ({
		counter: state.counter === state.maxcounter? state.counter = state.maxcounter :state.counter + 1
	  }))
	}
	
	counterDec = () => {
	  this.setState(state => ({
		counter: state.counter === state.mincounter? state.counter = state.mincounter :state.counter - 1
	  }))
	}
	
	counterReset = () => {
	  this.setState(state => ({
		counter: 0
	  }))
	}
	
	counterRandom = () => {
	  this.setState(state => ({
		counter: Math.floor(Math.random() * (state.maxcounter) * 2) +(state.mincounter) 
	  }))
	}

	render() {
	  return (
		<div class="app">
		  <div class="counter">{this.state.counter}</div>
		  <div class="controls">
			<button onClick={this.counterInc}>INC</button>
			<button onClick={this.counterDec}>DEC</button>
			<button onClick={this.counterRandom}>RND</button>
			<button onClick={this.counterReset}>RESET</button>
		  </div>
		</div>
	  )
	}
  }

export default App;
