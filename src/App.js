import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Normalize.css';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
