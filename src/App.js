import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Normalize.css';
import LogIn from './LogIn/LogIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogIn />
      </div>
    );
  }
}

export default App;
